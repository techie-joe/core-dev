{% include ui.html %}

{%- if page.use_footer contains 'demo_sample' -%}

{{ thin_hr }}

`// site footer`

{%- else %}

{%- capture dove_footer %}
**Dove**
{{- angle -}}
[Repository](https://github.com/techie-joe/dove){: target="_dove_repository" }
{{- bull -}}
[Proto](https://techie-joe.github.io/proto){: target="_proto" }
{%- endcapture %}

{%- capture tj_footer %}
**Techie Joe's**
{{- angle -}}
[Website](https://techie-joe.github.io){: target="_techiejoe_website" }
{{- bull -}}
[Profile](https://github.com/techie-joe){: target="_techiejoe_profile" }
{{- bull -}}
[ThemeJs](/nova/site/themejs){: target="_themejs" }
{%- endcapture %}

<nav class="_nav">
{{- thin_hr -}}
{{- dove_footer | markdownify -}}
{{- thin_hr -}}
{{- tj_footer | markdownify -}}
</nav>

{%- endif %}