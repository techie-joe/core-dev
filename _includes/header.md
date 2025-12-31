{%- include ui.html %}
{%- if page.use_header == false %}
<style>._header{display:none !important}</style>
{%- elsif site.github.repository_nwo == 'techie-joe/dove' %}
<h1>{%- include dove/logo.html %}</h1>
{%- else -%}
<h1>{%- include logo.html %}</h1>
{%- endif %}