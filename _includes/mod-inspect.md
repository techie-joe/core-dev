{%- assign nl="
" %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign word_character = "[0] character,[1] character,[n] characters" %}
{%- assign _tab = include.tab | default: "" %}
{%- assign _pad = include.pad | default: "" %}
{%- if include.tab != nil %}{% assign _tab = include.tab %}{%- endif %}
{%- if include.pad != nil %}{% assign _pad = include.pad %}{%- endif %}

{%- assign _include = include.include | default: "" | split: "," %}
{%- assign _exclude = include.exclude | default: "" | split: "," %}
{%- assign _blok = include.blok | default: "keys" | split: "," %}
{%- assign _bloc = include.bloc | default: "github" | split: "," %}
{%- assign _blob = include.blob | default: "content,excerpt,output" | split: "," %}
{%- assign _bloi = include.bloi | default: "size,paginator" | split: "," %}
{%- assign _ref_id = include.ref_id | default: "previous,next,owner" | split: "," %}
{%- assign _json = include.json | default: "excerpt_separator" | split: "," %}

{%- if include.val.keys %}
  {%- assign _keys = include.val.keys | sort %}
  {%- for key in _keys %}
    {%- unless _exclude contains key or _include contains key %}
    {%- assign _include = _include | push: key %}
    {%- endunless %}
  {%- endfor %}
  {%- elsif include.val.size %}
  {%- for v in include.val %}
    {%- assign key = v[0] %}
    {%- unless _exclude contains key or _include contains key %}
    {%- assign _include = _include | push: key %}
    {%- endunless %}
  {%- endfor %}
{%- endif %}

{%- assign n = 0 %}

{%- for key in _include %}
{%- unless _exclude contains key %}
  {%- assign _val = include.val[key] %}
  {%- if n > 0 %} {{-nl-}} {%- endif %}
  {{- _tab -}}
  {%- include mod-label.md text=key pad=_pad %}{{-' : '-}}
  {%- if _val == nil %} {{- '[nil]' }}
  {%- elsif _val == 0 %} {{- '0' }}
  {%- elsif _val == false %} {{- 'false' }}
  {%- elsif _val == blank %} {{- '[blank]' }}
  {%- elsif _val == empty %} {{- '[empty]' | append: _val }}
  {%- elsif _blok contains key -%} [{%- include mod-plural.md val=_val word=word_key %}]
  {%- elsif _bloc contains key -%} [{%- include mod-plural.md val=_val.keys word=word_key %}]
  {%- elsif _blob contains key -%} [{%- include mod-plural.md val=_val word=word_character %}]
  {%- elsif _bloi contains key -%} [{%- include mod-plural.md val=_val %}]
  {%- elsif _ref_id contains key -%} [{{- "" | append: _val.id }}]
  {%- elsif _json contains key -%} {{- _val | jsonify }}
  {%- else %} {{- "" | append: _val }}
  {%- endif %}
  {%- assign n = n | plus: 1 %}
{%- endunless %}
{%- else -%} # its empty
{%- endfor %}

{%- assign _peek = include.peek | default: "" | split: "," %}
{%- for key in _peek %}
  {%- assign _val = include.val[key] %}
  {{-nl-}} # {{ key }} {{-' : '-}}
  {%- include mod-peek.md val=_val %}
  {%- if _val %}
  {{- _tab -}} peek : # {{ _val | prepend: "" | truncate: 100 }}
  {%- endif %}
{%- endfor %}