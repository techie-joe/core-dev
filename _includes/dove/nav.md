{%- include ui.html %}
{%- case page.layout %}
{%- when 'prime' or 'prime-page' or 'prime-post' %}{%- include dove/nav_md.md sub="prime" %}
{%- when 'nova' or 'nova-page' or 'nova-post' %}{%- include dove/nav_md.md sub="nova" %}
{%- when 'mallet' or 'mallet-page' or 'mallet-post' %}{%- include dove/nav_md.md sub="mallet" %}
{%- when 'core' or 'core-page' or 'core-post' %}{%- include dove/nav_md.md sub="core" %}
{%- else %}

{%- if page.path == 'index.html' -%}
**Home**{%- else -%}[Home]({{ site.base_url }}/)
{%- endif %}
{{- bull -}}
{%- if page.path == 'about.md' -%}
**About**{%- else -%}[About]({{ site.base_url }}/about)
{%- endif %}
{{- bull -}}
{%- if page.path == 'pages.md' -%}
**Pages**{%- else -%}[Pages]({{ site.base_url }}/pages)
{%- endif %}
{{- bull -}}
{%- if page.path == 'posts.md' -%}
**Posts**{%- else -%}[Posts]({{ site.base_url }}/posts)
{%- endif %}

{{ thin_hr }}

{%- endcase %}

{%- comment %}
{%- endcomment %}