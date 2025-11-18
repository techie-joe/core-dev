---
title: Dove.md
description: Dove.markdown variant.
permalink: md
use_nav: false
use_footer: ['edit_link_only']
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

source_url   : {{ site.github.repository_url }}
```
{: id="pre_intro" }
<style>article #pre_intro pre.highlight { max-height:235px }</style>

[Dove.html]({{ site.baseurl }}){: target="_blank"}
&bull;
[Proto](https://techie-joe.github.io/proto){: target="_blank"}

## Pages

{% include pages.md %}

## Posts

{% include posts.md %}