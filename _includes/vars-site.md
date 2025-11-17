```yml
theme        : {{ site.theme }}
remote_theme : {{ site.remote_theme }}

version      : {{ site.version }}

title        : {{ site.title }}
description  : {{ site.description }}

google_analytics     : {{ site.google_analytics }}
cloudflare_analytics : {{ site.cloudflare_analytics }}

theme_color  : {{ site.theme_color | jsonify }}
color_scheme : {{ site.color_scheme }}
ghost        : {{ site.ghost }}

time          : {{ site.time }}
lang          : {{ site.lang }}
encoding      : {{ site.encoding }}

url           : {{ site.url }}
baseurl       : {{ site.baseurl }}
permalink     : {{ site.permalink }}
paginate_path : {{ site.paginate_path }}

source          : {{ site.source }}
destination     : {{ site.destination }}
collections_dir : {{ site.collections_dir }}
data_dir        : {{ site.data_dir }}
includes_dir    : {{ site.includes_dir }}
layouts_dir     : {{ site.layouts_dir }}
plugins_dir     : {{ site.plugins_dir }}

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

strict_front_matter : {{ site.strict_front_matter }}
excerpt_separator   : {{ site.excerpt_separator | jsonify }}
disable_disk_cache  : {{ site.disable_disk_cache }}
ignore_theme_config : {{ site.ignore_theme_config }}

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
```

###### site.sass

```yml
{%- for v in site.sass %}
{{ v[0] }}: {{ v[1] }}
{%- endfor %}
```

###### site.defaults

```yml
size: {{ site.defaults.size | default:0 }}
{%- for v in site.defaults %}
-
  {{ v[0] }}: {{ v[1] | jsonify }}
{%- endfor %}
```

###### site.data

```yml
size: {{ site.data.size | default:0 }}
{%- for data in site.data %}
-
  {{ data[0] }}: {{ data[1] | jsonify }}
{%- endfor %}
```

###### site.tags

```yml
size: {{ site.tags.size | default:0 }}
{%- for tag in site.tags %}
- {{ tag[0] }}: [{{ tag[1] | size }} posts]
  {%- for post in tag[1] %}
  -
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
  {%- endfor %}
{%- endfor %}
```

###### site.categories

```yml
size: {{ site.categories.size | default:0 }}
{%- for category in site.categories %}
- {{ category[0] }}: [{{ category[1] | size }} posts]
  {%- for post in category[1] %}
  -
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
  {%- endfor %}
{%- endfor %}
```

###### site.collections

```yml
size: {{ site.collections.size }}
{%- for collection in site.collections %}
-
  label:  {{ collection.label }}
  relative_directory : {{ collection.relative_directory }}
  directory  : {{ collection.directory }}
  permalink  : {{ collection.permalink }}
  output     : {{ collection.output }}
  files.size : {{ collection.files.size | default:0 }}
  docs.size  : {{ collection.docs.size | default:0 }}
{%- endfor %}
```

###### site.documents

```yml
size: {{ site.documents.size | default:0 }}
{%- for file in site.documents %}
-
  collection : {{ file.collection }}
  url        : {{ file.url }}
{%- endfor %}
```