```yml
data: {{ site.data.size | default:0 }}
{%- for data in site.data %}
- {{ data[0] }} : {{ data[1] | jsonify }}
{%- else %}
# its empty
{%- endfor %}
```