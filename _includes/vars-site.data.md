```yml
# [{{ site.data.size | default: 'no' }}] files
{{''}}
{%- for file in site.data %}
# file.{{ forloop.index }} - {{ file[0] }}
{%- assign d=file[1] %}
{% include mod-inspect.md var=d blob=blob pad="" tab="  " %}
{{''}}
{%- else %}
# its empty
{%- endfor %}
```