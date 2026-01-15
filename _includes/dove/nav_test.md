{%- include ui.html %}

**Test**
{{- angle -}}
{% if page.path == 'test_md.md' -%}
**Markdown**{%- else %}[Markdown]({{ site.baseurl }}/test_md)
{%- endif %}
{{- bull -}}
{% if page.path == 'test_pug.html' -%}
**Pug**{%- else %}[Pug]({{ site.baseurl }}/test_pug)
{%- endif %}

{%- comment %}
{%- endcomment %}