# About the Dove project

🕊️ **Dove** is a theme development project. We are working on the following themes.

- **[techie-joe/core](https://github.com/techie-joe/core)**
- **[techie-joe/mallet](https://github.com/techie-joe/mallet)**
- **[techie-joe/prime](https://github.com/techie-joe/prime)**

Dove provides a **flexible foundation for your own designs** or preferred frameworks. Build websites on GitHub Pages using **ready-to-go templates and components**. You can build using **Markdown**, **Pug** or **HTML**. Set and style any page instantly, just by referring to the pre-configured assets. Our goal is to provide users with an **easy way to build a website**. We aim to meet the needs of the vast majority of users, including those who need to customize further. Start building with a massive leap ahead, and customize everything from global defaults to individual components to suit your need.

> **Dove handles the foundation so you can focus on your code.**

> [!WARNING]  
> **Dove is constantly under active development. Use with caution, future update may break your site. Visit individual theme's homepage for a stable release.**

## How to use

To use the theme on your site:

1. Add the following lines to the `_config.yml` file in the root of your GitHub repository:

    ```yml
    remote_theme: techie-joe/dove
    plugins:
        - jekyll-remote-theme
    ```

2. Clear out any existing values of `theme`.

3. Then, activate **GitHub Pages**.

_For detailed instruction, see [Techie Joe's GitHub Pages Walkthrough](https://techie-joe.github.io/library/github-pages/)._

## How to customize

### Configuration variables

Set the following variables in your site's `_config.yml`:

```yml
title       : "The title of your site"
description : "Short description of your site's purpose."
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
    @import "dove";
    ```

2. Add any custom CSS (or SASS, including imports) you'd like immediately after the `@import` line.

_**Note:** To change the template's SASS variables, you must set new values before the `@import` line in your stylesheet._

### Layouts

All [template layouts](https://github.com/techie-joe/dove/tree/master/_layouts) in the `_layouts` folder and [template components](https://github.com/techie-joe/dove/tree/master/_includes) in the `_includes` folder provide a good starting point of things you can customize. To override a file, create a mirror copy of that file in your site's repository reflecting the exact path and file-name.

For example, to change the default layout:

1. Create a copy of `/_layouts/default.html` in your site's repository.
2. Then customize it as you'd like.

_**Pro-tip:** click "raw" to make copying easier._

### Analytics code

Paste the analytics code into your site's `_includes/google_analytics.html` file.

### Overriding GitHub-generated URLs

Templates rely on URLs supplied by GitHub such as links to your repository or links to download your project.

To override the default URLs:

1. Look at [the template source](https://github.com/techie-joe/dove/blob/master/_layouts/prime.html) to determine the name of the variable. It will be in the form of:

    ```
    {{ site.github.zip_url }}
    ```

2. Specify the URL you'd like to use in your site's `_config.yml` file. Jekyll will use the URL you specified, instead of the default one.  

    For example, if the variable was `site.github.url`, add the following:

    ```yml
    github:
        zip_url: http://example.com/download.zip
        # another_url: another_value
    ```

    > _**Note:** You must remove the `site.` prefix, and each variable name (after the `github.`) should be indent with two space below `github:`._

_For more information, see [the Jekyll variables documentation](https://jekyllrb.com/docs/variables/)._

## Previewing the template locally

To run the template locally:

1. Clone the template's repository into your computer:

    ```
    git clone https://github.com/techie-joe/dove
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

## Running tests

This project contains a minimal test suite, to ensure a site with the template would build successfully.

To run the tests:

1. Run `script/bootstrap` to install necessary dependencies.
    > _This is a required one-time setup before other script can function._

2. Then run `script/cibuild` to start the test.

## Contributing

Interested in contributing to the Dove project? We'd love your help. Dove is an open source project, built one contribution at a time by users like you. Go ahead and [start a discussion](https://github.com/techie-joe/dove/discussions).

<!--
See [the CONTRIBUTING file](docs/CONTRIBUTING.md) for instructions on how to contribute.
-->

## Roadmap

See the [open issues](https://github.com/techie-joe/dove/issues) for a list of proposed features and known issues.

## License

**Dove** is an open source project licensed under the [MIT LICENSE](//github.com/techie-joe/dove/blob/main/LICENSE). You're allowed to use the code with conditions only requiring preservation of copyright and license notices.