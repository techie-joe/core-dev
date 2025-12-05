```yml
size: {{ site.static_files.size | default:0 }}
{%- for file in site.static_files %}
#{{ forloop.index }} -
  basename      : {{ file.basename }}
  name          : {{ file.name }}
  path          : {{ file.path }}
  extname       : {{ file.extname }}
  modified_time : {{ file.modified_time }}
{%- else %}
# its empty
{%- endfor %}
```