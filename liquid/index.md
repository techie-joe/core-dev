---
use_footer: edit_link_only
title: Liquid basics
description: Basic Liquid syntaxes.
---
{%- include ui.html %}
{%- include_relative _nav_liquid.md %}
{{ thin_hr }}

# {{ page.title }}

###### assigning values & rendering it

{% raw %}
```liquid
{%- assign variable = value_or_expression | filter: 'filter_expression' %}
{{ variable | default: "[default-value]" }}
{{ json_variable | jsonify }}
```
{% endraw %}

> nil, "" and 0 are treated as **false**
{: .mono.smaller }

###### numbers

{%- assign numbers = (1..9) %}

```yml
numbers  : {{ numbers | jsonify }} [{{ numbers | size | append: ' items' }}]
```

###### strings

{%- assign string   = 'jAmEs  r  pEtErSoN .' %}

```yml
string        : {{ string | jsonify }} [{{ string | size | append: ' characters' }}]

# replace: ' r ' | remove: '.'
{%- assign string = string | replace: ' r ', ' ' | remove: '.' | split: ' ' | join: ' ' %}
string        : {{ string | jsonify }} [{{ string | size | append: ' characters' }}]
upcase        : {{ string | upcase }}
downcase      : {{ string | downcase }}
capitalize    : {{ string | capitalize }}

# capitalize | replace: "peterson", "Rodney" | prepend: 'Mr. ' | append: ' (age 42)'
{%- assign string = string | capitalize | replace: "peterson", "Rodney" | prepend: 'Mr. ' | append: ' (age 42)' %}
string        : {{ string | jsonify }} [{{ string | size | append: ' characters' }}]
truncate      : {{ string | truncate: 15 }}
```

###### date

{%- assign date = '2005-03-09T20:10:30' %}
{%- assign date_format = "%A, %B %d, %Y @ %I:%M:%S %p" %}

```yml
date : {{ date }}
date : {{ date | date: date_format }}
now  : {{ "now" | date: date_format }}
```

| -- | :-------------------------------- | ----- | 
| %B | Full month name | November |
| %b | Abbreviated month name | Nov |
| %A | Full day name | Thursday |
| %a | Abbreviated day name | Thursday |
| %w | Day of the week as a number (0=Sunday, 6=Saturday) | 4 |
| %d | Month as a padded number (01-12) | 03 |
| %m | Month as a padded number (01-12) | 03 |
| %Y | Full year (4 digits) | 2005 |
| %y | Year as a padded number (2 digits) | 05 |
| %H | 24-hour clock (00-23) | 21 |
| %I | 12-hour clock (01-12) | 06 |
| %M | Minute as a padded number (00-59) | 01 |
| %S | Second as a padded number (00-59) | 02 |
| %p | AM/PM indicator (uppercase) | PM |
{: .simple }

###### controls

```yml
if true : {% if true -%} when true {%- endif %}
elsif true : {% if false -%}  {%- elsif true -%} when true {%- endif %}
else : {% if false -%} when false {%- else -%} otherwise {%- endif %}

unless true  : {% unless true  -%} when not true {%- else -%} when true {%- endunless %}
unless false : {% unless false -%} when not false {%- else -%} when false {%- endunless %}

{% assign a = 'a' -%}
case a :
{%- case a -%}
  {%- when 'a' %} when 'a'
{%- endcase %}
else :
{%- case a -%}
  {%- else %} otherwise 
{%- endcase %}

# Check a blank string with the `blank` object.
{% if '' == blank -%} works {%- else -%} not working {%- endif %}

# Compare with `empty` to check whether an object exists before accessing any of its attributes.
{% if undefined == empty -%} works {%- else -%} not working {%- endif %}
```

###### loops

```yml
(1..9){{' : '}}
{%- for i in (1..9) -%}
{{ i }}
{%- unless forloop.last -%}{{','}}{%- endunless %}
{%- endfor %}

numbers{{' : '}}
{%- assign numbers = "one,two,three,four,five,six,seven,eight,nine,ten" | split:"," %}
{%- for n in numbers limit:5 -%}
[{{ forloop.index | append: ',' }}{{ n | append: ','}}{%- cycle 'odd', 'even' %}]
{%- unless forloop.last -%}{{' '}}{%- endunless %}
{%- endfor %}
```

{% raw %}Use `{% break %}` and `{% continue %}` to get out of a loop. 
Use `{% else %}` to handle empty arrays.{% endraw %}

###### capture

{% capture block -%} **captured block** {%- endcapture %}

{{ block }}
{: .box.ba.text-center }

{% capture note_md -%}
Use `markdownify` before using it inside an HTML block.
{%- endcapture %}

<div class="box ba text-center">{{ note_md | markdownify }}</div>

###### raw

`raw` skips liquid. 
Using **white-space modifier** `-` with it will cause build error.  



```liquid
{% raw %}{{ 'everything inside raw will be rendered as-is' }}{% endraw %}
```

###### comment

{% raw %}
```liquid
{% comment %} Comment block will not appear in the rendered page. {% endcomment %}
```
{% endraw %}

## Unsupported Liquid Syntaxes

Github Pages does not support `echo` and `render` at the moment.

{% raw %}
```liquid
{% echo 'echo' %}
{% render 'snippet', 
  card_title: "Coffee Maker", 
  card_description: "Brews perfect coffee every time." 
%}
```
{% endraw %}

{: .mt-6 }

{{ thin_hr }}

{% include_relative _nav_liquid.md %}