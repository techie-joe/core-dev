{% include ui.html %}

{% if page.path == 'vars/index.md' -%}
**Variables**{%- else %}[Variables]({% link vars/index.md %})
{%- endif %}
{{ angle }}
{% if page.path == 'vars/site.md' -%}
**Site**{%- else %}[Site]({% link vars/site.md %})
{%- endif %}
{{ bull }}
{% if page.path == 'vars/page.md' -%}
**Page**{%- else %}[Page]({% link vars/page.md %})
{%- endif %}
{{ bull }}
{% if page.path == 'vars/github.md' -%}
**Github**{%- else %}[Github]({% link vars/github.md %})
{%- endif %}
{{ bull }}
{% if page.path == 'vars/repo.md' -%}
**Repository**{%- else %}[Repository]({% link vars/repo.md %})
{%- endif %}
{: style="margin:1rem 0" }

{{ thin_hr }}

{% comment %}
{% endcomment %}