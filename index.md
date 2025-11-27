---
title: Markdown
description: Markdown index.
permalink: md
use_header: true
use_nav: false
use_footer: true
# use_footer: ['edit_link_only']
---
# {{ page.title }}
{: .mt-3 }

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
{: #pre_intro.mb-3 }
<style>article #pre_intro pre.highlight { max-height:203px }</style>

**{{ site.title }}**
&bull;
[Home]({{ site.base_url }}/)
&bull;
[Test]({{ site.base_url }}/test)
&bull;
[Repository]({{ site.github.repository_url }}){: target="_edit" }
&bull;
[Proto](https://techie-joe.github.io/proto){: target="_test" }

## Pages

{% include pages.md %}

## Posts

{% include posts.md %}