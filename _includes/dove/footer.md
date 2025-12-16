{% include ui.html %}

{%- unless page.use_footer contains 'edit_link_only' %}
{{ thin_hr }}
<nav>
<p>
<b>Dove</b>
{{ angle }}
<a href="https://github.com/techie-joe/dove" target="_edit">Repository</a>
{{ bull }}
<a href="https://techie-joe.github.io/proto" target="_test">Proto</a>
</p>
{{ thin_hr }}
<p>
<b>Techie Joe's</b>
{{ angle }}
<a href="https://techie-joe.github.io" target="_techiejoes">Website</a>
{{ bull }}
<a href="https://github.com/techie-joe" target="_github">Profile</a>
{{ bull }}
<a href="/nova/site/themejs" target="_themejs">ThemeJs</a>
</p>
</nav>
{%- endunless %}

{%- if site.github.private != true and site.github.license and page.use_pug != true %}
{{ thin_hr }}
<p class="text-right text-gray"><small>This site is open source. {% github_edit_link "Improve this page" %}.</small></p>
{%- endif %}