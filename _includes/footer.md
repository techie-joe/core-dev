{% capture thin_hr -%}<hr class="thin border-gray-light" />{%- endcapture %}

{{ thin_hr }}
{% unless page.use_footer contains 'edit_link_only' -%}
{%- else -%}
{% if site.github.private != true and site.github.license -%}
{{ thin_hr }}
<p class="text-right text-gray"><small>This site is open source. {% github_edit_link "Improve this page" %}.</small></p>
{%- endif %}
{%- endunless %}