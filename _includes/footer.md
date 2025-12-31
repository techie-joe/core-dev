{%- include ui.html %}
{% if page.use_footer == false -%}
<style>._footer{display:none !important}</style>
{%- elsif site.github.repository_nwo == 'techie-joe/dove' %}
{%- include dove/footer.md %}
{%- else %}

{%- unless page.use_footer contains 'edit_link_only' -%}

{{ thin_hr }}

<!-- your footer goes here -->

{%- endunless %}

{%- if site.github.private != true and site.github.license and page.use_pug != true %}

{{ thin_hr }}

This site is open source. {% github_edit_link "Improve this page" %}.
{: .text-right.text-gray.small }

{%- endif %}

{%- endif %}