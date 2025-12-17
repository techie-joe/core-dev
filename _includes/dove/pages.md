{%- assign nl = "
" %}
{%- assign _exclude = include.exclude | default: "" | split: "," %}
{%- assign n = 0 %}
{%- if site.pages %}
  {%- assign sorted_pages = site.pages | sort: "path" %}
  {%- for p in sorted_pages %}
  {%- unless _exclude contains p.path %}
  {%- if p.index != false and p.title.size %}
    {{-nl-}}
    {%- assign title = p.title | default:'(Untitled page)' %}
    {%- if p.url == '/' %}{%- assign title = 'Home' %}{%- endif %}
    {%- if p.path != page.path -%}
      - [{{ title }}]({{ site.base_url }}{{ p.url }})
      {%- else -%}
      - {{ title }}
    {%- endif %}
    {%- assign n = n | plus: 1 %}
  {%- endif %}
  {%- endunless %}
  {%- endfor %}
{%- endif %}
{%- unless n > 0 -%} There is none right now.
{%- endunless %}