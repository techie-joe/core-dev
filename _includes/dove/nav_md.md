{%- include ui.html %}

{%- assign _sub = include.sub | default: '' %}
{%- assign _prev = _sub | append: '/md/preview' %}
{%- assign _home = _sub | append: '/md/home' %}
{%- assign _page = _sub | append: '/md/page' %}
{%- assign _post = _sub | append: '/md/post' %}
{%- assign _404  = _sub | append: '/md/404' %}
{%- assign _more = _sub | append: '/samples' %}
{%- capture __more -%}
[more..]({{ site.base_url }}/{{ _more }})
{%- endcapture %}

**Md**
{{- angle -}}
{%- assign _path = _home | append: '.md' %}
{%- if page.path == _path -%}
**Home**{%- else %}[Home]({{ site.base_url }}/{{ _home }})
{%- endif %}
{{- bull -}}
{%- assign _path = _page | append: '.md' %}
{%- if page.path == _path -%}
**Page**{%- else %}[Page]({{ site.base_url }}/{{ _page }})
{%- endif %}
{{- bull -}}
{%- assign _path = _post | append: '.md' %}
{%- if page.path == _path -%}
**Post**{%- else %}[Post]({{ site.base_url }}/{{ _post }})
{%- endif %}
{{- bull -}}
{%- assign _path = _404 | append: '.md' %}
{%- if page.path == _path -%}
**404**{%- else %}[404]({{ site.base_url }}/{{ _404 }})
{%- endif %}
{{- bull -}}<small>{{ __more }}</small>

{{ thin_hr }}

{% comment %}
**[{{ _sub | capitalize }}]({{ site.base_url }}/{{ _sub }})**
{%- assign _path = _prev | append: '.md' %}
{%- if page.path == _path -%}
**Preview**{%- else %}[Preview]({{ site.base_url }}/{{ _prev }})
{%- endif %}
{{- bull -}}
{% endcomment %}