{%- assign _pad = include.pad | default: "" %}
{%- if include.pad != nil %}{% assign _pad = include.pad %}{% endif %}

{%- assign _key = include.text %}

{%- assign label = _key %}
{%- if _key.size < _pad.size %}
{%- assign label = label | append: _pad | slice: 0, _pad.size %}
{%- endif %}
{{- label }}