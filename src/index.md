---
title: Philosophy Notes
subtitle: Brief notes on philosophy and philosophers
layout: layouts/base.njk
---
## Random Quote

## Philosophers - recently updated
<ul class="listing">
{%- for page in collections.philosophers | sort(false, false, 'data.title')  -%}
  {%- if loop.index < 10 -%}
    <li>
      <a href="{{ page.url }}">{{ page.data.name }}</a> -
      <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
    </li>
  {%- endif %}
{%- endfor -%}
</ul>

## Topics - recently updated
<ul class="listing">
{%- for page in collections.concepts | sort(false, false, 'data.title') -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>