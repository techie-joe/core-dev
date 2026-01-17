{%- assign word_key = "[0] key,[1] key,[n] keys" %}

###### page

```yml
{%
  include inspect.md
  val=page
  include="title,description,layout,name,dir,path,url,content,excerpt"
  pad="             "
%}
```
{: .no_max_height }

###### layout

```yml
{%
  include inspect.md
  val=layout
  pad="             "
%}
```
{: .no_max_height }