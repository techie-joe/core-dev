{% capture thin_hr -%}<hr class="thin border-gray-light" />{%- endcapture %}
{% capture bull -%} <i class="_icon"><i class="itext">&bull;</i></i> {%- endcapture %}

[Home]({{ site.base_url }}/)
{{ bull }}
{% if page.path == 'pages/index.md' -%}
**Pages**{%- else -%}[Pages]({{ site.base_url }}/pages)
{%- endif %}
{{ bull }}
{% if page.path == 'pages/posts.md' -%}
**Posts**{%- else -%}[Posts]({{ site.base_url }}/posts)
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