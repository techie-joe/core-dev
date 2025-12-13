{%- assign word_key = "[0] key,[1] key,[#n;] keys" %}
{%- comment -%}
------------------------------------------------------------------
{%- endcomment -%}

###### page

{{-''}}
{{ '**keys**: ' }} {{ page.keys | join: ", " }}
{: .box.highlight.pa.smaller.mono }

```yml
{%- assign val = page %}
# page : [json]
keys : {% include mod-plural_2.md val=val.keys word=word_key %}
size : {% include mod-plural_2.md val=val %}
{{'#'}} {% include mod-inspect.md var=val %}
```

###### layout

```yml
{{'#'}} {% include mod-inspect.md var=layout %}
```

###### site.related_posts

```yml
# {% include mod-plural.md word=word_key val=site.related_posts %}
{%- if site.related_posts %}
{{ site.related_posts | jsonify }}
{%- else %}
# its empty
{%- endif %}
```