```yml
project_title   : {{ site.github.project_title }}
project_tagline : {{ site.github.project_tagline }}
repository_name : {{ site.github.repository_name }}
repository_nwo  : {{ site.github.repository_nwo }}
repository_url  : {{ site.github.repository_url }}
baseurl         : {{ site.github.baseurl }}
url             : {{ site.github.url }}
api_url         : {{ site.github.api_url }}
language        : {{ site.github.language }}
contributors    : {{ site.github.contributors.size | default:0 }}
releases        : {{ site.github.releases.size | default:0 }}
private         : {{ site.github.private }}
show_downloads  : {{ site.github.show_downloads }}

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
public_repositories  : {{ site.github.public_repositories.size | default:0 }}
organization_members : {{ site.github.organization_members }}
```

###### site.github.license

```yml
{%- for v in site.github.license %}
{{ v[0] }}: {{ v[1] }}
{%- endfor %}
```

###### site.github.owner

```yml
{%- for v in site.github.owner %}
{{ v[0] }}: {{ v[1] }}
{%- endfor %}
```

###### site.github.latest_release

```yml
{%- for v in site.github.latest_release %}
{%- if v[0]!='author' %}
{{ v[0] }}: {{ v[1] }}
{%- else %}
author:
  {%- for v in site.github.latest_release.author %}
  {{ v[0] }}: {{ v[1] }}
  {%- endfor %}
{%- endif %}
{%- endfor %}
{%- if site.github.latest_release %}
# no release
{%- endif %}
```

###### site.github.versions

```yml
{%- for v in site.github.versions %}
{{ v[0] }}: {{ v[1] }}
{%- endfor %}
```