```yml
size: {{ site.posts.size | default:0 }}
{%- for post in site.posts %}
#{{ forloop.index }} -
  title    : {{ post.title }}
  date     : {{ post.date }}
  layout   : {{ post.layout }}
  ext      : {{ post.ext }}
  slug     : {{ post.slug }}
  id       : {{ post.id }}
  url      : {{ post.url }}
  previous : {{ post.previous.id }}
  next     : {{ post.next.id }}
  path          : {{ post.path }}
  relative_path : {{ post.relative_path }}

  excerpt       : {{ post.excerpt | jsonify }}
  content.size  : {{ post.content.size | default:0 }}
  output.size   : {{ post.output.size | default:0 }}

  draft      : {{ post.draft }}
  collection : {{ post.collection }}
  categories : {{ post.categories | jsonify }}
  tags       : {{ page.tags | jsonify }}
{%- else %}
# its empty
{%- endfor %}
```