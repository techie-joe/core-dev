{%- assign sorted_posts = site.posts | sort: "date" | reverse %}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.base_url }}{{ p.url }})
{%- endfor %}