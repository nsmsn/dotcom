---
title: "D is for Drop Caps"
date: "2024-02-04T21:11:26.000Z"
description: "If someone wants you to make a paragraph “pop”—give them a drop cap!"
tags: 
  - "26DaysofType"
  - "Type"
coverImage: "26Days-D-Drop-Caps.png"
---

![Day 4: Drop Caps](images/26Days-D-Drop-Caps-1024x576.png)

**Drop caps, or "dropped capitals"** are a design element that can add a little _oomph_ to your page (or screen). The idea is this: a large capital letter, the first letter of the first word of your paragraph, stands out as a decorative element. This captures your reader's attention, hopefully drawing them in. The standard size of a drop cap is 2 or more lines tall. If you are reading this article on my website, and not in some RSS reader or [Instapaper](https://instapaper.com/)\-type app, you may have noticed that the **D** in this very paragraph "pops" in the page design.

This is day four of [26 Days of Type](https://nicksimson.com/26-days-of-type/), my idiosyncratic series on all things font and font-adjacent. In the last few days I've neglected to explain more about _why_ I'm doing this. Some of my remote tech worker pals and I are engaged in the **[Wiggle Work](https://wiggle.work/) Winter Writing Workshop**—a challenge to write (and publish) something every day during the month of February. Joni has written a [bit more of the background of this event](https://jonitrythall.com/breakfast-letters-take-two) on her own blog.

I also have a side project called [Typo.town](https://typo.town/) that I envisioned as this font of knowledge (pun intended) of all things type. I'm good at registering domain names, and OK at building websites, and fine at making and publishing lists. But I haven't taken the time to write all the great content I'm imagining for this project. Since the beginning of the year, I've been [carving out time to write each day](https://nicksimson.com/notes/3e6d2720df/). I'm aiming for 2-4 minutes during Mondays – Fridays and at least 24 minutes on the weekend.

So my neglect of my side project, a personal yearlong goal, and this unique writing challenge have all coalesced into this month-long blog series. I'm hoping after 26 days (or 29 days if I _really_ make it across the finish line) I'll be in a regular mode of writing about this subject, and will have some content to backfill into Typo.town later in the year.

**Back to drop caps.** There are a couple ways to do this with CSS, as well as in your desktop publishing apps of choice. But first, I grabbed some various books around the house to showcase some more visual examples of drop caps in the wild.

<figure>

<figure>

![An engraved O two lines tall opens a paragraph on Abraham Lincoln](images/IMG_3639-768x1024.jpeg)

<figcaption>

From The Crroked Path to Abolition by James Oakes

</figcaption>

</figure>

<figure>

![A big bold capital R three lines tall opens a short story](images/IMG_3640-768x1024.jpeg)

<figcaption>

From Killing the Buddha by Peter Manseau and Jeff Sharlet

</figcaption>

</figure>

<figure>

![A highly decorative red A stands 4 lines tall and opens a section about the prophets](images/IMG_3643-768x1024.jpeg)

<figcaption>

From Apocrypha Now by Mark Russell and Shannon Wheeler

</figcaption>

</figure>



</figure>

A drop cap is not to be confused with an **initial cap**, which sits on the baseline of the first line in the paragraph and extends higher. Here are a few examples of those:

<figure>

<figure>

![A large capital W](images/IMG_3644-768x1024.jpeg)

<figcaption>

From Welcome to the Monkey House by Kurt Vonnegut

</figcaption>

</figure>

<figure>

![A large capital A opens The Lorax by Dr. Suess](images/IMG_3645-768x1024.jpeg)

<figcaption>

From The Lorax by Dr. Seuss

</figcaption>

</figure>

<figure>

![A huge capital L opens a page about Guitars](images/IMG_3646-768x1024.jpeg)

<figcaption>

From Martin Guitars: A History

</figcaption>

</figure>



</figure>

The first CSS method I will share is using good 'ol fashioned box model CSS, a `<span>` plus the `display` and `float` properties. This method has been supported since what feels like forever. Check out the embedded CodePen below.

<p class="codepen" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-height="300" data-default-tab="html,result" data-slug-hash="ExMRYre" data-user="nsmsn">See the Pen <a href="https://codepen.io/nsmsn/pen/ExMRYre">Drop Cap One</a> by Nick Simson (<a href="https://codepen.io/nsmsn">@nsmsn</a>) on <a href="https://codepen.io">CodePen</a>.</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

If you want to get a little more advanced, Ethan Marcotte has a quick [5-minute tutorial](https://thegymnasium.com/courses/take5/creating-beautiful-and-accessible-drop-caps) on using the `:first-letter` pseudo-selector to style the first letter of the paragraph as a drop cap. His video and [finished example on CodePen](https://codepen.io/gymnasium/pen/QWjqmZg) also includes ways to make this more screen-reader friendly.

Finally, I want to mention `initial-letter`, a CSS property now supported in most browsers except Firefox. But you can totally use `@supports` to offer this as a progressive enhancement, with a fallback for browsers that don't support `initial-letter`. [Stacy Kvernmo has written a wonderful tutorial](https://www.oddbird.net/2017/01/03/initial-letter/) on using initial-letter to create drop caps that work in every browser. For more on `initial-letter`, [check out the MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/initial-letter).

**Now if you are doing some work for print** instead of HTML, I wanted to link to some resources for styling drop caps in some various desktop publishing applications:

- [InDesign from Adobe has great built-in support](https://helpx.adobe.com/indesign/using/drop-caps-nested-styles.html) for drop caps and nested styles.

- So does [Affinity Publisher, in the **Paragraph** panel](https://affinity.help/publisher/en-US.lproj/index.html?page=pages/Text/dropcaps.html&title=Drop%20caps).

- [Microsoft Word lets you Insert > Drop Cap](https://support.microsoft.com/en-us/office/insert-a-drop-cap-817fd19f-40fe-4b73-95e8-f3c0f5e01278) into a paragraph pretty simply and neatly.

- In [Pages for Mac, Drop Cap is a checkbox option](https://support.apple.com/guide/pages/add-drop-caps-tan91b247fab/mac) in the Format Sidebar and Style button.

Emphasizing the first letter has been around in publishing for centuries, and based on all the support in the 21st century, I don't think it's going anywhere soon. So **go forth, and drop that capital letter!**
