{%- assign _empty = "" | split: "," %}
{%- assign _var = include.var %}
{%- assign _tab = include.tab | default: "" %}
{%- assign _pad = include.pad | default: "" %}
{%- assign _blob = include.blob | split: "," | default: _empty %}
{{- '#' | prepend: _tab }} [{{ _var.size | default: 'no' }}] keys
{%- for v in _var -%}
  {%- if v[0].size < _pad.size %}
    {%- assign key = v[0] | append: _pad | slice: 0, _pad.size %}
    {%- else %}
    {%- assign key = v[0] %}
  {%- endif %}
{{ key | prepend: _tab | append: " : " }}
  {%- if _blob contains v[0] %}
    {%- if v[1] -%} [{{ v[1].size }}] characters
    {%- elsif v[1].size == 1 -%} [1] character
    {%- else -%} [0] character
    {%- endif %}
  {%- else -%} {{ "" | append: v[1] }}
  {%- endif %}
{%- else %}
# its empty
{%- endfor %}