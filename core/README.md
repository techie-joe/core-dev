# The Core Theme

## 💎 Core is a Jekyll theme for GitHub Pages

**[Preview the theme](./preview)** to see how it looks and **[start using it](./#how-to-use)** today!

```yml
remote_theme: techie-joe/core
remote_theme_version  : {{ site.version }}
remote_theme_revision : {{ site.revision }}
```

<a href="./preview" title="See how the template looks." class="button primary" style="width:5rem;height:2rem;font-size:1.2rem;">Preview</a>
<a href="./samples" title="See how you can use this template to build your website" class="button secondary" style="width:5rem;height:2rem;font-size:1.2rem;font-weight:normal;">Samples</a>

## Build faster on GitHub Pages

We provide users with a **quick and easy way to build a website**. Build your website on GitHub Pages using **ready-to-go templates and components**. You can use **Markdown**, **Pug** or **HTML** to code your website. Set and style any page instantly, just by referring to the pre-configured assets. Should you require further personalization, you can customize every detail as needed, from global defaults to specific components.

> **Your design, your content, your way.**

## How to use

To use the theme on your site:

1. Add the following lines to the `_config.yml` file in the root of your GitHub repository:

    ```yml
    remote_theme: techie-joe/core
    plugins:
        - jekyll-remote-theme
    ```

2. Clear out any existing values of `theme`.

3. Then, activate **GitHub Pages**.

_For detailed instruction, see [The GitHub Pages Walkthrough](https://techie-joe.github.io/library/github-pages/)._

## How to customize

### Configuration variables

Set the following variables in your site's `_config.yml` file.

```yml
title       : "The title of your site"
description : "Short description of your site."
```

Additionally, you may also set:

```yml
ghost: your-tracking-id
# to track your ThemeJs.

google_analytics: your-tracking-id
# to track your website using Google Analytics.

cloudflare_analytics: your-tracking-id
# to track your website using Cloudflare Analytics.

show_downloads: true
# true or false (unquoted).
# to indicate whether to provide a download URL.
```

### Stylesheet

To add your own custom styles:

1. Create a file called `/assets/css/style.scss` in your site's repository with the following content, exactly as shown:

    ```scss
    ---
    ---
    @import "core";
    ```

2. Add any custom styles immediately after the `@import` line.

_**Note:** To change the template's SASS variables, you must set new values before the `@import` line in your stylesheet._

### Layouts

All [template layouts](https://github.com/techie-joe/core/tree/master/_layouts) in the `_layouts` folder and [template components](https://github.com/techie-joe/core/tree/master/_includes) in the `_includes` folder provide a good starting point of things you can customize. To override a file, create a mirror copy of that file in your site's repository reflecting the exact path and file-name.

For example, to change the default layout:

1. Copy the `/_layouts/default.html` files to your site's repository.
2. Then customize it as you'd like.

_**Pro-tip:** click "raw" to make copying easier._

### Analytics code

Paste the analytics code into your site's `_includes/google_analytics.html` file.

### Overriding GitHub URLs

Templates rely on GitHub URLs, such as links to your repository or links to download your project.

To override the default URLs:

1. Look at the template source (in the `_layouts` and `_includes` folder) to determine the name of the variable. It will be in the form of:

    {% raw %}
    ```liquid
    {{ site.github.zip_url }}
    ```
    {% endraw %}

2. Specify the URL you'd like to use in your site's `_config.yml` file. Jekyll will use the URL you specified, instead of the default one.  

    For example, if the variable was `site.github.zip_url`, add the following:

    ```yml
    github:
        zip_url: http://example.com/download.zip
        # another_url: another_value
    ```

    > _**Note:** You must remove the `site.` prefix, and each variable name (after the `github.`) should be indent with two space below `github:`._

_For more information, see [the Jekyll variables documentation](https://jekyllrb.com/docs/variables/)._

## Running the template locally

To run the template locally:

1. Clone the template's repository into your computer:

    ```
    git clone https://github.com/techie-joe/core
    ```

2. Go to the cloned directory.

3. Add the following to your site's `Gemfile`:

    ```ruby
    gem "github-pages", group: :jekyll_plugins
    ```

4. Run `script/bootstrap` to install necessary dependencies.
    > _This is a required one-time setup before other script can function._

5. Then run `script/serve` to start the server.

6. Visit [localhost:4000](//localhost:4000) in your browser to see the template.

## Roadmap

See the [open issues](https://github.com/techie-joe/core/issues) for a list of proposed features and known issues.

## License

**Core** is an open source project licensed under the [MIT LICENSE](//github.com/techie-joe/core/blob/main/LICENSE). You're allowed to use the code with conditions only requiring preservation of copyright and license notices.