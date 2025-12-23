{% include ui.html %}

Hero message and _colored text_{: .n.text-red } grabs attention
{: .hero }

# Heading 1

![Featured image](https://techie-joe.github.io/core/images/299-400x300.jpg){: .float-right.ml.mb width=400 height=400 }

Welcome to the demo! This page provide a glimpse of the theme's appearance. The `text-justify` class will neatly align a paragraph. While the `big-first` class will enlarge the first letter. If you want to nudge the first line, use the `indent` class. Indentation gives a sense of order and clarity, making an article easier to read. You may also include [images](#include-images) and [hyperlinks](#hyperlink) to make things more engaging.
{: .text-justify.big-first }

**Leave whitespace between paragraphs for clarity.**

**You may notice some gibberish text in this demo.** It's just a placeholder content added to help you visualize how the layout, spacing and typography will appear once real content is in place. The gibberish text itself doesn't carry any meaning, it's simply there to fill the empty areas and make the overall design feel balanced and complete. Each line and section shows something different, though none of it is meant to be understood literally. It's more of a creative illusion, a way to showcase how color, contrast, and structure come together to create a theme. It honors the "look-and-feel" metaphor for how design can shift and vary in perspective. That's the beauty of visual design. Every layout tells its own silent story, even when the words themselves means nothing at all.
{: .indent.text-justify.text-grey }

> [Open the legacy demo page](legacy).

{{ thin_hr }}

- Text can be
**bold**,
_italic_,
and ***both***.
You can also add `code`
and ~~strike-through~~ texts.

- Use HTML to <u>underline</u> texts,
add <abbr title="Abbreviation">abbreviation</abbr>,
include <samp>sample</samp>,
and <mark>mark</mark> texts.

- Color text 
**primary**{: .text-primary }
**secondary**{: .text-secondary }
**pending**{: .text-pending }
**gray**{: .text-gray }
**slategray**{: .text-slategray }
**red**{: .text-red }
**blue**{: .text-blue }
**green**{: .text-green }
**purple**{: .text-purple }
**yellow**{: .text-yellow }
**orange**{: .text-orange }
{{-'.'}}

**Horizontal rule** can be thick or thin. There are two of them following this sentence.

---

---
{: .thin }

## Heading 1
{: .h1 }

H1 holds everything together. It is the gravitational anchor of the document. Without it, paragraphs would simply drift into void. Usually there is only one per page dedicated for the main title. But you can also mock an H1 using the `h1` class.
{: .text-justify }

## Heading 2

H2 is the reliable lieutenant of headings. It organizes sections, leads the battalions of texts, and secretly dreams of being an H1 someday. Don't tell it the truth. Let it dream.
{: .text-justify.text-grey }

### Heading 3

It is larger than the rest, yet forever humble in the shadow. A bit redundant sometimes. H3 loves details and subtopics. But if you go too deep, suddenly you're in H6 territory, and nobody reads that far.
{: .text-justify.text-grey }

#### Heading 4

H4 is almost forgotten though technically useful, but no one really cheers for it. You'll use it only when you have to, like adding extra layers to a report nobody asked for. He is always invited, never remembered.
{: .text-justify.text-grey }

###### Heading 5

Remember that tiny notebook you bought to look organized but never actually use?  It's small, it's cute, it's there, but honestly, body text is almost the same size, so why bother? H5 knows its fate but accepts it gracefully.
{: .text-justify.text-grey }

###### Heading 6

Then comes H6, so small it whispers. Nobody notices it. Even search engines squint and go, “Wait, is that… a heading?” H6 is like writing a title with a pale ink, only the bravest readers will ever see it.
{: .text-justify.text-grey }

## Blockquote

> This is a blockquote.

> You can style blockquotes.
> > You can stack them too.
> {: .border-yellow }
{: .border-green }

> **Apply any style you like.**{: .text-pending }
{: .border-red }

## Code block

```
Markdown render `code block` as is.
    white-spaces, new lines, tabs and all. 

Long, single-line `code block` should not wrap. They should remain on a single line instead of breaking into multiple lines. If the line is too long to fit within the visible width of the page, the reader should be able to scroll horizontally to see the rest of it. This line should be long enough to demonstrate this.
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

## Hyperlink

Build [link to another page](#){: onclick="event.preventDefault();" }. But if you link to a missing page, you'll get [an error](404){: title="The error page"}.

## Button link

[Button Link](#){: .button onclick="event.preventDefault();" }
[Primary](#){: .button.primary onclick="event.preventDefault();" }
[Secondary](#){: .button.secondary onclick="event.preventDefault();" }

## Footnote link

Footnote links are references to the note[^1] listed at the bottom of a page.

Click the link to see an example[^2].

Footnote can be written in multiple lines[^3].

Normally you would use number as reference, but you can use word[^note] as well.

## Include images

![Large image](https://techie-joe.github.io/core/images/299-1024x368.jpg){: alt="Large image" .width-full }

> Some images on this demo came from [picsum.photos](https://picsum.photos/){: target="_blank"}.
{: .smaller.mt-0 }

Use the `width-full` or `width-fit` class for large images. Use `float-left`, `float-right` or `centered` to align them.

---
{: .mb-3 }

![Left Octocat](https://techie-joe.github.io/dove/images/octocat-64x64.png){: .float-left.pa width=64 height=64 }
![Right Octocat](https://techie-joe.github.io/dove/images/octocat-64x64.png){: .float-right.pa width=64 height=64 }
![Small image](https://techie-joe.github.io/dove/images/octocat-64x64.png){: .centered.pa width=64 height=64 }

---
{: .mt-3 }

## Box wrapper

Use `box` to create a wrapper.
{: .box.text-left }

Customize `box.bg-blue.border-blue.text-white`
{: .box.bg-blue.border-blue.text-white.text-center }

Apply any style you like
{: .box.bg-red.border-red.text-white.text-right }

## Details and summary

{%- capture _summary %}
Collapsible content. _(click for more)_{: .small }
{%- endcapture %}
{%- capture _details %}
The details and summary block, is a collapsible accordion of destiny where content hides until poked by the click of curiosity. It is the digital equivalent of whispering, “psst, wanna see something cool?” and then rolling out a red carpet of hidden paragraphs, secret snippets, or the occasional diagram that nobody asked for. The summary is the bouncer at the door, deciding whether the reader gets a glimpse inside or stays staring at the title forever, while details hoards all the juicy stuff like a dragon sitting on its markdown gold.
{: .text-grey.text-justify }
{%- endcapture %}
{%- include mod-details.md %}

{%- capture _summary %}
Style with `box`. _(click for more)_{: .small }
{%- endcapture %}
{%- capture _details %}
This block expands like curtains on opening night, then folds back up as if nothing ever happened, gaslighting your memory of what you just saw. Authors toss long-winded explanations, secret Easter eggs, or poorly formatted cat ASCII art inside it, knowing only the brave will click. In its most chaotic form, the details block nests within itself, collapsing collapsibles within collapsibles until the reader spirals into an abyss of disclosure toggles, wondering whether the summary is summary enough to summarize the summaries.
{: .text-grey.text-justify }
{%- endcapture %}
{%- include mod-details.md %}{: .box }

## Ordered list

1. First level item.
    1. Second level item.
        1. Third level item.
        2. Other item.
        3. The last item.
        {: .list-lower-roman }
    2. Other item.
    3. The last item.
    {: .list-lower-alpha }
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

### Full-width table

| Left              | Center       | Right      |
| :---------------- | :----------: | ---------: |
| Good fish         | Ok           |       nice |
| Plenty box        | Out of stock |       yeah |
| Biscoite          | Ok           |        hmm |
| Zoute drop        | Ok           |       tumm |
{: .width-full }

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