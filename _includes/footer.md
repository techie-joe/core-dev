{%- if site.github.repository_nwo == 'techie-joe/dove' %}
{%- include dove/footer.md %}
{%- else %}

{%- include ui.html %}

{{ thin_hr }}

{%- unless page.use_footer contains 'edit_link_only' -%}

<!-- your footer goes here -->

{%- endunless %}

{%- if site.github.private != true and site.github.license and page.use_pug != true %}

This site is open source. {% github_edit_link "Improve this page" %}.
{: .text-right.text-gray.small }

{%- endif %}

{%- endif %}