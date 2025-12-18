---
index: false
layout: dove
use_nav: false
use_footer: edit_link_only
title: Handling Liquid List
description: Handling Liquid List.
---
{%- include ui.html %}
{%- include_relative _nav_liquid.md %}

# {{ page.title }}

{%- assign list_x = 'a,m,b,n,c,o,z,y,x' | split: ',' %}

```liquid
{% raw %}{%- assign list_x = 'a,m,b,n,c,o,z,y,x' | split: ',' %}{% endraw %}
```

```yml
list_x   : {{ list_x }} [{{ list_x | size | append: ' items' }}]
jsonify  : {{ list_x | jsonify }}
join     : {{ list_x | join: ',' }}
order    : {{ list_x | first }}{{' ... '}}{{ list_x | last }}
loop     : # {% for item in list_x %}[{{ item }}]{{' '}}{%- endfor %}
sort     : {{ list_x | sort | jsonify }}
reverse  : {{ list_x | reverse | jsonify }}
slice    : {{ list_x | sort | slice: 3, 3 | jsonify }}
```

{%- assign list_a = 'apple,banana,cherry' | split: ',' %}

```liquid
{% raw %}{%- assign list_a = 'apple,banana,cherry' | split: ',' %}{% endraw %}
```

```yml
list_a   : {{ list_a | jsonify }} [{{ list_a | size | append: ' items' }}]
```

{%- assign list_a = list_a | join: ',' | prepend: 'pear,' | append: ',durian' | split: ',' %}

```liquid
{% raw %}{%- assign list_a = list_a | join: ',' | prepend: 'pear,' | append: ',durian' | split: ',' %}{% endraw %}
```

```yml
list_a   : {{ list_a | jsonify }} [{{ list_a | size | append: ' items' }}]
```

{: .mt-6 }

{{ thin_hr }}

{% include_relative _nav_liquid.md %}