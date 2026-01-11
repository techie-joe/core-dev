---
layout: mallet
index: false
use_footer: demo_sample
title: Home
description: Home template.
---
{%- include ui.html %}

<style>
  .hero_block { padding:1rem 2rem }
  .hero_block .hero-title { margin-top:1rem }
  .hero_block .hero-description { margin-left: 3.3rem; font-size: 1.1em; }
  .hero_block .hero-hr { margin-top:45px }
  ._article #icon {
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
<div class="hero_block box no_overflow">
  <div class="relative"><div id="icon">⚒️</div></div>
  <h1 class="hero-title">⚒️ Site title</h1>
  <p class="hero-description">Your site's description.</p>
</div>

{{ thin_hr }}

`// home content`