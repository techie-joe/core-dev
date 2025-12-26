---
index: false
use_footer: edit_link_only
title: Test Markdown
description: Testing something here.
---
{%- include ui.html %}

{%- include dove/nav_test.md %}
{{ thin_hr }}

{%- assign testing = true %}
{%- if testing %}

{%- assign pad = "           " %}
{%- assign x = "[x-value]" %}

```yml
x : {{ x }}
{% include mod-inspect.md val=page pad=pad %}
```

{%- else %}
{%-
  include 404.md
  title = "Are you lost?"
  description = "There is nothing to show here."
%}
{%- endif %}

{% comment %}
{% include mod-inspect.md val=page pad=pad %}
{% endcomment %}