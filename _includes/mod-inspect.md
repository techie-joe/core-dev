{%- assign _empty = "" | split: "," %}
{%- assign _var = include.var %}
{%- assign _tab = include.tab | default: "" %}
{%- assign _pad = include.pad | default: "" %}
{%- assign _blob = include.blob | split: "," | default: _empty %}
{%- include mod-plural.md word="[0] key,[1] key,[#n;] keys" val=_var %}
{%- for v in _var %}
{{ _tab -}}
  {%- assign key = v[0] %}
  {%- assign val = v[1] %}
  {%- assign label = key %}
  {%- if key.size < _pad.size %}
  {%- assign label = label | append: _pad | slice: 0, _pad.size %}
  {%- endif %}
  {{- label | append: " : " }}
  {%- if _blob contains key %}
  {%- include mod-plural.md word="[0] character,[1] character,[#n;] characters" val=val %}
  {%- else -%} {{ "" | append: val }}
  {%- endif %}
{%- else %}
# its empty
{%- endfor %}