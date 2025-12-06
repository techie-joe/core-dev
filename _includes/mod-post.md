{%- assign _var = post %}
{%- assign _empty = "" | split: "," %}
{%- assign _tab = include.tab | default: "" %}
{{-''}}
{{ _tab -}} title         : {{ post.title }}
{{ _tab -}} date          : {{ post.date }}
{{ _tab -}} layout        : {{ post.layout }}
{{ _tab -}} ext           : {{ post.ext }}
{{ _tab -}} slug          : {{ post.slug }}
{{ _tab -}} id            : {{ post.id }}
{{ _tab -}} url           : {{ post.url }}
{{ _tab -}} previous      : {{ post.previous.id }}
{{ _tab -}} next          : {{ post.next.id }}
{{ _tab -}} path          : {{ post.path }}
{{ _tab -}} relative_path : {{ post.relative_path }}
{{ _tab -}} excerpt       : [{{ post.excerpt.size | default: 'no' }}] characters
{{ _tab -}} content       : [{{ post.content.size | default: 'no' }}] characters
{{ _tab -}} output        : [{{ post.output.size | default: 'no' }}] characters
{{ _tab -}} draft         : {{ post.draft }}
{{ _tab -}} collection    : {{ post.collection }}
{{ _tab -}} categories    : {{ post.categories | jsonify }}
{{ _tab -}} tags          : {{ page.tags | jsonify }}