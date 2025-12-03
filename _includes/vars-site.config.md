```yml
{%- for v in site.config %}
{{ v[0] }}: {{ v[1] }}
{%- else %}
# its empty
{%- endfor %}
```