```yml
# _config.pug
version      : 0.0.4
revision     : 2512.04.3409
title        : Dove
description  : A theme development project.
author       : Techie Joe
year         : 2026
base_url     : /dove
home_url     : /dove

lang         : en-US
theme_color  : #222
color_scheme : light dark
ghost        : bG9jYWxob3N0LGxvY2FsaG9zdDo0MDAwLHRlY2hpZS1qb2UuZ2l0aHViLmlv

google_analytics     : [nil]
cloudflare_analytics : [nil]

source_url   : https://github.com/techie-joe/dove
```
{: #config_pug }
<style>article #config_pug pre.highlight { max-height:213px }</style>
```yml
# _config.yml
version      : {{ site.version | default: "[nil]" }}
revision     : {{ site.revision | default: "[nil]" }}{{'.'}}{{ site.github.build_revision | default: "[nil]" }}
title        : {{ site.title | default: "[nil]" }}
description  : {{ site.description | default: "[nil]" }}
author       : {{ site.author | default: "[nil]" }}
year         : {{ site.year | default: "[nil]" }}
base_url     : {{ site.base_url | default: "[nil]" }}
home_url     : {{ site.home_url | default: "[nil]" }}

theme        : {{ site.theme | default: "[nil]" }}
remote_theme : {{ site.remote_theme | default: "[nil]" }}

lang         : {{ site.lang | default: "[nil]" }}
theme_color  : {{ site.theme_color | jsonify | default: "[nil]" }}
color_scheme : {{ site.color_scheme | default: "[nil]" }}
ghost        : {{ site.ghost | default: "[nil]" }}

google_analytics     : {{ site.google_analytics | default: "[nil]" }}
cloudflare_analytics : {{ site.cloudflare_analytics | default: "[nil]" }}

source_url   : {{ site.github.repository_url }}
```
{: #config_yml }
<style>article #config_yml pre.highlight { max-height:213px }</style>