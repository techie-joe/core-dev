---
index: false
use_footer: edit_link_only
title: Test Markdown
description: Testing something here.
testing: false
---
{%- include ui.html %}

{%- include dove/nav_test.md %}
{{ thin_hr }}

{%- if page.testing %}

{%- assign pad = "           " %}

```yml
# test goes here
```

{%- else %}
{%-
  include 404.md
  title = "Sorry"
  description = "There is nothing to show here."
%}
{%- endif %}

{% comment %}
{% include mod-inspect.md val=page pad=pad %}
{% endcomment %}