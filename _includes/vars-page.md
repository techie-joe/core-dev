```yml
{%- for v in page %}
{%- if v[0]=='content' %}
{{ v[0] | ljust: 10, ' ' }}: [{{ v[1].size }} characters]
{%- else %}
{{ v[0] | ljust: 10, ' ' }}: {{ v[1] }}
{%- endif %}
{%- else -%}
# its empty
{%- endfor %}
```