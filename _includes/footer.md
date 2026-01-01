{%- include ui.html %}
{%- capture _footer %}

{{ thin_hr }}

<!-- your footer goes here -->

{%- endcapture %}
{%- capture _github_edit_link %}

{{ thin_hr }}

This site is open source. {% github_edit_link "Improve this page" %}.
{: .text-right.text-gray.small }

{%- endcapture %}
{%- if page.use_footer == false -%}
<style>._footer{display:none !important}</style>
{%- else %}
{%- unless page.use_footer contains 'edit_link_only' -%}
{%- if site.github.repository_nwo == 'techie-joe/dove' %}
{%- include dove/footer.md %}
{%- else %}{{ _footer }}
{%- endif %}
{%- endunless %}
{{ _github_edit_link }}
{%- endif %}