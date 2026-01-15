{% include ui.html %}

{% if page.path == 'vars/index.md' -%}
**Variables**{%- else %}[Variables]({{ site.baseurl }}/vars)
{%- endif %}
{{ angle }}
{% if page.path == 'vars/site.md' -%}
**Site**{%- else %}[Site]({{ site.baseurl }}/vars/site)
{%- endif %}
{{ bull }}
{% if page.path == 'vars/page.md' -%}
**Page**{%- else %}[Page]({{ site.baseurl }}/vars/page)
{%- endif %}
{{ bull }}
{% if page.path == 'vars/github.md' -%}
**Github**{%- else %}[Github]({{ site.baseurl }}/vars/github)
{%- endif %}
{{ bull }}
{% if page.path == 'vars/repo.md' -%}
**Repositories**{%- else %}[Repositories]({{ site.baseurl }}/vars/repo)
{%- endif %}
{: style="margin:1rem 0" }

{% comment %}
{% endcomment %}