```yml
size: {{ site.related_posts.size | default:0 }}
{%- for post in site.related_posts %}
#{{ forloop.index }} -
  {%- for v in post %}
  {{ v[0] }}: {{ v[1] | jsonify }}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```