---
title: Dove.md
description: Dove.markdown variant.
permalink: md
use_nav: false
use_footer: false
---

<h1 id="_hero-titlex" class="hero">🕊️ {{ site.title }}.md</h1>
{% assign revision = site.revision | append: '.' | append: site.github.build_revision %}
```yml
# _config.yml
site.title           : {{ site.title | default: '(undefined)' }}
site.description     : {{ site.description | default: '(undefined)' }}
site_url             : {{ site.github.url }}
home_url             : {{ site.github.url }}
source               : {{ site.github.repository_url }}
version              : {{ site.version | default: '(undefined)' }}
revision             : {{ revision | default: '(undefined)' }}
ghost                : {{ site.ghost | default: '(undefined)' }}
google_analytics     : {{ site.google_analytics | default: '(undefined)' }}
cloudflare_analytics : {{ site.cloudflare_analytics | default: '(undefined)' }}
```

## Pages

{% include pages.md %}

## Posts

{% include posts.md %}