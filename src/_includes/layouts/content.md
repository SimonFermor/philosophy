---
layout: layouts/base.njk
pageClass: content
templateEngineOverride: njk, md
---

<p class="date">
  Created: <time datetime="{{ last_edit_date }}">{{ last_edit_date | dateDisplay }}</time>
  Last edit: <time datetime="{{ create_date }}">{{ create_date | dateDisplay }}</time>
</p>
<main>
  {{ content | safe }}
  <div class="footnote">
    <p>
      Footer...
    </p>
  </div>
</main>

