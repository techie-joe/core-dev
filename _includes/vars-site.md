{%- assign pad = "             " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign post_keys = "id,url,slug,title,description,author,draft,comments,date,layout,ext,name,path,relative_path,collection,categories,tags,content,excerpt,output,previous,next" %}

###### site


```yml
{%
  include mod-inspect.md
  val=site
  include="keys,size,title,description,author,year,time,timezone,version,revision,url,host,port,baseurl,base_url,home_url,paginate_path,permalink,encoding,lang,theme_color,color_scheme,ghost,google_analytics,cloudflare_analytics,highlighter,markdown,markdown_ext,data_dir,cache_dir,includes_dir,layouts_dir,plugins_dir,collections_dir,excerpt_separator,limit_posts,detach,future,incremental,lsi,quiet,safe,serving,show_drafts,show_downloads,show_dir_listing,strict_front_matter,unpublished,verbose,watch,related_posts,config,theme,kramdown,liquid,sass,keep_files,include,exclude,whitelist,plugins,defaults,data,collections,documents,posts,categories,tags,pages,html_pages,static_files,github"
  json="excerpt_separator,data_dir,cache_dir,includes_dir,layouts_dir,plugins_dir,collections_dir,keep_files,include,exclude,whitelist,plugins"
  bloi="size,paginator,config,defaults,data,collections,documents,posts,categories,tags,pages,static_files,html_pages"
  blok="keys,sass,kramdown,liquid"
  peek=""
  exclude="source,destination"
  pad=pad
%}
```
{: .no_max_height }

###### site.kramdown

```yml
{%
  include mod-inspect.md
  val=site.kramdown
  pad=pad
%}
```
{: .no_max_height }

###### site.liquid

```yml
{%
  include mod-inspect.md
  val=site.liquid
  pad=pad
%}
```
{: .no_max_height }

###### site.sass

```yml
{%
  include mod-inspect.md
  val=site.sass
  pad=pad
%}
```
{: .no_max_height }

###### site.defaults

```yml
# {% include mod-plural.md word="[0] default,[1] default,[n] defaults" val=site.defaults %}
{%- for _d in site.defaults %}
# default.{{ forloop.index | append: ' - ' }}
{%- include mod-plural.md val=_d word=word_key %}
  {%
    include mod-inspect.md
    val=_d
    pad=pad
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```
{: .no_max_height }

###### site.data

```yml
# {% include mod-plural.md word="[0] file,[1] file,[n] files" val=site.data %}
{%- for file in site.data %}
{%- assign _key = file[0] %}
{%- assign _d = file[1] %}
# file.{{ forloop.index | append: ' - ' }}
{{- _key | append: ' - ' }}
{%- include mod-plural.md val=_d word=word_key %}
  {%
    include mod-inspect.md
    val=_d
    pad=pad
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```
{: .no_max_height }

###### site.collections

```yml
# {% include mod-plural.md word="[0] collection,[1] collection,[n] collections" val=site.collections %}
{%- for collection in site.collections %}
# collection.{{ forloop.index | append: ' - ' }}
{%- include mod-plural.md val=collection.keys word=word_key %}
  {%
    include mod-inspect.md
    val=collection
    include="label,docs,files,output,relative_directory,permalink"
    exclude="directory"
    bloi="docs"
    pad=pad
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.documents

```yml
# {% include mod-plural.md word="[0] document,[1] document,[n] documents" val=site.documents %}
{%- assign sorted_docs = site.documents | sort: "id" %}
{%- for doc in sorted_docs %}
# document.{{ forloop.index | append: ' - ' }}
{%- include mod-plural.md val=doc.keys word=word_key %}
  {%
    include mod-inspect.md
    val=doc
    include=post_keys
    pad=pad
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.posts

```yml
# {% include mod-plural.md word="[0] post,[1] post,[n] posts" val=site.posts %}
{%- assign sorted_posts = site.posts | sort: "id" %}
{%- for post in sorted_posts %}
# post.{{ forloop.index | append: ' - ' }}
{%- include mod-plural.md val=post.keys word=word_key %}
  {%
    include mod-inspect.md
    val=post
    include=post_keys
    pad=pad
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.categories

```yml
# {% include mod-plural.md word="[0] category,[1] category,[n] categories" val=site.categories %}
{%- for category in site.categories %}
{%- assign key = category[0] %}
{%- assign _posts = category[1] %}
# category.{{ forloop.index | append: ' - ' }}
  {{- key | append: ' - ' }}
  {%- include mod-plural.md val=_posts word="[0] post,[1] post,[n] posts" %}
  {%- assign sorted_posts = _posts | sort: "id" %}
  {%- for post in sorted_posts %}
  # post.{{ forloop.index | append: ' - ' }}
    {%- include mod-plural.md val=post.keys word=word_key %}
    {%
      include mod-inspect.md
      val=post
      include=post_keys
      pad=pad
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
# {% include mod-plural.md word="[0] tag,[1] tag,[n] tags" val=site.tags %}
{%- for tag in site.tags %}
{%- assign key = tag[0] %}
{%- assign _posts = tag[1] %}
# tag.{{ forloop.index | append: ' - ' }}
  {{- key | append: ' - ' }}
  {%- include mod-plural.md word=word_key val=_posts %}
  {%- assign sorted_posts = _posts | sort: "id" %}
  {%- for post in sorted_posts %}
  # post.{{ forloop.index | append: ' - ' }}
    {%- include mod-plural.md val=post.keys word=word_key %}
    {%
      include mod-inspect.md
      val=post
      include=post_keys
      pad=pad
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
# {% include mod-plural.md word="[0] page,[1] page,[n] pages" val=site.pages %}
{%- assign sorted_pages = site.pages | sort: "path" %}
{%- for page in sorted_pages %}
# page.{{ forloop.index | append: ' - ' }}
  {%- include mod-plural.md val=page word=word_key %}
  {%
    include mod-inspect.md
    val=page
    include="title,description,layout,name,dir,url,path,content,excerpt"
    pad=pad
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```

###### site.static_files

```yml
# {% include mod-plural.md word="[0] file,[1] file,[n] files" val=site.static_files %}
{%- assign sorted_files = site.static_files | sort: "path" %}
{%- for file in sorted_files %}
# file.{{ forloop.index | append: ' - ' }}
  {%- include mod-plural.md val=file.keys word=word_key %}
  {%
    include mod-inspect.md
    val=file
    pad=pad
    tab="  "
  %}
{%- else %}
# its empty
{%- endfor %}
```