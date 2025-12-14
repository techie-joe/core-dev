---
layout: dove
use_footer: edit_link_only

title: Variables
description: Variables on this site.
---
<style>article pre.highlight { max-height:50vh }</style>

{% include_relative _vars_nav.md %}

{%-comment %}
content, highlighter_prefix, highlighter_suffix, jekyll, layout, page, paginator, site, theme
{% endcomment %}

{%- assign word_key = "[0] key,[1] key,[n] keys" %}

**{% include mod-plural.md val=keys word=word_key %} :**{{' '}}
{{- keys | sort | join: ", " }}
{: .box.highlight.pa.smaller.mono }

```yml
# content : [blob - content of the current page]
{%- include mod-peek.md val=content word="[0] byte,[1] byte,[n] bytes" %}
# jekyll : [{{ jekyll }}]
{%- include mod-peek.md val=jekyll %}
# site : [{{ site }}]
{%- include mod-peek.md val=site %}
# theme{{ ' : ' }}
{%- include mod-peek.md val=theme %}
# page : [json]
{%- include mod-peek.md val=page word="[0] page,[1] page,[n] pages" %}
# paginator{{ ' : ' }}
{%- include mod-peek.md val=paginator %}
highlighter_prefix : {{ highlighter_prefix | jsonify }}
highlighter_suffix : {{ highlighter_suffix | jsonify }}
```
{: .no_max_height }

{% comment %}--- end of page ---{% endcomment %}