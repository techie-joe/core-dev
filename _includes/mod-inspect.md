{%- assign word_key = "[0] key,[1] key,[#n;] keys" %}
{%- assign word_character = "[0] character,[1] character,[#n;] characters" %}
{%- assign _tab = include.tab | default: "" %}
{%- assign _pad = include.pad | default: "             " %}
{%- if include.tab != nil %}{% assign _tab = include.tab %}{% endif %}
{%- if include.pad != nil %}{% assign _pad = include.pad %}{% endif %}
{%- assign _json = include.json | default: "categories,tags" | split: "," %}
{%- assign _blob = include.blob | default: "content,excerpt,output" | split: "," %}
{%- assign _exclude = include.exclude | default: "" | split: "," %}
{%- assign _var = include.var %}
{{-''}}
{%- include mod-plural.md word=word_key val=_var %}
{%- for v in _var %}
{%- unless _exclude contains key %}
{{ _tab -}}
  {%- assign key = v[0] %}
  {%- assign val = v[1] %}
  {%- include mod-label.md text=key pad=_pad -%}{{-' : '-}}
  {%- if _blob contains key %}
  {%- include mod-plural.md word=word_character val=val %}
  {%- else %} {{- "" | append: val }}
  {%- endif %}
{%- endunless %}
{%- else %}
# its empty
{%- endfor %}