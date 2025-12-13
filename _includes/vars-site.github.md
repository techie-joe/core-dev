{%- assign pad = "             " %}
{%- assign blob = "content,excerpt" %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- comment -%}
------------------------------------------------------------------
40 keys : api_url, archived, baseurl, build_revision, clone_url, contributors, disabled, environment, help_url, hostname, is_project_page, is_user_page, issues_url, language, latest_release, license, organization_members, owner, owner_display_name, owner_gravatar_url, owner_name, owner_url, pages_env, pages_hostname, private, project_tagline, project_title, public_repositories, releases, releases_url, repository_name, repository_nwo, repository_url, show_downloads, source, tar_url, url, versions, wiki_url, zip_url
------------------------------------------------------------------
{%- endcomment -%}

###### site.github

{%- assign val = site.github %}
**{% include mod-plural_2.md val=val.keys word=word_key %} :**{{' '}}
{{- val.keys | sort | join: ", " }}
{: .box.highlight.pa.smaller.mono }

```yml
# site.github
keys : {% include mod-plural_2.md val=val.keys word=word_key %}
size : {% include mod-plural_2.md val=val %}
```

```yml
project_title   : {{ site.github.project_title }}
project_tagline : {{ site.github.project_tagline }}
repository_name : {{ site.github.repository_name }}
repository_nwo  : {{ site.github.repository_nwo }}
repository_url  : {{ site.github.repository_url }}
url             : {{ site.github.url }}
api_url         : {{ site.github.api_url }}
baseurl         : {{ site.github.baseurl }}
language        : {{ site.github.language }}
contributors    : {{ site.github.contributors.size | default: 0 }}
releases        : {{ site.github.releases.size | default: 0 }}
private         : {{ site.github.private }}
show_downloads  : {{ site.github.show_downloads }}
is_project_page : {{ site.github.is_project_page }}
is_user_page    : {{ site.github.is_user_page }}
environment     : {{ site.github.environment }}
hostname        : {{ site.github.hostname }}
pages_env       : {{ site.github.pages_env }}
pages_hostname  : {{ site.github.pages_hostname }}
build_revision  : {{ site.github.build_revision }}
source          : {{ site.github.source }}
clone_url       : {{ site.github.clone_url }}
wiki_url        : {{ site.github.wiki_url }}
issues_url      : {{ site.github.issues_url }}
releases_url    : {{ site.github.releases_url }}
tar_url         : {{ site.github.tar_url }}
zip_url         : {{ site.github.zip_url }}
owner_name           : {{ site.github.owner_name }}
owner_url            : {{ site.github.owner_url }}
owner_gravatar_url   : {{ site.github.owner_gravatar_url }}
public_repositories  : {{ site.github.public_repositories.size | default: 0 }}
organization_members : {{ site.github.organization_members }}
```

###### site.github.license

```yml
{{'#'}} {% include mod-inspect.md var=site.github.license %}
```

###### site.github.owner

```yml
{{'#'}} {% include mod-inspect.md var=site.github.owner %}
```

###### site.github.latest_release

```yml
# {% include mod-plural_2.md word=word_key val=site.github.latest_release %}
{%- for v in site.github.latest_release %}
{%- if v[0] == 'author' %}
author:
  # {% include mod-plural_2.md word=word_key val=site.github.latest_release.author %}
  {%- for v in site.github.latest_release.author %}
  {{ v[0] }}: {{ v[1] }}
  {%- else %}
  # its empty
  {%- endfor %}
{%- else %}
{{ v[0] }}: {{ v[1] }}
{%- endif %}
{%- else %}
# no release
{%- endfor %}
```

###### site.github.versions

```yml
# {% include mod-plural_2.md word=word_key val=site.github.versions %}
{%- for v in site.github.versions %}
{{ v[0] }}: {{ v[1] }}
{%- else %}
# unversioned
{%- endfor %}
```