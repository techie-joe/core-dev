---
title: Dove.md
description: Dove.markdown variant.
permalink: md
use_nav: false
use_footer: false
---

<h1 id="_hero-titlex" class="hero">🕊️ {{ site.title }}.md</h1>

```yml
# _config.yml
theme        : {{ site.theme | default: '(undefined)' }}
remote_theme : {{ site.remote_theme | default: '(undefined)' }}
version      : {{ site.version | default: '(undefined)' }}
revision     : {{ site.revision | default: '(undefined)' }}{{'.'}}{{ site.github.build_revision | default: '(undefined)' }}
title        : {{ site.title | default: '(undefined)' }}
description  : {{ site.description | default: '(undefined)' }}
author       : {{ site.author | default: '(undefined)' }}
year         : {{ site.year | default: '(undefined)' }}
base_url     : {{ site.base_url | default: '(undefined)' }}
home_url     : {{ site.home_url | default: '(undefined)' }}
lang         : {{ site.lang | default: '(undefined)' }}
theme_color  : {{ site.theme_color | jsonify | default: '(undefined)' }}
color_scheme : {{ site.color_scheme | default: '(undefined)' }}
ghost        : {{ site.ghost | default: '(undefined)' }}

google_analytics     : {{ site.google_analytics | default: '(undefined)' }}
cloudflare_analytics : {{ site.cloudflare_analytics | default: '(undefined)' }}

source_url   : {{ site.github.repository_url }} ( site.github.repository_url )
```
{: style="max-height:235px;overflow:auto" }

[Dove.html]({ site.baseurl })

## Pages

{% include pages.md %}

## Posts

{% include posts.md %}