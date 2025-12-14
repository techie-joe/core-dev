{%- assign sorted_pages = site.pages | sort: "path" %}

{%- for p in sorted_pages %}
{%- if p.index != false and p.title and p.title.size %}
{%- assign title = p.title | default:'(Untitled page)' %}
{%- if title == site.title %}
{%- assign title = 'Home' %}
{%- endif %}
{%- if p.path != page.path %}
- [{{ title }}]({{ site.base_url }}{{ p.url }})
{%- else %}
- {{ title }}
{%- endif %}
{%- endif %}
{%- else %}
{%- endfor %}