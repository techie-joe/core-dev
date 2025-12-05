{%- assign pad = "             " %}
{%- comment -%}

baseurl,
----------------------------------------------------------
cache_dir, cache_gitignore_path, collections, collections_path, config, converters, data, dest, docs_to_write, documents, exclude, file_read_opts, filter_cache, find_converter_instance, frontmatter_defaults, future, gems, generators, highlighter, include, includes_load_paths, inclusions, keep_files, layouts, limit_posts, liquid_renderer, lsi, pages, permalink_style, plugin_manager, plugins, post_attr_hash, profiler, publisher, reader, regenerator, safe, show_drafts, site_cleaner, site_data, source, static_files, theme, time, unpublished

{%- endcomment -%}

```yml
# [{{ size.size | default: 'no' }}] keys
theme         : {{ site.theme | default: '(undefined)' }}
remote_theme  : {{ site.remote_theme | default: '(undefined)' }}

version       : {{ site.version | default: '(undefined)' }}
revision      : {{ site.revision | default: '(undefined)' }}{{'.'}}{{ site.github.build_revision | default: '(undefined)' }}

title         : {{ site.title | default: '(undefined)' }}
description   : {{ site.description | default: '(undefined)' }}

author        : {{ site.author | default: '(undefined)' }}
year          : {{ site.year | default: '(undefined)' }}
time          : {{ site.time }}

url           : {{ site.url }}
baseurl       : {{ site.baseurl }}
base_url      : {{ site.base_url | default: '(undefined)' }}
home_url      : {{ site.home_url | default: '(undefined)' }}
permalink     : {{ site.permalink }}
paginate_path : {{ site.paginate_path }}

lang          : {{ site.lang | default: '(undefined)' }}
theme_color   : {{ site.theme_color | default: '(undefined)' }}
color_scheme  : {{ site.color_scheme | default: '(undefined)' }}
ghost         : {{ site.ghost | default: '(undefined)' }}

google_analytics     : {{ site.google_analytics | default: '(undefined)' }}
cloudflare_analytics : {{ site.cloudflare_analytics | default: '(undefined)' }}

strict_front_matter : {{ site.strict_front_matter }}
excerpt_separator   : {{ site.excerpt_separator | jsonify }}
disable_disk_cache  : {{ site.disable_disk_cache }}
ignore_theme_config : {{ site.ignore_theme_config }}

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
{% include mod-inspect.md var=site.kramdown pad=pad blob=blob %}
```

###### site.liquid
```yml
{% include mod-inspect.md var=site.liquid blob=blob pad=pad %}
```

###### site.sass
```yml
{% include mod-inspect.md var=site.sass blob=blob pad="" %}
```

###### site.defaults

```yml
# [{{ site.defaults.size | default: 'no' }}] defaults
{{''}}
{%- for d in site.defaults %}
# default.{{ forloop.index | append: ' - ' }}
{% include mod-inspect.md var=d blob=blob pad="" tab="  " %}
{{''}}
{%- else %}
# its empty
{%- endfor %}
```

###### site.categories

```yml
# [{{ site.categories.size | default: 'no' }}] categories
{{''}}
{%- for category in site.categories %}
# category.{{ forloop.index | append: ' - ' }}{{ category[0] }} - has [{{ category[1].size | default: 'no' }}] posts
  {{''}}
  {%- for post in category[1] %}
  {{-''}}
  # post.{{ forloop.index | append: ' - ' }}[{{ post.size | default: 'no' }}] keys
  {%- include vars-post.md post=post tab="  " %}
  {{''}}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.tags

```yml
# [{{ site.tags.size | default: 'no' }}] tags
{{''}}
{%- for tag in site.tags %}
# tag.{{ forloop.index | append: ' - ' }}{{ tag[0] }} - has [{{ tag[1].size | default: 'no' }}] posts
  {{''}}
  {%- for post in tag[1] %}
  {{-''}}
  # post.{{ forloop.index | append: ' - ' }}[{{ post.size | default: 'no' }}] keys
  {%- include vars-post.md post=post tab="  " %}
  {{''}}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.collections

```yml
# [{{ site.collections.size | default: 'no' }}] collections
{{''}}
{%- for collection in site.collections %}
# collection.{{ forloop.index | append: ' - ' }}[{{ collection.size | default: 'no' }}] keys
label      :  {{ collection.label }}
relative_directory : {{ collection.relative_directory }}
directory  : {{ collection.directory }}
permalink  : {{ collection.permalink }}
output     : {{ collection.output }}
files.size : {{ collection.files.size | default:0 }}
docs.size  : {{ collection.docs.size | default:0 }}
{{''}}
{%- else %}
# its empty
{%- endfor %}
```

###### site.documents

```yml
# [{{ site.documents.size | default: 'no' }}] documents
{{''}}
{%- for doc in site.documents %}
# document.{{ forloop.index | append: ' - ' }}[{{ doc.size | default: 'no' }}] keys
collection : {{ doc.collection }}
url        : {{ doc.url }}
{{''}}
{%- else %}
# its empty
{%- endfor %}
```