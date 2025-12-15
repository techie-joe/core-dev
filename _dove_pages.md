{%- assign sorted_pages = site.pages | sort: "path" %}
{%- assign _exclude = "" | split: "," %}
{%- for p in sorted_pages %}
{%- if p.index != false and p.title and p.title.size %}
{%- assign title = p.title | default:'(Untitled page)' %}
{%- if p.url == '/' %}
{%- assign title = 'Home' %}
{%- endif %}
{%- if p.path != page.path %}
- [{{ title }}]({{ site.base_url }}{{ p.url }})
{%- else %}
- {{ title }}
{%- endif %}
{%- endif %}
{%- else %}
{%- comment -%} There is no pages created {%- endcomment %}
{%- endfor %}