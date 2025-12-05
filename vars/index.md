---
layout: dove
use_footer: edit_link_only

title: Variables
description: Variables on this site.
---

<style>article pre.highlight { max-height:50vh }</style>

{% include_relative vars_nav.md %}

{%- assign pad = "             " %}
{%- assign blob = "content,excerpt" %}

###### layout
```yml
{% include mod-inspect.md var=layout pad=pad blob=blob %}
```

###### page
```yml
{% include mod-inspect.md var=page pad=pad blob=blob %}
```

{% comment %}
###### config
{% include vars-site.config.md %}
###### site.related_posts
{% include vars-site.related_posts.md %}
{% endcomment %}

###### site
{% include vars-site.md %}

###### site.data
{% include vars-site.data.md %}

**next**
{: .text-red }

###### site.pages
{% include vars-site.pages.md %}

###### site.posts
{% include vars-site.posts.md %}

###### site.static_files
{% include vars-site.static_files.md %}

###### site.github
{% include vars-site.github.md %}

{% comment %}--- end of page ---{% endcomment %}