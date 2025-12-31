{%- include ui.html %}
{% if page.use_nav == false -%}
<style>._nav{display:none !important}</style>
{%- elsif site.github.repository_nwo == 'techie-joe/dove' %}
{%- include dove/nav.md %}
{%- else %}
<!-- your nav goes here -->
<!-- but right now lets just hide it -->
<style>._nav{display:none !important}</style>
{%- endif %}