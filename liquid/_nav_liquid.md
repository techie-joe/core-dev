{% include ui.html %}

{% if page.path == 'liquid/index.md' -%}
**Liquid basics**{%- else -%}[Liquid basics]({% link liquid/index.md %})
{%- endif %}
{{ bull }}
{% if page.path == 'liquid/list.md' -%}
**Handling Liquid List**{%- else -%}[Handling Liquid List]({% link liquid/list.md %})
{%- endif %}