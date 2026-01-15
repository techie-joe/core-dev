{%- include ui.html %}

{%- if page.path == 'liquid/index.md' -%}
**Liquid basics**{%- else -%}[Liquid basics]({{ site.baseurl }}/liquid)
{%- endif %}
{{- bull -}}
{%- if page.path == 'liquid/list.md' -%}
**Liquid list**{%- else -%}[Liquid list]({{ site.baseurl }}/liquid/list)
{%- endif %}

{% comment %}
{% endcomment %}