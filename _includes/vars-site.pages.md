```yml
size: {{ site.pages.size | default:0 }}
{%- for page in site.pages %}
-
  {%- for v in page %}
  {%- if v[0]=='content' %}
  {{ v[0] }}: [{{ v[1] | size }} characters]
  {%- else %}
  {{ v[0] }}: {{ v[1] }}
  {%- endif %}
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```