# About the Dove project

🕊️ **Dove** is a theme development project. We are working on the following themes.

- **[techie-joe/core](https://github.com/techie-joe/core)**
- **[techie-joe/mallet](https://github.com/techie-joe/mallet)**
- **[techie-joe/nova](https://github.com/techie-joe/nova)**
- **[techie-joe/prime](https://github.com/techie-joe/prime)**

---

> [!WARNING]  
> **Dove is constantly under active development. Use with caution. Future update may break your site. Visit theme's homepage for stable release.**

Dove provides a foundation that allows you to **easily apply your own design** or integrate a framework of choice on top. You can style any page just by linking them to a custom layout. Your site can be written in **Markdown**, **Pug** and **HTML**. With Dove, you'll be able to build your site directly on your repository.

## Project philosophy

The primary goal of this project is to provide users with an **easy way to build a website**. We aim to meet the needs of the vast majority of users out of the box, including those with specific needs to customize further. You may add custom styles, modify defaults, customize layouts and it's components.

---

## Usage

To use the theme on your site, add the following to your site's `_config.yml`:

```yml
remote_theme: techie-joe/dove
# the location of the remote_theme.

plugins:
- jekyll-remote-theme
# add jekyll-remote-theme to the plugins list.
```

## Customization

### Configuration variables

Dove respects the following variables in your site's `_config.yml` and `_config.pug`:

```yml
title       : 'The title of your site'
description : 'Short description of your site's purpose.'
```

Additionally, you may also set:

```yml
google_analytics: 'your-tracking-id'
# to track your website using Google Analytics.

cloudflare_analytics: 'your-tracking-id'
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

*Note: To change the template's SASS variables, you must set new values before the `@import` line in your stylesheet.*

### Layouts

To change the template's layout:

1. Copy [the default layout](https://github.com/techie-joe/dove/blob/master/_layouts/default.html) to your site's repository.<br />( _Pro-tip: click "raw" to make copying easier_ )
2. Customize the layout as you'd like.

All [template layouts](https://github.com/techie-joe/dove/tree/master/_layouts) in the `_layouts` folder and [template components](https://github.com/techie-joe/dove/tree/master/_includes) in the `_includes` folder provide a good starting point of things you can customize. Create a mirror copy of the files you want to override in your site's repository.

### Google Analytics

Google has released several iterations to their Google Analytics code over the years since this template was first created. If you would like to take advantage of the latest code, paste it into `_includes/google_analytics.html` in your Jekyll site.

### Overriding GitHub-generated URLs

Templates often rely on URLs supplied by GitHub such as links to your repository or links to download your project. To override one or more default URLs:

1. Look at [the template source](https://github.com/techie-joe/dove/blob/master/_layouts/prime.html) to determine the name of the variable. It will be in the form of `{{ site.github.zip_url }}`.
2. Specify the URL that you'd like the template to use in your site's `_config.yml`. For example, if the variable was `site.github.url`, add the following:

    ```yml
    github:
        zip_url: http://example.com/download.zip
        # another_url: another_value
    ```

3. When your site is built, Jekyll will use the URL you specified, rather than the default one provided by GitHub.

*Note: You must remove the `site.` prefix, and each variable name (after the `github.`) should be indent with two space below `github:`.*

For more information, see [the Jekyll variables documentation](https://jekyllrb.com/docs/variables/).


## Previewing the template locally

To run the template locally:

1. Clone down the template's repository (`git clone https://github.com/techie-joe/dove`).
2. `cd` into the template's directory.
3. Run `script/bootstrap` to install the necessary dependencies.
4. Run `script/serve` to start the preview server.
5. Visit [`localhost:4000`](http://localhost:4000) in your browser to preview the template.

## Running tests

The template contains a minimal test suite, to ensure a site with the template would build successfully.
1. You'll need to run `script/bootstrap` (at least once) before the test script will work, if you haven't done it already.
2. To run the tests, simply run `script/cibuild`.

## Contributing

Interested in contributing to Dove template project? We'd love your help. Dove is an open source project, built one contribution at a time by users like you. Go ahead and [start discussion](https://github.com/techie-joe/dove/discussions) before embarking.

<!--
See [the CONTRIBUTING file](docs/CONTRIBUTING.md) for instructions on how to contribute.
-->

## Roadmap

See the [open issues](https://github.com/techie-joe/dove/issues) for a list of proposed features (and known issues).