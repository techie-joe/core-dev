{% capture thin_hr -%}<hr class="thin border-gray-light" />{%- endcapture %}
{% capture bull -%} <i class="_icon"><i class="itext">&bull;</i></i> {%- endcapture %}
{% capture angle -%}<i class="_icon"><i class="isvg"><svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor" fill-opacity="1"></path></svg></i></i>{%- endcapture %}

{% if page.path == 'vars/index.md' -%}
**Variables**{%- else %}[Variables]({{ site.base_url }}/vars/)
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
{% if site.github.environment -%}
{{ bull }}
{% if page.path == 'vars/test.md' -%}
**Test**{%- else %}[Test]({{ site.base_url }}/vars/test)
{%- endif %}
{%- endif %}
{: style="margin:1rem 0" }

{{ thin_hr }}

{% comment %}
{% endcomment %}