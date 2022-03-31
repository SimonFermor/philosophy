---
title: Tags
subtitle: Brief notes on philosophy and philosophers
layout: layouts/base.njk
---
## Random Quote

## Recent Posts
<ul class="listing">
{%- for page in collections.all | reverse -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>