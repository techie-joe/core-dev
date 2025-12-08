{%- assign word_key = "[0] key,[1] key,[#n;] keys" %}
{%- assign word_character = "[0] character,[1] character,[#n;] characters" %}
{%- assign _tab = include.tab | default: "" %}
{%- assign _pad = include.pad | default: "             " %}
{%- if include.tab != nil %}{% assign _tab = include.tab %}{% endif %}
{%- if include.pad != nil %}{% assign _pad = include.pad %}{% endif %}
{%- assign _keys = "title,description,slug,permalink,author,collection,layout,draft,published,date,id,url,ext,name,basename,path,relative_path,image,categories,tags,content,excerpt,output,paginator,previous,next" | split: "," %}
{%- assign _blob = include.blob | default: "content,excerpt,output" | split: "," %}
{%- assign _block = include.block | default: "paginator" | split: "," %}
{%- assign _bloid = include.bloid | default: "previous,next" | split: "," %}
{%- assign _var = include.post %}
{{-''}}
{%- for key in _keys %}
{%- assign val = _var[key] %}
{{ _tab -}}
  {%- include mod-label.md text=key pad=_pad -%}{{-' : '-}}
  {%- if _blob contains key %} {%- include mod-plural.md word=word_character val=val %}
  {%- elsif _block contains key %} {%- include mod-plural.md word=word_key val=val %}
  {%- elsif _bloid contains key %} {{- "" | append: val.id }}
  {%- else %} {{- "" | append: val }}
  {%- endif %}
{%- endfor %}