---
title: Philosophers
subtitle: Brief notes on philosophy and philosophers
layout: layouts/base.njk
---
## Philosophers
<ul class="listing">
{%- for page in collections.philosophers | sort(false, false, 'data.title')  -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>