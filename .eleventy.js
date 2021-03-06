
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(config) {

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // Add some utility filters
  config.addFilter("squash", require("./src/utils/filters/squash.js") );
  config.addFilter("dateDisplay", require("./src/utils/filters/date.js") );

  // Add support for syntax highlighting
  config.addPlugin(syntaxHighlight);

  // Minify the html output
  config.addTransform("htmlmin", require("./src/utils/minify-html.js"));

  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log("UglifyJS error: ", minified.error);
          return code;
      }
      return minified.code;
  });

  // Sorting collection does not seem to work
  config.addCollection("philosophers", function (collection) {
    return collection.getFilteredByGlob("./src/philosophers/*.md").sort(function(a, b) {
      return a.data.title > b.data.title;
    });
  });

  config.addCollection("topics", function (collection) {
    return collection.getFilteredByGlob("./src/topics/*.md");
  });

  // Pass some assets right through
  config.addPassthroughCopy("./src/assets/");

  // Make the seed target act like prod
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src",
      output: "dist",
      data: `_data/${env}`
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};
