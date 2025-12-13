{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign post_keys = "slug,title,description,author,date,draft,comments,id,url,name,ext,layout,path,relative_path,collection,categories,tags,content,excerpt,output,previous,next" %}
{%- comment -%}
------------------------------------------------------------------
{%- endcomment -%}

###### site

{%- assign val = site %}
**{% include mod-plural_2.md val=val.keys word=word_key %} :**{{' '}}
{{- val.keys | sort | join: ", " }}
{: .box.highlight.pa.smaller.mono }

```yml
{%
  include mod-inspect_2.md
  val=site
  include="keys,size,title,description,author,year,time,timezone,version,revision,url,host,port,baseurl,base_url,home_url,paginate_path,permalink,encoding,lang,theme_color,color_scheme,ghost,google_analytics,cloudflare_analytics,highlighter,markdown,markdown_ext,data_dir,cache_dir,includes_dir,layouts_dir,plugins_dir,collections_dir,excerpt_separator,limit_posts,detach,future,incremental,lsi,quiet,safe,serving,show_drafts,show_downloads,show_dir_listing,strict_front_matter,unpublished,verbose,watch,related_posts,config,theme,kramdown,liquid,sass,keep_files,include,exclude,whitelist,plugins,defaults,data,collections,documents,posts,categories,tags,pages,html_pages,static_files,github"
  json="excerpt_separator,data_dir,cache_dir,includes_dir,layouts_dir,plugins_dir,collections_dir,keep_files,include,exclude,whitelist,plugins"
  bloi="size,paginator,config,defaults,data,collections,documents,posts,categories,tags,pages,static_files,html_pages"
  blok="keys,sass,kramdown,liquid"
  peek=""
  exclude="source,destination"
  pad="             "
%}
```
{: .no_max_height }

###### site.kramdown

```yml
{%
  include mod-inspect_2.md
  val=site.kramdown
  include="ALL"
  pad="             "
%}
```
{: .no_max_height }

###### site.liquid

```yml
{%
  include mod-inspect_2.md
  val=site.liquid
  include="ALL"
  pad="             "
%}
```
{: .no_max_height }

###### site.sass

```yml
{%
  include mod-inspect_2.md
  val=site.sass
  include="ALL"
  pad="             "
%}
```
{: .no_max_height }

###### site.defaults

```yml
# {% include mod-plural_2.md word="[0] default,[1] default,[n] defaults" val=site.defaults %}
{%- for _d in site.defaults %}
# default.{{ forloop.index | append: ' - ' }}
{%- include mod-plural_2.md val=_d word=word_key %}
  {%
    include mod-inspect_2.md
    val=_d
    include="ALL"
    pad="             "
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```
{: .no_max_height }

###### site.data

```yml
# {% include mod-plural_2.md word="[0] file,[1] file,[n] files" val=site.data %}
{%- for file in site.data %}
{%- assign _key = file[0] %}
{%- assign _d = file[1] %}
# file.{{ forloop.index | append: ' - ' }}
{{- _key | append: ' - ' }}
{%- include mod-plural_2.md val=_d word=word_key %}
  {%
    include mod-inspect_2.md
    val=_d
    include="ALL"
    pad="             "
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```
{: .no_max_height }

###### site.collections

```yml
# {% include mod-plural_2.md word="[0] collection,[1] collection,[n] collections" val=site.collections %}
{%- for collection in site.collections %}
# collection.{{ forloop.index | append: ' - ' }}
{%- include mod-plural_2.md val=collection.keys word=word_key %}
  {%
    include mod-inspect_2.md
    val=collection
    include="ALL"
    exclude="directory"
    bloi="docs"
    pad="             "
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.documents

```yml
# {% include mod-plural_2.md word="[0] document,[1] document,[n] documents" val=site.documents %}
{%- for doc in site.documents %}
# document.{{ forloop.index | append: ' - ' }}
{%- include mod-plural_2.md val=doc.keys word=word_key %}
  {%
    include mod-inspect_2.md
    val=doc
    include=post_keys
    pad="             "
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.posts

```yml
# {% include mod-plural_2.md word="[0] post,[1] post,[n] posts" val=site.posts %}
{%- for post in site.posts %}
# post.{{ forloop.index | append: ' - ' }}
{%- include mod-plural_2.md val=post.keys word=word_key %}
  {%
    include mod-inspect_2.md
    val=post
    include=post_keys
    pad="             "
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.categories

```yml
# {% include mod-plural_2.md word="[0] category,[1] category,[n] categories" val=site.categories %}
{%- for category in site.categories %}
{%- assign key = category[0] %}
{%- assign _posts = category[1] %}
# category.{{ forloop.index | append: ' - ' }}
  {{- key | append: ' - ' }}
  {%- include mod-plural_2.md val=_posts word="[0] post,[1] post,[n] posts" %}
  {%- for post in _posts %}
  # post.{{ forloop.index | append: ' - ' }}
    {%- include mod-plural_2.md val=post.keys word=word_key %}
    {%
      include mod-inspect_2.md
      val=post
      include=post_keys
      pad="             "
      tab="    "
    %}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.tags

```yml
# {% include mod-plural_2.md word="[0] tag,[1] tag,[n] tags" val=site.tags %}
{%- for tag in site.tags %}
{%- assign key = tag[0] %}
{%- assign val = tag[1] %}
# tag.{{ forloop.index | append: ' - ' }}
  {{- key | append: ' - ' }}
  {%- include mod-plural_2.md word=word_key val=_posts %}
  {%- for post in _posts %}
  # post.{{ forloop.index | append: ' - ' }}
    {%- include mod-plural_2.md val=post.keys word=word_key %}
    {%
      include mod-inspect_2.md
      val=post
      include=post_keys
      pad="             "
      tab="    "
    %}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.pages

```yml
# {% include mod-plural_2.md word="[0] page,[1] page,[n] pages" val=site.pages %}
{%- for page in site.pages %}
# page.{{ forloop.index | append: ' - ' }}
  {%- include mod-plural_2.md val=page word=word_key %}
  {%
    include mod-inspect_2.md
    val=page
    include="title,description,layout,name,dir,url,path,index,content,excerpt,use_pug,use_nav,use_footer"
    pad="             "
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.static_files

```yml
# {% include mod-plural_2.md word="[0] file,[1] file,[n] files" val=site.static_files %}
{%- for file in site.static_files %}
# file.{{ forloop.index | append: ' - ' -}}
  {%- include mod-plural_2.md val=file.keys word=word_key %}
  {%
    include mod-inspect_2.md
    val=file
    include="ALL"
    pad="             "
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```