{%- assign sorted_pages = site.pages | sort: "path" %}
{% for p in sorted_pages %}
{%- if p.index != false %}
  {%- assign title = p.title %}
  {%- if title == site.title %}{%- assign title = 'Home' %}{%- endif %}
  {%- if title.size > 0 and p.path != page.path %}
  - [{{ title | default:'(Untitled page)' }}]({{ site.base_url }}{{ p.url }})
  {%- else %}
  - {{ title | default:'(Untitled page)' }}
  {%- endif %}
{%- endif %}
{%- endfor %}