{%- assign post = include.post %}
{%- assign tab = include.tab | default: "" %}
{{- '' }}
{{ tab -}} title    : {{ post.title }}
{{ tab -}} date     : {{ post.date }}
{{ tab -}} layout   : {{ post.layout }}
{{ tab -}} ext      : {{ post.ext }}
{{ tab -}} slug     : {{ post.slug }}
{{ tab -}} id       : {{ post.id }}
{{ tab -}} url      : {{ post.url }}
{{ tab -}} previous : {{ post.previous.id }}
{{ tab -}} next     : {{ post.next.id }}
{{ tab -}} path          : {{ post.path }}
{{ tab -}} relative_path : {{ post.relative_path }}
{{ tab -}} excerpt       : [{{ post.excerpt.size | default: 'no' }}] characters
{{ tab -}} content       : [{{ post.content.size | default: 'no' }}] characters
{{ tab -}} output        : [{{ post.output.size | default: 'no' }}] characters
{{ tab -}} draft         : {{ post.draft }}
{{ tab -}} collection    : {{ post.collection }}
{{ tab -}} categories    : {{ post.categories | jsonify }}
{{ tab -}} tags          : {{ page.tags | jsonify }}