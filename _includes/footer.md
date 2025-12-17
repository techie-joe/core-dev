{%- include ui.html %}

{%- unless page.use_footer contains 'edit_link_only' -%}

<!-- write your footer here -->

{%- endunless %}

{%- if site.github.private != true and site.github.license and page.use_pug != true %}

{{ thin_hr }}

This site is open source. {% github_edit_link "Improve this page" %}.
{: .text-right.text-gray.small }

{%- endif %}