---
title: "Tool U Want"
date: "2024-07-12T21:38:00.000Z"
description: "Reflecting on what I know now from 25 years of trying to put stuff on the web, here’s what I’m looking for in a web publishing tool these days. "
tags: 
  - "Web Development"
---

![a drawing of a primitive hand axe made from sharpened stone](/img/post-images/lib-handaxe-www-1024x576.jpg)

Once in a while you come across a message that reminds you that you are not alone:

<figure>
 <blockquote>
  <p>Not a day goes by when I work on my website that I don't wish for a simpler setup. No SSG. No npm. No tooling. Just simple HTML with partials imports, vanilla CSS, and whatever vanilla JS is necessary for enhancements.</p>
  <p>I just want the HTML partials imports. Why don't we have them already?!</p>
 </blockquote>
 <figcaption><cite><a href="https://front-end.social/@SaraSoueidan/112769147677219641">Sara Soueidan</a></cite></figcaption>
</figure>

I am approximately 78% satisfied with my website right now. That approximate amount of happiness motivates me to update it on a regular basis. I like what my website gives me: quality interactions; a space to think in the open and develop my ideas over time; a digital mirror that may reflect a facet of who I am at any given time. My website is a tool for these things. The 22% dissatisfaction leads me to develop new features, chase [redesigns](/tags/redesign.html), or consider starting from scratch and re-platforming _everything_.

## A personal history of tooling

The first bits of HTML I wrote were in my adolescence. It was 1999 or 2000 (I was twelve or thirteen), pretty soon after my family first got dial-up internet. Later, I was introduced to the [CSS Zen Garden](https://csszengarden.com/) in 2005 when I took a web design class (Dreamweaver and Flash) in college. I was hired for my first real web designer job in 2011, and in the nearly 15 years since I've worked with at least as many different visual tools, software, and web-based platforms to build websites or website-y artifacts: Notepad, MSPaint (really), Photoshop, Dreamweaver, Fireworks, Blogger, Illustrator, SFTP, cPanel, WordPress, Tumblr, Squarespace, Basalmiq, Drupal, Jekyll, GitHub Pages, Sublime Text, Eleventy, Siteleaf, Netlify, Micro.blog, Hugo, Sketch, Figma, VS Code, Webflow<sup><a href="#fn1">1</a></sup>. If you include front-end frameworks like Bootstrap and Foundation, abstractions like Markdown and Sass, plus command line tools like Gulp, I've well run out of fingers and toes to count everything up on.

I have a bit of tool fatigue, and like Sara, I want to get as close as possible to working with the raw materials of the web (HTML, CSS, JavaScript) again. Ideally, this means fewer tools, dependencies, and points of failure.

As much as I want to be able to write all the HTML, CSS, and JS myself, there are plenty of other things I don't want to do by hand. In spite of the fatigue, I will always reach for _some kind of tool_ to get the job done, as long as I'm building for the web.

A good tool should also make publishing a _joyful_ experience. **If I had to limit myself to a single tool for building a website, what would I need?** Reflecting on what I know now from 25 years of trying to put stuff on the web, here's what I'm looking for in a web publishing tool<sup><a href="#fn2">2</a></sup> these days.

## Must-haves

**Web standards.** I am relying on this web publishing tool to create [standards-compliant](https://www.w3.org/standards/) HTML, CSS, and JavaScript. I want to support as wide an audience as possible, and this tool should allow me to meet the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/). I'm not going to waste my time with tools that hinder my ability to meet these standards.

**Documentation.** Learning a new tool is a time investment. I require clear, robust, and user-friendly written documentation. Video tutorials are nice, but I am not likely to refer to a video again and again. I need the user manual to do my best work.

**Themeability.** I'm a designer, and I want to customize the templates and CSS to my heart's content. I've built and customized themes for a number of systems and platforms over the years, and what I mostly want from a set of theme files are templates to be written in something resembling HTML, and access to the site's CSS<sup><a href="#fn3">3</a></sup>. Once again, good documentation is a requirement for me to do my best work developing themes.

**Extensibility.** As much as I want fewer dependencies or points of failure, I find myself wanting to be able to add functionality that may not come "out-of-the-box". This is where an ecosystem of plugins—or the ability to write your own plugin—comes in handy. And this can not exist without the aforementioned documentation.

**Taxonomy support.** Not every site may need a taxonomy, but the option should be available. Maybe this could go under "extensibility", but a system of categories and tags, or something more complex, is its own specialty beyond developing a plugin.

**Protocol<sup><a href="#fn4">4</a></sup> support.** If I'm a blogger or a podcaster, I need a RSS feed. I don't want to write that by hand again. If I want to support [Webmentions](https://indieweb.org/Webmention) on my site, I'd like that to be as easy as possible, too. ActivityPub is another example: my site is readable on the [Fediverse](https://nicksimson.com/fediverse/), and this is currently possible with a WordPress plugin. Not every site needs every possible protocol, so configuration options or a plugin architecture are probably ideal here.

## Nice-to-haves

**Bring your own editor.** Nobody has perfected the user interface for publishing to the web so far. Maybe chasing perfection is a dead end. Why not support the right editor for the individual or team? For example, WordPress still lets you install their [Classic Editor](https://wordpress.org/plugins/classic-editor/) as a plugin. Or one could install any number of page builders like [Elementor](https://wordpress.org/plugins/elementor/), [Beaver Builder](https://wordpress.org/plugins/beaver-builder-lite-version/), etc. Personally, I use the built-in block editor or "Gutenberg" on this site. It allows me to work quickly, but sometimes comes with its own friction. I also prefer any simple interface that supports [Markdown](https://www.markdownguide.org/), a lightweight language that outputs to HTML. I also want the ability to write raw HTML on a limited basis directly in the editor to "fine-tune" my content.

**A place for drafts.** I want a private place to store unpublished works-in-progress. In the past when I used a static site generator (SSG), this was a private GitHub repo. Nowadays I use a content management system (CMS) where drafts are behind a login.

**An interface for shortlinks and redirects.** Another thing I'd rather not write by hand. This is something I've gotten accustomed to with my current publishing system, using the [Hum](https://wordpress.org/plugins/hum/) (shortlinks) and [Redirection](https://wordpress.org/plugins/redirection/) plugins for WordPress.

**A mobile UI for editing.** I'm actually quite surprised how sparse the landscape is for editing content on the go in a mobile interface. WordPress has an official mobile app, but I never found it useful since it didn't support custom post types. In my experience, the block editor "Gutenberg" is _abysmal_ on small screens like phones. For sites using a SSG, I've had mixed success using the GitHub mobile app to edit content on the fly. One product that does this nicely, though, is [Micro.blog](https://micro.blog/). It uses a very simple interface that supports Markdown, and also supports some third-party apps.

**Git-based deployment.** Or some kind of system for backing things up. My site is currently not tied to [Git](https://git-scm.com/) in any way. [My hosting provider](https://getflywheel.com/) does nightly and on-demand backups for me, and has a [pretty good app](https://localwp.com/) for enabling local development on my computer. I love open-source, but it's kind of weird to have all my words and images in a public, forkable repo for someone else to build their website off from. In the age of generative AI, I'm a bit more protective/paranoid about my stuff, too. My ideal solution is one that keeps my content in some kind of private repo, while theme and configuration files are publicly available.

## Conclusion

I've avoided _the c word_ up to this point, but it is hard to write about tools without mentioning _craft_. I've been trying to put things on the web for nearly 25 years, first as a novice, then as a professional, but as a human being this entire time. I think I have another 25 years in me, too (hopefully).

As I've learned new tools, I've discarded old ones no longer needed. The goal has long been to learn the _materials_, and become a better craftsperson. I'm so glad I started learning the raw materials (HTML and CSS) first. I learn more every time I write in these languages.

As much as I have some fatigue with tooling, that small bit of dissatisfaction today motivates me to build better things and find a better way tomorrow. The materials, [CSS in particular](/posts/2024-the-most-powerful-design-tool-for-the-web.html), are becoming more powerful tools themselves. The fact we _might_ get the HTML partials imports [Sara is longing for](https://front-end.social/@SaraSoueidan/112769147677219641) (someday) gives me great hope for my future tool kit, too.

&nbsp;

_I wrote this entry for the [IndieWeb blogging carnival](https://indieweb.org/indieweb-carnival) on_ [Tools](https://jamesg.blog/2024/07/01/indieweb-carnival-tools/)_, hosted by_ [James](https://jamesg.blog/)_._

&nbsp;

<small>
<ol>
<li id="fn1">I’m sure there are others I left off from this list, but these are the major ones that come to mind.</li>

<li id="fn2">I’m using the term “web publishing tool” as a loose, all-encompassing term for things like content management systems (CMS), static site generators (SSG), or visual website-building apps like Webflow.</li>

<li id="fn3">I really miss the simplicity of WordPress’ original theme requirements: a <code>functions.php</code> file, an <code>index.php</code> file, and a <code>styles.css</code> file. WordPress now embraces <a href="https://fullsiteediting.com/">full-site editing</a>, but the more complex theming experience today <a href="https://dbushell.com/2024/05/07/modern-wordpress-themes-yikes/">does not spark joy</a>.</li>

<li id="fn4">Not sure if “protocol” is the exact term for all these things. I am not a computer scientist, nor do I play one on the internet.</li>
</ol>
</small>