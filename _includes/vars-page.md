```yml
{%- assign pad = "              " %}
{%- assign list = "content,excerpt" | split: "," %}
{%- for v in page %}
{%- if v[0].size < pad.size %}
{{ v[0] | append: pad | slice: 0, pad.size }}
{%- else %}
{{ v[0] }}
{%- endif %}
{%- if list contains v[0] -%}
{%- if v[1] -%}
: [{{ v[1].size }} characters]
{%- else -%}
: [0 character]
{%- endif %}
{%- else -%}
: {{ v[1] }}
{%- endif %}
{%- else -%}
# its empty
{%- endfor %}
```