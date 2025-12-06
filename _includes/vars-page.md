{%- assign pad = "             " %}
{%- assign blob = "content,excerpt" %}

###### layout
```yml
{{'#'}} {% include mod-inspect.md var=layout pad=pad blob=blob %}
```

###### page
```yml
{{'#'}} {% include mod-inspect.md var=page pad=pad blob=blob %}
```

###### site.related_posts

```yml
# {% include mod-plural.md word=word_key val=site.related_posts %}
{%- for post in site.related_posts %}
# post.{{ forloop.index | append: ' - has ' -}}
{% include mod-plural.md word=word_key val=post %}
{%- include vars-post.md post=post tab="  " %}
{%- else %}
# its empty
{%- endfor %}
```