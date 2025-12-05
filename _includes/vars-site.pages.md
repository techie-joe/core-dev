```yml
size: {{ site.pages.size | default:0 }}
{%- assign pad = "             " %}
{%- assign list = "content,excerpt" | split: "," %}
{%- for page in site.pages %}
#{{ forloop.index }} -
  {%- for v in page %}
    {%- if v[0].size < pad.size %}
      {%- assign key = v[0] | append: pad | slice: 0, pad.size %}
      {%- else %}
      {%- assign key = v[0] %}
    {%- endif %}
  {{ key | append: " : " }}
    {%- if list contains v[0] %}
      {%- if v[1] -%} [{{ v[1].size }} characters]
      {%- else -%} [0 character]
      {%- endif %}
    {%- else -%} {{ v[1] }}
    {%- endif %}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```