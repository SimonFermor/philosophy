---
title: Philosophy Notes
subtitle: Brief notes on philosophy and philosophers
layout: layouts/base.njk
---
## Random Quote

## Philosophers
<ul class="listing">
{%- for page in collections.philosophers | reverse -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>

## Concepts
<ul class="listing">
{%- for page in collections.concepts -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>