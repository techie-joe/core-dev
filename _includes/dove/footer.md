{% include ui.html %}

{%- unless page.use_footer contains 'edit_link_only' %}

{{ thin_hr }}

{%- capture footer %}

**Dove**
{{ angle }}
[Repository](https://github.com/techie-joe/dove){: target="_dove_repository" }
{{- bull -}}
[Proto](/proto){: target="_proto" }

{{ thin_hr }}

**Techie Joe's**
{{ angle }}
[Website](https://techie-joe.github.io){: target="_techiejoe_website" }
{{- bull -}}
[Profile](https://github.com/techie-joe){: target="_techiejoe_profile" }
{{- bull -}}
[ThemeJs](/nova/site/themejs){: target="_themejs" }

{%- endcapture %}

<nav>{{ footer | markdownify }}</nav>

{%- endunless %}

{%- if site.github.private != true and site.github.license and page.use_pug != true %}

{{ thin_hr }}

This site is open source. {% github_edit_link "Improve this page" %}.
{: .text-right.text-gray.small }

{%- endif %}