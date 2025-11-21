---
layout: mallet
---
<!doctype html>
<html lang="{{ page.lang | default: site.lang | default: 'en-US' }}" class="no_js {{ page.layout }}_layout">
  <!-- path   : {{ page.path }} -->
  <!-- layout : dove/jekyll/{{ page.layout }} -->
  <head>
    <meta charset="{{ site.encoding | default: 'utf-8' }}" />
    {% seo %}
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=5.0,shrink-to-fit=no" />
    <meta id="_color-scheme" name="color-scheme" content="{{ page.color_scheme | default: site.color_scheme | default: 'light dark' }}" />
    <meta id="_theme-color"  name="theme-color"  content="{{ page.theme_color | default: site.theme_color | default: '' }}" />
    <link id="_style" rel="stylesheet" href="{{ site.base_url }}/assets/mallet/css/style.css?r={{ site.revision }}.{{ site.github.build_revision }}" />
    {% include layout_head.html %}
    <!--[if lt IE 9]><script src="//unpkg.com/html5shiv@3.7.3/dist/html5shiv.min.js"><![endif]-->
  </head>
  <body>
    <main id="_main" class="_app __fadein">
      <div id="_layout" class="container-lg px-3 markdown-body">
        <header class="header">
          {% if page.use_header == false %}
          <style>.header{display:none !important}</style>
          {%- else %}
          <nav id="_header-bar"><div class="_flex"><div class="_flex-main">
            <div class="_logo"><a href="{{ site.home_url }}">{{ site.title | default: '(untitled)' }}</a></div>
          </div></div></nav>
          {%- endif %}
        </header>
        </header>
        <nav class="_nav">
          {% if page.use_nav == false %}
          <style>._nav{display:none !important}</style>
          {%- else %}
          <div><code>// nav : {{ page.use_nav | default: '(undefined)' }}</code></div>
          {%- endif %}
        </nav>
        <article id="_article">{{ content }}</article>
        <footer class="footer">
          {% if page.use_footer == false %}{%- else %}
            {% if page.use_footer contains 'edit_link_only' -%}{%- else -%}
            {% include footer.md %}
            {%- endif %}
            {% if site.github.private != true and site.github.license -%}
            <hr/><p class="text-right text-gray">This site is open source. {% github_edit_link "Improve this page" %}.</p>
            {%- endif %}
          {%- endif %}
        </footer>
      </div>
      <div class="_theme_switch _needjs">
        {% include theme_switch.html %}
      </div>
    </main>
    {% include layout_body.html %}
  </body>
</html>