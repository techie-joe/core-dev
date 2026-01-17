{%- assign nl="
" %}
{%- assign pad = "             " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign post_keys = "id,url,slug,title,description,author,draft,comments,date,layout,ext,name,path,relative_path,collection,categories,tags,content,excerpt,output,previous,next" %}

###### site


```yml
{%
  include inspect.md
  val=site
  include="keys,size,title,description,author,time,timezone,version,revision,host,port,url,baseurl,home_url,live_url,paginate_path,permalink,encoding,lang,ghost,google_analytics,cloudflare_analytics,highlighter,markdown,markdown_ext,data_dir,cache_dir,includes_dir,layouts_dir,plugins_dir,collections_dir,excerpt_separator,limit_posts,detach,future,incremental,lsi,quiet,safe,serving,show_drafts,show_downloads,show_dir_listing,strict_front_matter,unpublished,verbose,watch,related_posts,config,theme,kramdown,liquid,sass,keep_files,include,exclude,whitelist,plugins,defaults,data,collections,documents,posts,categories,tags,pages,html_pages,static_files,github"
  json="excerpt_separator,keep_files,include,exclude,whitelist,plugins"
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
  include inspect.md
  val=site.kramdown
  pad=pad
%}
```
{: .no_max_height }

###### site.liquid

```yml
{%
  include inspect.md
  val=site.liquid
  pad=pad
%}
```
{: .no_max_height }

###### site.sass

```yml
{%
  include inspect.md
  val=site.sass
  pad=pad
%}
```
{: .no_max_height }

###### site.defaults

```yml
# {% include plural.md word="[0] default,[1] default,[n] defaults" val=site.defaults %}
{%- for _d in site.defaults %}
  {{-nl-}} # default.{{ forloop.index | append: ' - ' }}
  {%- include plural.md val=_d word=word_key %}
  {{-nl-}}
  {%-
    include inspect.md
    val=_d
    pad=pad
    tab="  "
  %}
  {%- else -%} {{-nl-}} # its empty
{%- endfor %}
```
{: .no_max_height }

###### site.data

```yml
# {% include plural.md word="[0] file,[1] file,[n] files" val=site.data %}
{%- for file in site.data %}
  {%- assign _key = file[0] %}
  {%- assign _d = file[1] %}
  {{-nl-}} # file.{{ forloop.index | append: ' - ' }}
  {{- _key | append: ' - ' }}
  {%- include plural.md val=_d word=word_key %}
  {{-nl-}}
  {%-
    include inspect.md
    val=_d
    pad=pad
    tab="  "
  %}
  {%- else -%} {{-nl-}} # its empty
{%- endfor %}
```
{: .no_max_height }

###### site.collections

```yml
# {% include plural.md word="[0] collection,[1] collection,[n] collections" val=site.collections %}
{%- for collection in site.collections %}
  {{-nl-}} # collection.{{ forloop.index | append: ' - ' }}
  {%- include plural.md val=collection.keys word=word_key %}
  {{-nl-}}
  {%-
    include inspect.md
    val=collection
    include="label,docs,files,output,relative_directory,permalink"
    exclude="directory"
    bloi="docs"
    pad=pad
    tab="  "
  %}
  {%- else -%} {{-nl-}} # its empty
{%- endfor %}
```

###### site.documents

```yml
# {% include plural.md word="[0] document,[1] document,[n] documents" val=site.documents %}
{%- if site.documents %}
  {%- assign sorted_docs = site.documents | sort: "id" %}
  {%- for doc in sorted_docs %}
    {{-nl-}} # document.{{ forloop.index | append: ' - ' }}
    {%- include plural.md val=doc.keys word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val=doc
      include=post_keys
      pad=pad
      tab="  "
    %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```

###### site.posts

```yml
# {% include plural.md word="[0] post,[1] post,[n] posts" val=site.posts %}
{%- if site.posts %}
  {%- assign sorted_posts = site.posts | sort: "id" %}
  {%- for post in sorted_posts %}
    {{-nl-}} # post.{{ forloop.index | append: ' - ' }}
    {%- include plural.md val=post.keys word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val=post
      include=post_keys
      pad=pad
      tab="  "
    %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```

###### site.categories

```yml
# {% include plural.md word="[0] category,[1] category,[n] categories" val=site.categories %}
{%- if site.categories %}
  {%- assign sorted_categories = site.categories | sort %}
  {%- for category in sorted_categories %}
    {%- assign key = category[0] %}
    {%- assign _posts = category[1] %}
    {{-nl-}} # category.{{ forloop.index | append: ' - ' }}
    {{- key | append: ' - ' }}
    {%- include plural.md val=_posts word="[0] post,[1] post,[n] posts" %}
    {%- assign sorted_posts = _posts | sort: "id" %}
    {%- for post in sorted_posts %}
      {{-nl-}} {{-"  "-}} # post.{{ forloop.index | append: ' - ' }}
      {%- include plural.md val=post.keys word=word_key %}
      {{-nl-}}
      {%-
        include inspect.md
        val=post
        include=post_keys
        pad=pad
        tab="    "
      %}
      {%- else -%} {{-nl-}} # its empty
    {%- endfor %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```

###### site.tags

```yml
# {% include plural.md word="[0] tag,[1] tag,[n] tags" val=site.tags %}
{%- if site.tags %}
  {%- assign sorted_tags = site.tags | sort %}
  {%- for tag in sorted_tags %}
    {%- assign key = tag[0] %}
    {%- assign _posts = tag[1] %}
    {{-nl-}} # tag.{{ forloop.index | append: ' - ' }}
    {{- key | append: ' - ' }}
    {%- include plural.md word=word_key val=_posts %}
    {%- assign sorted_posts = _posts | sort: "id" %}
    {%- for post in sorted_posts %}
      {{-nl-}} # post.{{ forloop.index | append: ' - ' }}
      {%- include plural.md val=post.keys word=word_key %}
      {{-nl-}}
      {%-
        include inspect.md
        val=post
        include=post_keys
        pad=pad
        tab="    "
      %}
      {%- else -%} {{-nl-}} # its empty
    {%- endfor %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```

###### site.pages

```yml
# {% include plural.md word="[0] page,[1] page,[n] pages" val=site.pages %}
{%- if site.pages %}
  {%- assign sorted_pages = site.pages | sort: "path" %}
  {%- for page in sorted_pages %}
    {{-nl-}} # page.{{ forloop.index | append: ' - ' }}
    {%- include plural.md val=page word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val=page
      include="title,description,layout,name,dir,url,path,content,excerpt"
      pad=pad
      tab="  "
    %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```

###### site.static_files

```yml
# {% include plural.md word="[0] file,[1] file,[n] files" val=site.static_files %}
{%- if site.static_files %}
  {%- assign sorted_files = site.static_files | sort: "path" %}
  {%- for file in sorted_files %}
    {{-nl-}} # file.{{ forloop.index | append: ' - ' }}
    {%- include plural.md val=file.keys word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val=file
      pad=pad
      tab="  "
    %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```