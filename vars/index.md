---
layout: dove
use_footer: edit_link_only

title: Variables
description: Variables on this site.
---
<style>article pre.highlight { max-height:50vh }</style>

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
```yml
# site
baseurl, cache_dir, cache_gitignore_path, collections, collections_path, config, converters, data, dest, docs_to_write, documents, exclude, file_read_opts, filter_cache, find_converter_instance, frontmatter_defaults, future, gems, generators, highlighter, include, includes_load_paths, inclusions, keep_files, layouts, limit_posts, liquid_renderer, lsi, pages, permalink_style, plugin_manager, plugins, post_attr_hash, profiler, publisher, reader, regenerator, safe, show_drafts, site_cleaner, site_data, source, static_files, theme, time, unpublished
```
{% include vars-site.md %}

###### site.data
{% include vars-site.data.md %}

###### site.pages
{% include vars-site.pages.md %}

###### site.posts
{% include vars-site.posts.md %}

###### site.static_files
{% include vars-site.static_files.md %}

###### site.github
{% include vars-site.github.md %}

{% comment %}--- end of page ---{% endcomment %}