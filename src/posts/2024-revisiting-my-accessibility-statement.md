---
title: "Revisiting my accessibility statement"
date: "2024-03-16T21:36:44.000Z"
description: "Rather than being a performative gesture, an accessibility statement can be a useful thing to feature on a personal website. "
tags: 
  - "Accessibility"
  - "IndieWeb"
  - "This site"
---

This post is my response to the [March 2024 IndieWeb Carnival: Accessibility in the Small Web](https://blog.basementcommunity.com/accessibility-in-the-personal-web/). I'm looking forward to reading more of the posts at the end of this month.

In [spring of 2022 I added an accessibility statement](https://nicksimson.com/posts/adding-an-accessibility-statement/) to my personal website. I was motivated and inspired by a number of people I've learned from who had kept statements on their sites. Check out [Eric Bailey](https://ericwbailey.design/accessibility-statement/), [Carie Fisher](https://cariefisher.com/accessibility/), [Ethan Marcotte](https://ethanmarcotte.com/accessibility/), and [Marcy Sutton](https://marcysutton.com/accessibility/) (and their websites). Keeping a link labeled "accessibility" in my website footer has motivated me to be more thoughtful and deliberate about the choices I make running this website. I think it's made me a better designer, too.

Rather than being a performative gesture, an accessibility statement can be a useful thing to feature on a personal website. At a minimum, an accessibility statement should do two things: state the level of conformance you are trying to achieve; and provide a way for people to contact you if they encounter accessibility barriers. For example, in [my accessibility statement](/accessibility.html), I aim to conform to Level AA (there are three levels total) of the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG22/). By trying to meet Level AA, I am already meeting Level A, and in some cases might be meeting parts of the AAA spec.

A little more than a year after I published my accessibility statement, I decided to redesign my site and move to a different platform (Eleventy to WordPress). The WCAG spec was officially updated from version 2.1 to 2.2 a month later on Oct. 5, 2023. I tried to keep up with the changes and make some updates to both my site and my statement. This became a challenge for me, as with this migration I became more dependent on other people's code, both with the "accessibility-ready" [WordPress theme I installed](https://wordpress.org/themes/jace/), along with the handful of [plugins](/posts/2023-wp-plugin-inventory.html) I was using.

The [WCAG update to 2.2 brought a number of significant changes](https://hidde.blog/new-in-wcag22/) to WCAG's success criteria. Two key things that affected my new website were the Focus Not Obscured (Minimum) requirement (my site has a sticky header I haven't figured out how to turn off) and the Minimum Target Size success criteria. I _think_ I'm doing OK in regards to these two things now, but I'm keeping a note about the sticky header in the **Known Issues** section of my accessibility statement.

## Known Issues

If you decide to publish an accessibility statement on your site, I recommend keeping a 'Known Issues' section. I add possible accessibility issues here as I become aware of them, and keeping these notes in public is a way to stay accountable to fixing them in a timely fashion.

One of the newer features I added in the last year was an [interactive map](https://nicksimson.com/map/) of posts and notes with geographic information. I've tested the map and while I can use touch, mouse, and keyboard controls to navigate, there are plenty of improvements to make with both map controls and contrast. While it's not a complete replacement for any inaccessibility in the map itself, the content can still be browsed with a link to the [Places category](https://nicksimson.com/cat/places/).

## Writing your accessibility statement

If you're new to accessibility statements and want to add one to your website, there's a [helpful W3C guide with examples and a generator](https://www.w3.org/WAI/planning/statements/). I took a glance at this to get an understanding of the format, but borrowed liberally from other personal website examples when writing mine. If you go this route, make sure you are running checks on your pages so you realistically can make the commitment to the level of conformance you choose.

In addition to providing WCAG conformance, contact information, and known issues, I'm also providing features, standards, and testing information. I also considered ways my statement (and my website itself) can be a reflection of my personal and professional commitment to accessibility. At the bottom of my statement, I include some links that have personally helped me in my journey, or resources I continue to learn from.

If you're looking for more examples, here are a few other accessibility statements I've seen since creating mine:

- [Apple Annie's Weblog](https://weblog.anniegreens.lol/accessibility-statement)

- [Ben Myers](https://benmyers.dev/accessibility-statement/)

- [Dana Byerly](https://danabyerly.com/accessibility-statement/)

- [David A. Kennedy](https://davidakennedy.com/accessibility/)

- [Gosha Tcherednitchenko](https://gosha.net/accessibility/)

- Piper Haywood includes accessibility information on her [Policies, Details, and Guidelines](https://piperhaywood.com/details/) page.

- [sara hendren](https://sarahendren.com/about) (see the footer and [documentation on github](https://github.com/sarahendren/sarahendren.github.io))

- [Todd Libby](https://toddl.dev/a11y/)

Once you publish an accessibility statement on your personal website, you can also add yourself to the IndieWeb wiki, like I did. There is a wiki page at [indieweb.org/accessibility\_statement](https://indieweb.org/accessibility_statement).

I'm always open to feedback on my accessibility statement, this post, or my website in general. If you encounter an issue with my site or have any suggestions, I can be reached at [nick@nicksimson.com](mailto:nick@nicksimson.com).
