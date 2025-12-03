{% capture thin_hr -%}<hr class="thin border-gray-light" />{%- endcapture %}
{% capture bull -%} <i class="_icon"><i class="itext">&bull;</i></i> {%- endcapture %}

{% if page.path == 'index.html' -%}
**Home**{%- else -%}[Home]({{ site.base_url }}/)
{%- endif %}
{{ bull }}
{% if page.path == 'pages.md' -%}
**Pages**{%- else -%}[Pages]({{ site.base_url }}/pages)
{%- endif %}
{{ bull }}
{% if page.path == 'posts.md' -%}
**Posts**{%- else -%}[Posts]({{ site.base_url }}/posts)
{%- endif %}
{{ bull }}
{% if page.path == 'vars/index.md' -%}
**Variables**{%- else -%}[Variables]({{ site.base_url }}/vars)
{%- endif %}
{: style="margin:1rem 0" }

{{ thin_hr }}

{% comment %}
{{ bull }}
{% if page.path == 'index.md' -%}
**Markdown**{%- else -%}[Markdown]({{ site.base_url }}/md)
{%- endif %}
{{ bull }}
[Test]({{ site.base_url }}/test)
{% endcomment %}