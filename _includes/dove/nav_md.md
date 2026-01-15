{%- include ui.html %}

{%- assign _sub = include.sub | default: '' %}
{%- assign _main = _sub | append: '/samples' %}
{%- assign _home = _sub | append: '/md/home' %}
{%- assign _page = _sub | append: '/md/page' %}
{%- assign _post = _sub | append: '/md/post' %}
{%- assign _404  = _sub | append: '/md/404' %}

{%- assign _path = _main %}
[Samples]({{ site.baseurl }}/{{ _main }})
{{- angle -}}
**Md**
{{- colon -}}
{%- assign _path = _home | append: '.md' %}
{%- if page.path == _path -%}
**Home**{%- else %}[Home]({{ site.baseurl }}/{{ _home }})
{%- endif %}
{{- bull -}}
{%- assign _path = _page | append: '.md' %}
{%- if page.path == _path -%}
**Page**{%- else %}[Page]({{ site.baseurl }}/{{ _page }})
{%- endif %}
{{- bull -}}
{%- assign _path = _post | append: '.md' %}
{%- if page.path == _path -%}
**Post**{%- else %}[Post]({{ site.baseurl }}/{{ _post }})
{%- endif %}
{{- bull -}}
{%- assign _path = _404 | append: '.md' %}
{%- if page.path == _path -%}
**404**{%- else %}[404]({{ site.baseurl }}/{{ _404 }})
{%- endif %}

{{ thin_hr }}

{% comment %}
**[{{ _sub | capitalize }}]({{ site.baseurl }}/{{ _sub }})**
{%- assign _path = _prev | append: '.md' %}
{%- if page.path == _path -%}
**Preview**{%- else %}[Preview]({{ site.baseurl }}/{{ _prev }})
{%- endif %}
{{- bull -}}
{% endcomment %}