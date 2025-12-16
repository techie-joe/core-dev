{%- assign pad = "                 " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign owner_keys = "type,name,bio,description,id,login,email,location,company,is_verified,hireable,followers,following,public_gists,public_repos,avatar_url,html_url,blog,created_at,updated_at" %}

###### site.github.public_repositories

```yml
# {% include mod-plural.md val=site.github.public_repositories word="[0] repository,[1] repository,[n] repositories" %}
{%- assign sorted_repositories = site.github.public_repositories | sort: "updated_at" | reverse %}
{%- for repo in sorted_repositories %}
# repo.{{ forloop.index | append: ' ' }}
  {%
    include mod-inspect.md
    val=repo
    include="name,full_name,description,html_url,homepage,created_at,updated_at,pushed_at,language,visibility,size,private,is_template,archived,disabled,allow_forking,fork,forks,watchers,stargazers_count,forks_count,watchers_count,open_issues,open_issues_count,default_branch,releases,contributors,topics,license,owner"
    blok="license,owner"
    bloi="releases,contributors,topics"
    pad=pad
    tab="  "
  %}
{%- else %}
# no repository found
{%- endfor %}
```
{: .no_max_height }