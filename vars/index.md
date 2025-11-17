---
title: Vars
description: Variables on this site.
layout: mallet
use_nav: false
use_footer: false
---
<style>article pre.highlight { max-height:50vh }</style>

# {{ page.description }}

###### layout
{% include vars-layout.md %}

###### page
{% include vars-page.md %}

###### site.related_posts
{% include vars-site.related_posts.md %}

###### site
{% include vars-site.md %}

###### site.github
{% include vars-site.github.md %}

###### site.pages
{% include vars-site.pages.md %}

###### site.posts
{% include vars-site.posts.md %}

###### site.static_files
{% include vars-site.static_files.md %}

{% comment %}--- end of page ---{% endcomment %}