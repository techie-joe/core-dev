{% include ui.html %}
{% if page.path == 'liquid/index.md' -%}
**Liquid basics**{%- else -%}[Liquid basics]({{ site.base_url }}/liquid)
{%- endif %}
{{ bull }}
{% if page.path == 'liquid/list.md' -%}
**Handling Liquid List**{%- else -%}[Handling Liquid List]({{ site.base_url }}/liquid/list)
{%- endif %}