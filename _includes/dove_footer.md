{% capture thin_hr -%}<hr class="thin border-gray-light" />{%- endcapture %}

{{ thin_hr }}
{% unless page.use_footer contains 'edit_link_only' -%}
<nav>
<p><b>Dove</b>
<i class="_icon"><i class="isvg">
<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor" fill-opacity="1"></path>
</svg></i></i>

<a href="https://github.com/techie-joe/dove" target="_edit">Repository</a>
<i class="_icon"><i class="itext">•</i></i>

<a href="https://techie-joe.github.io/proto" target="_test">Proto</a>
</p>

{{ thin_hr | markdownify }}

<p><b>Techie Joe's</b>
<i class="_icon"><i class="isvg">
<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor" fill-opacity="1"></path>
</svg></i></i>

<a href="https://techie-joe.github.io" target="_techiejoes">Website</a>
<i class="_icon"><i class="itext">•</i></i>

<a href="https://github.com/techie-joe" target="_github">Profile</a>
<i class="_icon"><i class="itext">•</i></i>

<a href="/nova/site/themejs" target="_themejs">ThemeJs</a>
</p>
</nav>
{%- else -%}
{% if site.github.private != true and site.github.license -%}
{{ thin_hr }}
<p class="text-right text-gray"><small>This site is open source. {% github_edit_link "Improve this page" %}.</small></p>
{%- endif %}
{%- endunless %}
