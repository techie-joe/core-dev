---
title: Variables
description: Variables on this site.
layout: mallet
use_nav: false
use_footer: false
---
# {{ page.title }}

<style>article pre.highlight { max-height:50vh }</style>

###### layout
{% include vars-layout.md %}

###### page
{% include vars-page.md %}

###### site.related_posts
{% include vars-site.related_posts.md %}

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