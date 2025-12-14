{%- assign sorted_pages = site.pages | sort: "path" %}
{% for p in sorted_pages %}
{%- if p.index != false and p.title != "" and p.title != empty %}
  {%- assign title = p.title | default:'(Untitled page)' %}
  {%- if title == site.title %}{%- assign title = 'Home' %}{%- endif %}
  {%- if p.path == page.path %}
  - {{ title }}
  {%- else %}
  - [{{ title }}]({{ site.base_url }}{{ p.url }})
  {%- endif %}
{%- endif %}
{%- endfor %}