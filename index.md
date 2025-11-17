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
site.title           : {{ site.title | default: '(undefined)' }}
site.description     : {{ site.description | default: '(undefined)' }}
site_url             : {{ site.baseurl }}
home_url             : {{ site.home_url | default: '(undefined)' }}
source_url           : {{ site.github.repository_url }}
version              : {{ site.version | default: '(undefined)' }}
revision             : {{ site.revision | default: '(undefined)' }}{{'.'}}{{ site.github.build_revision | default: '(undefined)' }}
ghost                : {{ site.ghost | default: '(undefined)' }}
google_analytics     : {{ site.google_analytics | default: '(undefined)' }}
cloudflare_analytics : {{ site.cloudflare_analytics | default: '(undefined)' }}

fonts : {{ site.fonts | default: '(undefined)' }}
```

## Pages

{% include pages.md %}

## Posts

{% include posts.md %}