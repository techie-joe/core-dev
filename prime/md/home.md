---
layout: prime
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
</style>
<div class="hero_block box">
  <h1 class="hero-title">🦅 Heroic title</h1>
  <p class="hero-description">Your site's description or sub-title.</p>
</div>

{{ thin_hr }}

`// home content`