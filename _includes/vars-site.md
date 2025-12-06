{%- assign pad = "             " %}
{%- assign blob = "content,excerpt" %}
{%- assign word_key = "[0] key,[1] key,[#n;] keys" %}
{%- comment -%}

baseurl,
----------------------------------------------------------
cache_dir, cache_gitignore_path, collections, collections_path, config, converters, data, dest, docs_to_write, documents, exclude, file_read_opts, filter_cache, find_converter_instance, frontmatter_defaults, future, gems, generators, highlighter, include, includes_load_paths, inclusions, keep_files, layouts, limit_posts, liquid_renderer, lsi, pages, permalink_style, plugin_manager, plugins, post_attr_hash, profiler, publisher, reader, regenerator, safe, show_drafts, site_cleaner, site_data, source, static_files, theme, time, unpublished

###### site.config
{% include vars-site.config.md %}

{%- endcomment -%}

###### site
```yml
# {% include mod-plural.md word=word_key val=site %}
theme         : {{ site.theme }}
remote_theme  : {{ site.remote_theme }}
version       : {{ site.version }}
revision      : {{ site.revision | default: 0 }}{{'.'}}{{ site.github.build_revision | default: 0 }}
title         : {{ site.title }}
description   : {{ site.description }}
author        : {{ site.author }}
year          : {{ site.year }}
time          : {{ site.time }}
url           : {{ site.url }}
baseurl       : {{ site.baseurl }}
base_url      : {{ site.base_url }}
home_url      : {{ site.home_url }}
permalink     : {{ site.permalink }}
paginate_path : {{ site.paginate_path }}
lang          : {{ site.lang }}
theme_color   : {{ site.theme_color }}
color_scheme  : {{ site.color_scheme }}
ghost         : {{ site.ghost }}
google_analytics     : {{ site.google_analytics }}
cloudflare_analytics : {{ site.cloudflare_analytics }}
strict_front_matter  : {{ site.strict_front_matter }}
excerpt_separator    : {{ site.excerpt_separator | jsonify }}
disable_disk_cache   : {{ site.disable_disk_cache }}
ignore_theme_config  : {{ site.ignore_theme_config }}
safe          : {{ site.safe }}
show_drafts   : {{ site.show_drafts }}
future        : {{ site.future }}
unpublished   : {{ site.unpublished }}
limit_posts   : {{ site.limit_posts }}
force_polling : {{ site.force_polling }}
verbose       : {{ site.verbose }}
quiet         : {{ site.quiet }}
profile       : {{ site.profile }}
incremental   : {{ site.incremental }}
lsi           : {{ site.lsi }}
keep_files    : {{ site.keep_files | jsonify }}
include       : {{ site.include | jsonify }}
exclude       : {{ site.exclude | jsonify }}
whitelist     : {{ site.whitelist | jsonify }}
plugins       : {{ site.plugins | jsonify }}
highlighter   : {{ site.highlighter }}
markdown_ext  : {{ site.markdown_ext }}
markdown      : {{ site.markdown }}
```

###### site.kramdown
```yml
{{'#'}} {% include mod-inspect.md var=site.kramdown pad=pad blob=blob %}
```

###### site.liquid
```yml
{{'#'}} {% include mod-inspect.md var=site.liquid blob=blob pad=pad %}
```

###### site.sass
```yml
{{'#'}} {% include mod-inspect.md var=site.sass blob=blob pad="" %}
```

###### site.defaults

```yml
# {% include mod-plural.md word="[0] default,[1] default,[#n;] defaults" val=site.defaults %}
{%- for d in site.defaults %}
# default.{{ forloop.index | append: ' - has ' -}}
{%- include mod-inspect.md var=d blob=blob pad="       " tab="  " %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.data
```yml
# {% include mod-plural.md word="[0] file,[1] file,[#n;] files" val=site.data %}
{%- for file in site.data %}
{%- assign d=file[1] %}
# file.{{ forloop.index | append: ' - ' -}} {{ file[0] | append: ' - has ' -}}
{%- include mod-inspect.md var=d blob=blob pad="" tab="  " %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.documents

```yml
# {% include mod-plural.md word="[0] document,[1] document,[#n;] documents" val=site.documents %}
{%- for doc in site.documents %}
# document.{{ forloop.index | append: ' - ' -}}
  {% include mod-plural.md word=word_key val=doc %}
  collection : {{ doc.collection }}
  url        : {{ doc.url }}
{%- else %}
# its empty
{%- endfor %}
```

###### site.collections

```yml
# {% include mod-plural.md word="[0] collection,[1] collection,[#n;] collections" val=site.collections %}
{%- for collection in site.collections %}
# collection.{{ forloop.index | append: ' - ' -}}
  {% include mod-plural.md word=word_key val=collection %}
  label      : {{ collection.label }}
  relative_directory : {{ collection.relative_directory }}
  directory  : {{ collection.directory }}
  permalink  : {{ collection.permalink }}
  output     : {{ collection.output }}
  files.size : {{ collection.files.size | default:0 }}
  docs.size  : {{ collection.docs.size | default:0 }}
{%- else %}
# its empty
{%- endfor %}
```

###### site.posts

```yml
# [{{ site.posts.size | default: 'no' }}] posts
{%- for post in site.posts %}
# post.{{ forloop.index | append: ' - ' -}} [{{ post.size | default: 'no' }}] keys
{%- include mod-post.md post=post tab="  " %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.categories

```yml
# {% include mod-plural.md word="[0] category,[1] category,[#n;] categories" val=site.categories %}
{%- for category in site.categories %}
# category.{{ forloop.index | append: ' - ' -}} {{ category[0] | append: ' - has ' -}}
  {%- assign _posts = category[1] %}
  {%- include mod-plural.md word="[0] post,[1] post,[#n;] posts" val=_posts %}
  {%- for post in _posts %}
  # post.{{ forloop.index | append: ' - has ' -}}
  {% include mod-plural.md word=word_key val=post %}
  {%- include mod-post.md post=post tab="  " %}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.tags

```yml
# {% include mod-plural.md word="[0] tag,[1] tag,[#n;] tags" val=site.tags %}
{%- for tag in site.tags %}
# tag.{{ forloop.index | append: ' - ' -}} {{ tag[0] | append: ' - has ' -}}
  {%- assign _posts = tag[1] %}
  {%- include mod-plural.md word=word_key val=_posts %}
  {%- for post in _posts %}
  # post.{{ forloop.index | append: ' - has ' -}}
  {% include mod-plural.md word=word_key val=post %}
  {%- include mod-post.md post=post tab="  " %}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.pages

```yml
# {% include mod-plural.md word="[0] page,[1] page,[#n;] pages" val=site.pages %}
{%- for page in site.pages %}
# page.{{ forloop.index | append: ' - ' -}}
{% include mod-inspect.md var=page pad=pad blob=blob tab="  " %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.static_files

```yml
# {% include mod-plural.md word="[0] file,[1] file,[#n;] files" val=site.static_files %}
{%- for file in site.static_files %}
# file.{{ forloop.index | append: ' - has ' -}}
{% include mod-plural.md word=word_key val=file %}
  basename      : {{ file.basename }}
  name          : {{ file.name }}
  path          : {{ file.path }}
  extname       : {{ file.extname }}
  modified_time : {{ file.modified_time }}
{%- else %}
# its empty
{%- endfor %}
```