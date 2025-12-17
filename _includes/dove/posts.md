{%- assign _exclude = include.exclude | default: "" | split: "," %}
{%- assign n = 0 %}
{%- if site.posts %}
  {%- assign sorted_posts = site.posts | sort: "date" | reverse %}
  {%- for p in sorted_posts %}
  {%- unless _exclude contains p.path %}
  {%- if p.index != false and p.title.size %}
{{''}}
    {%- assign title = p.title | default:'(Untitled post)' %}
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