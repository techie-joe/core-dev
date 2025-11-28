---
title: Markdown
permalink: md
---
<style>
._footer { margin-top:1rem !important }
</style>

# 🕊️ {{ site.title }} {{ page.title }}
{: #markdown }

{{ description | default: '<code>(description)</code>' }}

---
{: .mt-3.mb-0}

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
{: #pre_intro }
<style>article #pre_intro pre.highlight { max-height:203px }</style>

---

{% capture pages %}
### Pages
{% include pages.md %}
{%- endcapture %}

{% capture posts %}
### Posts
{% include posts.md %}
{%- endcapture %}

<div class="flex" style="gap:3rem;margin:1rem auto 3rem auto">
  <div class="f">{{ pages | markdownify }}</div>
  <div class="fill">{{ posts | markdownify }}</div>
</div>
