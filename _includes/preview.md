{% include ui.html %}

Hero message with <span class="text-red">red text</span> grabs attention
{: .hero }

# Heading 1

![Featured image](https://techie-joe.github.io/core/images/299-400x300.jpg){: .float-right.ml-4.mb-4 width=400 height=400 }

Welcome to the tour! This demo provide a glimpse of the theme's appearance. The `big-first` class will enlarge the first letter of a paragraph. While the `text-justify` class will neatly align your texts to its container. To nudge the first line of a paragraph, use the `indent` class. Indentation gives a sense of order and clarity, making an article easier to read. Include images and [hyperlinks](#){: onclick="event.preventDefault();" } to make things more engaging.
{: .text-justify.big-first }

**Leave whitespace between paragraphs for clarity.**

**You may notice some gibberish text in this demo.** It's just a placeholder content added to help you visualize how the layout, spacing and typography will appear once real content is in place. The text itself doesn't carry any meaning, it's simply there to fill the empty areas and make the overall design feel balanced and complete. Each line and section tells something, though none of it is meant to be understood literally. It's more of a creative illusion, a way to showcase how color, contrast, and structure come together to create a theme. It honors the “look and feel”, a metaphor for how design can shift and vary in perspective. That's the beauty of visual design. Every layout tells its own silent story, even when the words themselves mean nothing at all.
{: .indent.text-justify.text-grey }

> Open [the legacy demo page](legacy).

---

---
{: thin }

**Horizontal rule** can be thick and thin. There are two of them above this sentence.

- Text can be
**bold**,
_italic_,
and ***both***.
You can also add `code`
and ~~strike-through~~ texts.

- Use HTML to <u>underline</u>, add
<abbr title="Abbreviation">abbreviation</abbr>,
<samp>sample</samp>, and
<mark>mark</mark> texts.

- Color them 
<b class="text-primary">primary</b>
<b class="text-secondary">secondary</b>
<b class="text-gray">gray</b>
<b class="text-slategray">slategray</b>
<b class="text-red">red</b>
<b class="text-blue">blue</b>
<b class="text-green">green</b>
<b class="text-purple">purple</b>
<b class="text-pending">pending</b>
<b class="text-orange">orange</b>
<b class="text-orange-light">orange-light</b>.

## Heading 1
{: .h1 }

The H1 holds everything together. Usually there is only one per page dedicated for the main title. For styling puposes however, you can mock other heading to look like an H1 using the `h1` class.
{: .text-justify }

## Heading 2

Not too loud, not too small. It's like the middle child of headings: always trying, never crying. H2 organizes sections, but secretly dreams of being an H1 someday. Don't tell it the truth. Let it dream.
{: .text-justify.text-grey }

### Heading 3

The Mysterious H3 is like that friend who wears sunglasses indoors. Mysterious. Cool. A bit unnecessary sometimes, but when used right — chef's kiss! H3 loves details and subtopics. But if you go too deep, suddenly you're in H6 territory, and nobody reads that far.
{: .text-justify.text-grey }

#### Heading 4

H4 is forgotten like socks at Christmas. Technically useful, but no one really cheers for it. You'll use it if you have to, like adding extra layers to a report nobody asked for. Poor H4. Always invited, never remembered.
{: .text-justify.text-grey }

###### Heading 5

H5 is that tiny notebook you bought to look organized but never actually use. It's small, it's cute, it's there — but honestly, body text is almost the same size, so why bother? H5 knows its fate but accepts it gracefully.
{: .text-justify.text-grey }

###### Heading 6

And then comes H6, the heading so small it whispers. Nobody notices it. Even search engines squint and go, “Wait, is that… a heading?” H6 is like writing a title with invisible ink: only the bravest readers will ever see it.
{: .text-justify.text-grey }

## Code blocks

```
Markdown render `code blocks` as is.
    white-spaces, new lines, tabs and all. 

Long, single-line `code blocks` should not wrap. They should remain on a single line instead of breaking into multiple lines. If the line is too long to fit within the visible width of the page, the reader should be able to scroll horizontally to see the rest of it. This line should be long enough to demonstrate this.
```

```js
// Javascript code with syntax highlighting
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

## Hyper links

You can link to [link to another page](#). But if you link to a missing page, you'll get <a href="{{ site.baseurl }}/404" title="The error page">an error</a>.

## Button links

[Primary](#){: .button.bg-primary.text-white.border-primary onclick="event.preventDefault();" }
[Secondary](#){: .button.bg-secondary.text-secondary onclick="event.preventDefault();" }
[Button Link](#){: .button onclick="event.preventDefault();" }
{{ bull }}{: .text-grey }
[Change Theme](#){: .button onclick="event.preventDefault();theme.change()" title="Change Theme (Alt+T)" }

## Footnote links

Footnote links are references to the note[^1] listed at the bottom of a page.

Click the link to see an example[^2].

Footnote can be written in multiple lines[^3].

Normally you would use number as reference, but you can use word[^note] as well.

## Including images

![Large image](https://techie-joe.github.io/core/images/299-1024x368.jpg){: alt="Large image" .full-width }

> Images for this demo came from [picsum.photos](https://picsum.photos/){: target="_blank"}.
{: .text-small.mt-0 }

You can use the `width-full` or `width-fit` class for images.

For smaller images, align them using floats and margins: `float-left.mr.mb`, `float-right.ml.mb` or `centered.mb`.

---
{: .mb-3 }

![Left Octocat](https://techie-joe.github.io/core/images/octocat-64x64.png){: .float-left.mr.mb.pa width=64 height=64 }
![Right Octocat](https://techie-joe.github.io/core/images/octocat-64x64.png){: .float-right.ml.mb.pa width=64 height=64 }
![Small image](https://techie-joe.github.io/core/images/core-64x64.png){: .centered.mb.pa.bg-white width=64 height=64 }

---
{: .mt-3 }

## Box wrappers

Wrap texts in `box.ba`
{: .box.ba.ph.text-left }

Wrap in `box.bg-primary.text-white`
{: .box.ph.bg-primary.text-white.text-center }

Try other mix as well
{: .box.ph.bg-red.text-white.text-right }

## Styling blockquotes

> This is a blockquote.

> You can add styles to a blockquote.
> > "You can stack them too." — _Says the Author_
> {: .border-yellow }
{: .border-green }

> Try other mix as well.
{: .border-red.text-pending }

## Details and summary

Use HTML syntax to render the details and summary block.

<details>
<summary>Collapsible content. <i>(click for more)</i></summary>
<div class="details">
<p class="text-grey text-justify">The details and summary block, is a collapsible accordion of destiny where content hides until poked by the click of curiosity. It is the digital equivalent of whispering, “psst, wanna see something cool?” and then rolling out a red carpet of hidden paragraphs, secret snippets, or the occasional diagram that nobody asked for. The summary is the bouncer at the door, deciding whether the reader gets a glimpse inside or stays staring at the title forever, while details hoards all the juicy stuff like a dragon sitting on its markdown gold.</p>
</div>
</details>

<details class="box ba ph">
<summary>Style with <code>box.ba</code>. <i>(click for more)</i></summary>
<div class="details">
<p class="text-grey text-justify">This block expands like curtains on opening night, then folds back up as if nothing ever happened, gaslighting your memory of what you just saw. Authors toss long-winded explanations, secret Easter eggs, or poorly formatted cat ASCII art inside it, knowing only the brave will click. In its most chaotic form, the details block nests within itself, collapsing collapsibles within collapsibles until the reader spirals into an abyss of disclosure toggles, wondering whether the summary is summary enough to summarize the summaries.</p>
</div>
</details>

## Ordered list

1. First level item.
    1. Second level item.
        1. Third level item.
        2. Other item.
        3. The last item.
        {: style="list-style:lower-roman" }
    2. Other item.
    3. The last item.
    {: style="list-style:lower-alpha" }
2. Other item.
3. The last item.


## Unordered list

- First level item.
    - Second level item.
        - Third level item.
        - Other item.
        - The last item.
    - Other item.
    - The last item.
- Other item.
- The last item.

## Task list

- [x] Completed task.
- [ ] Pending task.
    - [x] Second level.
    - [ ] Second level.
        - [x] Third level.
        - [ ] Third level.
        - [ ] Last task.
    - [ ] Last task.
- [ ] Last task.

## Definition list

<dl>
<dt>Term</dt>
<dd>Definition or description.</dd>
<dt>CSS</dt>
<dd>A stylesheet language for styling web pages.</dd>
<dt>JavaScript</dt>
<dd>A programming language that adds interactivity to websites.</dd>
</dl>

## Table styles

### Normal table

| Name              | Membership   |      Value |
| :---------------- | :----------: | ---------: |
| Gary              |              |     $1,124 |
| Howard            | Premium      |     $5,678 |
| Sally             | Gold         |     $9,012 |

### Full table

| Left              | Center       | Right      |
| :---------------- | :----------: | ---------: |
| Good fish         | Ok           |       nice |
| Plenty box        | Out of stock |       yeah |
| Biscoite          | Ok           |        hmm |
| Zoute drop        | Ok           |       tumm |
{: .full-width }

### Simple table

| Name              |      Value |
| :---------------- | ---------: |
| Ahmad             |     $1,124 |
| Greg              |     $5,678 |
| Susan             |     $9,012 |
{: .simple }

### Borderless table

| Items             | Status       |
| :---------------- | -----------: |
| Good leaf         | Ok           |
| Plenty ticks      | Ready        |
| Zapper            | Pending      |
| Coute sauce       | Ok           |
{: .borderless }

### HTML table

<table class="full-width" style="max-width:500px">
<thead>
  <tr>
      <th class="text-left">Label</th>
      <th class="text-center">Status</th>
      <th class="text-right">Value</th>
  </tr>
</thead>
<tbody>
  <tr>
      <td class="text-left">
          <dl>
          <dt>Item name</dt>
          <dd>And its description.</dd>
          </dl>
      </td>
      <td class="text-center text-green">Good</td>
      <td class="text-right text-green">$78,910.12</td>
  </tr>
  <tr>
      <td class="text-left">
          <dl>
          <dt>Another item</dt>
          <dd>And its description.</dd>
          </dl>
      </td>
      <td class="text-center text-pending">Pending</td>
      <td class="text-right text-red">- ($1,234.56)</td>
  </tr>
</tbody>
</table>

## Footnotes

[^1]: A typical footnote contains: **The author's name**, the article title _and publication details_.

[^2]: For example: **John Smith**, Modern Web Design _(New York: TechPress, 2023), page 45_.

[^3]:
    Footnote can also have multiple lines. 
    Every new line in footnote should be prefixed with 2 space or 4 space indentation.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  