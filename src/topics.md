---
title: Topics
subtitle: Brief notes on philosophy and philosophers
layout: layouts/base.njk
---
## Topics
<ul class="listing">
{%- for page in collections.topics | sort(false, false, 'data.title')  -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>