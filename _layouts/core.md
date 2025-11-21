---
layout: core
---
<!doctype html>
<html lang="{{ page.lang | default: site.lang | default: 'en-US' }}" class="_{{ page.layout }}_layout">
  <!-- path   : {{ page.path }} -->
  <!-- layout : dove/jekyll/{{ page.layout }} -->
  <head>
    <meta charset="{{ site.encoding | default: 'utf-8' }}" />
    {% seo %}
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=5.0,shrink-to-fit=no" />
    <meta id="_theme-color"  name="theme-color"  content="{{ page.theme_color | default: site.theme_color | default: '' }}" />
    <meta id="_color-scheme" name="color-scheme" content="{{ page.color_scheme | default: site.color_scheme | default: 'light dark' }}" />
    <link id="_style" rel="stylesheet" href="{{ site.github.url }}/assets/core/css/style.css?v={{ site.version || site.github.build_revision }}" />
    {% include custom-head.html %}
    <!--[if lt IE 9]><script src="//unpkg.com/html5shiv@3.7.3/dist/html5shiv.min.js"><![endif]-->
  </head>
  <body>
    <div class="_views"><div class="_view">
      <header class="_header"><div class="_layout">
      {% if page.url == '' or page.url == '/' %}{% else -%}
        {% if page.show_title != 'hide' and site.show_title != 'hide' and site.title and site.title != page.title -%}
          <a href="{{ site.github.url }}">{{ site.title }}</a>
        {%- endif %}
      {%- endif %}
      </div></header>
      <nav class="_nav"><div class="_layout"></div></nav>
      <main class="_main"><article class="_article _layout">
      {{ content }}
      </article></main>
      <footer class="_footer"><div class="_layout"></div></footer>
    </div></div>
    {% include custom-body.html %}
  </body>
</html>