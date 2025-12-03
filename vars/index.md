---
layout: dove
use_footer: edit_link_only

title: Variables
description: Variables on this site.
---
<style>article pre.highlight { max-height:50vh }</style>

# {{ page.title }}

###### layout
{% include vars-layout.md %}

###### page
{% include vars-page.md %}

###### site.related_posts
{% include vars-site.related_posts.md %}

{% comment %}
###### config
{% include vars-site.config.md %}
{% endcomment %}

###### site
{% include vars-site.md %}

###### site.pages
{% include vars-site.pages.md %}

###### site.posts
{% include vars-site.posts.md %}

###### site.static_files
{% include vars-site.static_files.md %}

###### site.github
{% include vars-site.github.md %}

{% comment %}--- end of page ---{% endcomment %}