{%- assign _var = include.var %}
{%- assign _pad = include.pad | default: "" %}
{%- assign _blob = include.blob | default: "" | split: "," %}
{%- assign _none = include.none | default: "default" %}

```yml
var  : {{ _var }}
blob : {{ _blob | jsonify }}
pad  : {{ _pad.size }}
none : {{ _none }}
```