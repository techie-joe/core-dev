```yml
size: {{ site.related_posts.size | default:0 }}
{%- for post in site.related_posts %}
-
  {%- for v in post %}
  {{ v[0] }}: {{ v[1] | jsonify }}
  {%- endfor %}
{%- endfor %}
```