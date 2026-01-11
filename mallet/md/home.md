---
layout: mallet
index: false
use_footer: demo_sample
title: Home
description: Home template.
---
{%- include ui.html %}

<style>
  #hero_block { padding:1rem 2rem }
  #hero_block h1 { margin-top:1rem }
  #hero_block h2 { border:0;font-weight:normal;font-size:1.2em }
  #hero_block #icon {
    position: absolute;
    font-size:1em;
    opacity:.2;
    right:10em;
    line-height:1;
    z-index:-1;
    top:5em;
    scale:14;
  }
</style>
<div id="hero_block" class="box no_overflow">
  <div class="relative"><div id="icon">⚒️</div></div>
  <h1>⚒️ Site title</h1>
  <h2>Your site's description</h2>
</div>

{{ thin_hr }}

`// home content`