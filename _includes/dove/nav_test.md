{%- include ui.html %}

{%- if site.github.environment == 'development' -%}
**Test**
{{ angle }}
{% if page.path == 'test_md.md' -%}
**Markdown**{%- else %}[Markdown]({{ site.base_url }}/test_md)
{%- endif %}
{{- bull -}}
{% if page.path == 'test_pug.html' -%}
**Pug**{%- else %}[Pug]({{ site.base_url }}/test_pug)
{%- endif %}
{%- endif %}

{%- comment %}
{%- endcomment %}