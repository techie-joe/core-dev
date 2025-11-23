{% assign sorted_pages = site.pages | sort: "path" %}
{% for p in sorted_pages %}
{%- if p.title =%}
{%- if p.path != page.path %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.base_url }}{{ p.url }})
{%- else %}
- {{ p.title | default:'(Untitled page)' }}
{%- endif %}
{%- endif %}
{%- endfor %}
