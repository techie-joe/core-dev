{% include ui.html %}

{%- unless page.use_footer contains 'edit_link_only' %}

{{ thin_hr }}

{%- capture footer %}

**Dove**
{{ angle }}
<a href="https://github.com/techie-joe/dove" target="_edit">Repository</a>
{{- bull -}}
<a href="https://techie-joe.github.io/proto" target="_test">Proto</a>

{{ thin_hr }}

**Techie Joe's**
{{ angle }}
<a href="https://techie-joe.github.io" target="_techiejoes">Website</a>
{{- bull -}}
<a href="https://github.com/techie-joe" target="_github">Profile</a>
{{- bull -}}
<a href="/nova/site/themejs" target="_themejs">ThemeJs</a>

{%- endcapture %}

<nav>{{ footer | markdownify }}</nav>

{%- endunless %}

{%- if site.github.private != true and site.github.license and page.use_pug != true %}

{{ thin_hr }}

This site is open source. {% github_edit_link "Improve this page" %}.
{: .text-right.text-gray.small }

{%- endif %}