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
site.title           : {{ site.title }}
site.description     : {{ site.description }}
site_url             : {{ site.github.url }}
home_url             : {{ site.github.url }}
source               : [techie-joe/dove](https://github.com/techie-joe/dove)
version              : {{ site.version }}
revision             : {{ site.github.build_revision }}
ghost                : {{ site.ghost || '(undefined)' }}
google_analytics     : {{ site.google_analytics || '(undefined)' }}
cloudflare_analytics : {{ site.cloudflare_analytics || '(undefined)' }}
undefined : {{ site.undefined || '(undefined)' }}
```

## Pages

{% include pages.md %}

## Posts

{% include posts.md %}