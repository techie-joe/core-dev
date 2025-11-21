---
layout: primer
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
    <link id="_style" rel="stylesheet" href="{{ site.base_url }}/assets/primer/css/style.css?v={{ site.github.build_revision }}" />
    {% include layout_head.html %}
    <!--[if lt IE 9]><script src="//unpkg.com/html5shiv@3.7.3/dist/html5shiv.min.js"><![endif]-->
  </head>
  <body>
    <div class="container-lg px-3 my-5 markdown-body">
      {% if site.title and site.title != page.title %}
      <h1><a href="{{ site.home_url }}">{{ site.title }}</a></h1>
      {%- endif %}
      {{ content }}
      <div class="footer border-top border-gray-light mt-5 pt-3 text-right text-gray">
        {% if site.github.private != true and site.github.license %}
        This site is open source. {% github_edit_link "Improve this page" %}.
        {%- endif %}
      </div>
    </div>
    {% include layout_body.html %}
  </body>
</html>