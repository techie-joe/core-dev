---
use_footer: edit_link_only
title: Variables
description: Variables on this site.
---
<style>article pre.highlight { max-height:50vh }</style>

{% include_relative _vars_nav.md %}

{{ thin_hr }}

{%- assign word_key = "[0] key,[1] key,[n] keys" %}

**{% include plural.md val=keys word=word_key %} :**{{' '}}
{{- keys | sort | join: ", " }}
{: .box.highlight.pa.smaller.mono }

```yml
# content : [blob - content of the current page]
{%- include peek.md val=content word="[0] byte,[1] byte,[n] bytes" %}

# highlighter_prefix : {{ highlighter_prefix | jsonify }}
# highlighter_suffix : {{ highlighter_suffix | jsonify }}

# jekyll : [{{ jekyll }}]
{%- include peek.md val=jekyll %}

# layout{{ ' : ' }}
{%- include peek.md val=layout %}

# page : [json]
{%- include peek.md val=page word="[0] page,[1] page,[n] pages" %}

# paginator{{ ' : ' }}
{%- include peek.md val=paginator %}

# site : [{{ site }}]
{%- include peek.md val=site %}

# theme{{ ' : ' }}
{%- include peek.md val=theme %}
```
{: .no_max_height }

{{ thin_hr }}

{% include_relative _vars_nav.md %}

{% comment %} --- end of page --- {% endcomment %}