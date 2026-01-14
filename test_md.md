---
index: false
use_footer: edit_link_only
title: Test Markdown
description: Testing something here.
testing: false
---
{%- include ui.html %}
{%- if page.testing == false %}
{%-
  include 404.md
  title = "Sorry"
  description = "There is nothing to show here."
%}
{%- else %}
{%- assign pad = "           " %}

```yml
# testing ..
```

{%- endif %}
{% comment %}
{% include mod-inspect.md val=page pad=pad %}
{% endcomment %}