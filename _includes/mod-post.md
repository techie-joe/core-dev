{%- assign word_key = "[0] key,[1] key,[#n;] keys" %}
{%- assign word_character = "[0] character,[1] character,[#n;] characters" %}
{%- assign _tab = include.tab | default: "" %}
{%- assign _pad = include.pad | default: "             " %}
{%- if include.tab != nil %}{% assign _tab = include.tab %}{% endif %}
{%- if include.pad != nil %}{% assign _pad = include.pad %}{% endif %}

{%- assign _var = include.post %}

{%- assign _keys = "title,description,slug,permalink,author,collection,layout,draft,published,date,id,url,ext,name,basename,path,relative_path,image,categories,tags,content,excerpt,output" | split: "," %}
{%- assign _json = include.json | default: "categories,tags" | split: "," %}
{%- assign _blob = include.blob | default: "content,excerpt,output" | split: "," %}

{{-''}}
{%- for key in _keys %}
{%- assign val = _var[key] %}
{{ _tab -}}
  {%- include mod-label.md text=key pad=_pad %}{{' : '}}
  {%- if _blob contains key %}
  {%- include mod-plural.md word=word_character val=val %}
  {%- elsif _json contains key %} {{- val | jsonify }}
  {%- else %} {{- "" | append: val }}
  {%- endif %}
{%- endfor %}
{{ _tab -}} {%- include mod-label.md text='paginator' pad=_pad %} : {% include mod-plural.md word=word_key val=paginator %}
{{ _tab -}} {%- include mod-label.md text='previous' pad=_pad %} : [{{ _var.previous.id }}]
{{ _tab -}} {%- include mod-label.md text='next' pad=_pad %} : [{{ _var.next.id }}]