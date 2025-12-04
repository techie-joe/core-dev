```yml
{%- for v in page %}
{%- if v[0]=='content' or v[0]=='excerpt' %}
{{ v[0] }}: [{{ v[1].size }} characters]
{%- else %}
{{ v[0] }}: {{ v[1] }}
{%- endif %}
{%- else -%}
# its empty
{%- endfor %}
```