---
title: "R is for Recursive"
date: "2024-02-18T22:15:46.000Z"
description: "Today we’re digging into variable fonts with an ambitious project with five variable axes."
tags: 
  - "26DaysofType"
  - "Type"
coverImage: "26Days-R-Recursive.png"
---

![Day 18. Recursive](images/26Days-R-Recursive-1024x576.png)

I vaguely remember mentioning a variable font or two earlier in [this blogging series](https://nicksimson.com/26-days-of-type/), without elaborating on the topic much further. I knew it was something I wanted to dig in deeper down the road.

Variable fonts typically contain one or more axes (as in the plural of axis, not ax) like _weight_, _optical size_, _width_, etc. in a single font file, allowing for a variety of styles and expression without requiring multiple fonts for each variety. Nick Sherman maintains an excellent [website called v-fonts.com](https://v-fonts.com/) where you can try out a variety of variable fonts.

The design I want to highlight today is [Recursive](https://www.recursive.design/), an ambitious five-axis variable typeface released under the SIL Open Font License. It was a graduate thesis project of Stephen Nixon at [TypeMedia](https://typemedia.org/) in 2018, before Nixon started his own foundry, [Arrow Type](https://www.arrowtype.com/). Google Fonts commissioned Nixon and Arrow Type to finish developing the project and released the typeface through Google Fonts.

<figure>

![The words "This is the same font" rendered in three different styles.](images/26Days-R-Recursive-variable-demo-1024x576.png)

<figcaption>

A demonstration of Recursive's five variable axes. Try it now at [recursive.design](https://www.recursive.design/).

</figcaption>

</figure>

The inspiration behind Recursive is a vernacular form of sign-painting called single-stroke casual lettering. These hand-painted letters are typically uppercase and forward-slanting.

> A foundational style for sign painters, single-stroke casual is comprised of just a few basic strokes which are assembled together to create letters. As a result, this style is highly practical, easy to learn, and (relatively) easy to paint. Its features are deliberately informal and “unbalanced”: letters are somewhat condensed and have curved stems, stroke connections are left visibly imperfect, and midpoints are low-slung. These qualities allow a sign painter to avoid some of the aspects of letter shaping that can be most challenging: perfectly straight lines, rigid symmetry, and optically-centered elements like the spine of the letter ‘S’.
> 
> Stephen Nixon, from the [Recursive type specimen (PDF)](https://www.recursive.design/assets/arrowtype-recursive-sansmono-specimen-230407.pdf)

Nixon's initial idea was to explore what a single-stroke casual [monospaced](https://nicksimson.com/posts/monospaced/) font could look like in a programming context. The result ended up becoming an ambitious project with an astounding variety of visual expression on five variable axes:

- `mono`: a range from Proportional (0) to Monospaced (1) with _semi-proportioned_ and _semi-monospaced_ characters in-between

- `casl`: a range from a Linear (0) engineered typefaces to a Casual (1) brush-lettered script

- `wght`: a range of **weights** from Light (300) to ExtraBlack (1000)

- `slnt`: a range of angles (**slant**) from 0 to -15 degrees for italic styles.

- `CRSV`: a **cursive** axis you can toggle on and off that replaces "roman" letterforms with more hand-written alternates like the single story **a** and **g**.

<figure>

![Sans Linear, Mono Linear, Sans Casual, and Mono Casual, in a range of weights and italics](images/26Days-R-Recursive-64-static-fonts-1024x576.png)

<figcaption>

There are 64 static fonts you can download for Recursive. Use the variable version for all the "in-betweens" not seen here.

</figcaption>

</figure>

In addition to the five variable axes, Recursive is also a superplexed family:

> \[A\]ll of its 32 instances have shared glyph width, kerning, and overall letterforms for every character. Of course, this also applies to in-between variations. The fact that characters within Recursive Sans have shared metrics ensures that line length is not affected when changing between its different font styles. This also allows smooth, animated transitions between any of the subfamily’s _Weight, Slant, & Casual_ axes.
> 
> Stephen Nixon, Recursive "[Designing Recursive](https://www.recursive.design/process/)"

There's a lot going on with this one typeface, so its worth [reading the manual specimen](https://www.recursive.design/assets/arrowtype-recursive-sansmono-specimen-230407.pdf) and [trying it out](https://www.recursive.design/#toolbar) before downloading and putting it to use on your next project. I just love the ambition and creativity on display here.

<figure>

![two ampersands compared](images/26Days-R-Recursive-ampersand-1024x576.png)

<figcaption>

At large sizes you can admire the details, like the [ink traps](https://nicksimson.com/posts/ink-traps/) in Sans Linear, and the brushstroke inspired curves in Mono Casual.

</figcaption>

</figure>

## Another great variable font

I particularly love [Fraunces](https://fraunces.undercase.xyz/) from Undercase Type, also released by Google around the same time as Recursive. It's great for display type and is like the grand-baby of fonts like Windsor and Cooper. There are four variable axes in this one: Optical Size, Weight, Soften, and Wonk. _Wonk! You gotta love it, right?_
