{%- assign word_key = "[0] key,[1] key,[#n;] keys" %}
{%- comment -%}
------------------------------------------------------------------
{%- endcomment -%}

###### layout

```yml
{{'#'}} {% include mod-inspect.md var=layout %}
```

###### page

```yml
{{'#'}} {% include mod-inspect.md var=page %}
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