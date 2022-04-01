---
title: Philosophers
subtitle: Brief notes on philosophy and philosophers
layout: layouts/base.njk
---
## Philosophers
<ul class="listing">
{%- for page in collections.philosophers | sort(false, false, 'data.name')  -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.name }}</a>
  </li>
{%- endfor -%}
</ul>