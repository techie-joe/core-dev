{% capture thin_hr -%}<hr class="thin border-gray-light" />{%- endcapture %}
{% capture bull -%}<i class="_icon"><i class="itext">•</i></i>{%- endcapture %}
{% capture angle -%}<i class="_icon"><i class="isvg"><svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor" fill-opacity="1"></path></svg></i></i>{%- endcapture %}

{% unless page.use_footer contains 'edit_link_only' -%}
{%- endunless %}

{% if site.github.private != true and site.github.license and page.use_pug != true -%}
{{ thin_hr }}
<p class="text-right text-gray"><small>This site is open source. {% github_edit_link "Improve this page" %}.</small></p>
{%- endif %}