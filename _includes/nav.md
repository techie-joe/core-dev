{%- if site.github.repository_nwo == 'techie-joe/dove' %}
{%- include dove/nav.md %}
{%- else %}
<!-- your nav goes here -->
<!-- but right now lets just hide it -->
<style>._nav{display:none !important}</style>
{%- endif %}