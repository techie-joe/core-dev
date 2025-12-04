```yml
# _config.pug
version      : 0.0.3
revision     : 2511.03.6100
title        : Dove
description  : A theme development project.
author       : Techie Joe
year         : 2025
base_url     : /dove
home_url     : /dove

lang         : en-US
theme_color  : #222
color_scheme : light dark
ghost        : bG9jYWxob3N0LGxvY2FsaG9zdDo0MDAwLHRlY2hpZS1qb2UuZ2l0aHViLmlv

google_analytics     : (undefined)
cloudflare_analytics : (undefined)

source_url   : https://github.com/techie-joe/dove
```
{: #config_pug }
<style>article #config_pug pre.highlight { max-height:213px }</style>

```yml
# _config.yml
version      : {{ site.version | default: '(undefined)' }}
revision     : {{ site.revision | default: '(undefined)' }}{{'.'}}{{ site.github.build_revision | default: '(undefined)' }}
title        : {{ site.title | default: '(undefined)' }}
description  : {{ site.description | default: '(undefined)' }}
author       : {{ site.author | default: '(undefined)' }}
year         : {{ site.year | default: '(undefined)' }}
base_url     : {{ site.base_url | default: '(undefined)' }}
home_url     : {{ site.home_url | default: '(undefined)' }}

theme        : {{ site.theme | default: '(undefined)' }}
remote_theme : {{ site.remote_theme | default: '(undefined)' }}

lang         : {{ site.lang | default: '(undefined)' }}
theme_color  : {{ site.theme_color | jsonify | default: '(undefined)' }}
color_scheme : {{ site.color_scheme | default: '(undefined)' }}
ghost        : {{ site.ghost | default: '(undefined)' }}

google_analytics     : {{ site.google_analytics | default: '(undefined)' }}
cloudflare_analytics : {{ site.cloudflare_analytics | default: '(undefined)' }}

source_url   : {{ site.github.repository_url }}
```
{: #config_yml }
<style>article #config_yml pre.highlight { max-height:213px }</style>