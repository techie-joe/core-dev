{% include ui.html %}

{% if page.path == 'vars/index.md' -%}
**Variables**{%- else %}[Variables]({{ site.base_url }}/vars)
{%- endif %}
{{ angle }}
{% if page.path == 'vars/site.md' -%}
**Site**{%- else %}[Site]({{ site.base_url }}/vars/site)
{%- endif %}
{{ bull }}
{% if page.path == 'vars/page.md' -%}
**Page**{%- else %}[Page]({{ site.base_url }}/vars/page)
{%- endif %}
{{ bull }}
{% if page.path == 'vars/github.md' -%}
**Github**{%- else %}[Github]({{ site.base_url }}/vars/github)
{%- endif %}
{{ bull }}
{% if page.path == 'vars/repo.md' -%}
**Repository**{%- else %}[Repository]({{ site.base_url }}/vars/repo)
{%- endif %}
{: style="margin:1rem 0" }

{{ thin_hr }}

{% comment %}
{% endcomment %}