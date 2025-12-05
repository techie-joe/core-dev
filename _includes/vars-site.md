{% comment %}
baseurl, cache_dir, cache_gitignore_path, collections, collections_path, config, converters, data, dest, docs_to_write, documents, exclude, file_read_opts, filter_cache, find_converter_instance, frontmatter_defaults, future, gems, generators, highlighter, include, includes_load_paths, inclusions, keep_files, layouts, limit_posts, liquid_renderer, lsi, pages, permalink_style, plugin_manager, plugins, post_attr_hash, profiler, publisher, reader, regenerator, safe, show_drafts, site_cleaner, site_data, source, static_files, theme, time, unpublished
{% endcomment %}

```yml
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

kramdown:
  auto_ids         : {{ site.kramdown.auto_ids }}
  entity_output    : {{ site.kramdown.entity_output }}
  toc_levels       : {{ site.kramdown.toc_levels }}
  smart_quotes     : {{ site.kramdown.smart_quotes }}
  input            : {{ site.kramdown.input }}
  hard_wrap        : {{ site.kramdown.hard_wrap }}
  footnote_nr      : {{ site.kramdown.footnote_nr }}
  show_warnings    : {{ site.kramdown.show_warnings }}

liquid:
  error_mode       : {{ site.liquid.error_mode }}
  strict_filters   : {{ site.liquid.strict_filters }}
  strict_variables : {{ site.liquid.strict_variables }}

sass:
  {%- for v in site.sass %}
  {{ v[0] }}: {{ v[1] }}
  {%- else %}
  # its empty
  {%- endfor %}
```

###### site.defaults

```yml
defaults: {{ site.defaults.size | default:0 }}
{%- for v in site.defaults %}
{{ forloop.index }} -
  {%- for x in v %}
    {{ x | jsonify }}
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.tags

```yml
tags: {{ site.tags.size | default:0 }}
{%- for tag in site.tags %}
- {{ tag[0] }}: [{{ tag[1] | size }} posts]
  {%- for post in tag[1] %}
  {{ forloop.index }} -
    title    : {{ post.title }}
    date     : {{ post.date }}
    layout   : {{ post.layout }}
    ext      : {{ post.ext }}
    slug     : {{ post.slug }}
    id       : {{ post.id }}
    url      : {{ post.url }}
    previous : {{ post.previous.id }}
    next     : {{ post.next.id }}
    path          : {{ post.path }}
    relative_path : {{ post.relative_path }}

    excerpt       : {{ post.excerpt | jsonify }}
    content.size  : {{ post.content.size | default:0 }}
    output.size   : {{ post.output.size | default:0 }}

    draft      : {{ post.draft }}
    collection : {{ post.collection }}
    categories : {{ post.categories | jsonify }}
    tags       : {{ page.tags | jsonify }}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.categories

```yml
categories: {{ site.categories.size | default:0 }}
{%- for category in site.categories %}
- {{ category[0] }}: [{{ category[1] | size }} posts]
  {%- for post in category[1] %}
  {{ forloop.index }} -
    title    : {{ post.title }}
    date     : {{ post.date }}
    layout   : {{ post.layout }}
    ext      : {{ post.ext }}
    slug     : {{ post.slug }}
    id       : {{ post.id }}
    url      : {{ post.url }}
    previous : {{ post.previous.id }}
    next     : {{ post.next.id }}
    path          : {{ post.path }}
    relative_path : {{ post.relative_path }}

    excerpt       : {{ post.excerpt | jsonify }}
    content.size  : {{ post.content.size | default:0 }}
    output.size   : {{ post.output.size | default:0 }}

    draft      : {{ post.draft }}
    collection : {{ post.collection }}
    categories : {{ post.categories | jsonify }}
    tags       : {{ page.tags | jsonify }}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.collections

```yml
collections: {{ site.collections.size }}
{%- for collection in site.collections %}
-
  label:  {{ collection.label }}
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

###### site.documents

```yml
documents: {{ site.documents.size | default:0 }}
{%- for file in site.documents %}
-
  collection : {{ file.collection }}
  url        : {{ file.url }}
{%- else %}
# its empty
{%- endfor %}
```