---
title: Philosophy Notes
subtitle: Brief notes on philosophy and philosophers
layout: layouts/base.njk
---
## Random Quote

## Philosophers - recently updated
<ul class="listing">
{%- for page in collections.philosophers | sort(false, true, 'page.data.last_edit_date')  -%}
  {%- if loop.index < 10 -%}
    <li>
      <a href="{{ page.url }}">{{ page.data.name }}</a> -
      <time datetime="{{ page.date }}">{{ page.data.last_edit_date | dateDisplay("LLLL d, y") }}</time>
    </li>
  {%- endif %}
{%- endfor -%}
</ul>

## Topics - recently updated
<ul class="listing">
{%- for page in collections.topics | sort(false, true, 'page.data.last_edit_date') -%}
  {%- if loop.index < 10 -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.name }}</a> -
    <time datetime="{{ page.data.last_edit_date }}">{{ page.data.last_edit_date | dateDisplay("LLLL d, y") }}</time>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>