---
title: "Hello WordPress, my old friend."
date: "2023-09-24T21:19:48.000Z"
description: "Proudly powered by WordPress."
tags: 
  - "IndieWeb"
  - "This site"
  - "WordPress"
---

<div class="heads-up">
<h2>👋 Hey there!</h2>
<p>The contents of this post refer to an older version of my site and therefore may be <strong>wildly</strong> out of date. I'm keeping this post up for posterity, but some links might be broken and obviously some things have changed.</p>
</div>

With the latest version of my site, and this latest post, I'm announcing that I am now running on WordPress.

The last version of my site was built with [Eleventy](https://11ty.dev/), a tool I still love, and will be using plenty of in the future. [My goals for my site](/posts/2023-newwwyear-itches.html) just were not aligning with my current technical limitations. As much as I love to tinker, I'd like to spend more time writing and designing than figuring out how to implement Webmentions on Netlify, for example. And since this site is mainly a blog these days, why not run it on the [most popluar blogging engine around](https://kinsta.com/blog/wordpress-statistics/)?

I first downloaded WordPress in fall 2007, which was version 2.3 (Dexter Gordon) or 2.3.1. I began using WordPress as a _professional_ around version 3.3 and I have followed the software through its many iterations ever since. I never tried running my own site on WordPress before this year, but came close a number of times.

## How I Built This

This time around, I started out by spinning up a fresh, blank WordPress install with [Local](https://localwp.com/). I then exported my Micro.blog posts into a WordPress compatible file. I imported these and used the [Post Type Switcher plugin](https://wordpress.org/plugins/post-type-switcher/) to convert these posts into shorter Notes and Likes post types, courtesy of Jan Boddez's [IndieBlocks plugin](https://indieblocks.xyz/). Then I began uploading the markdown files from my personal site using the [Ultimate Markdown plugin](https://wordpress.org/plugins/ultimate-markdown/). With a ton of content in the site, it was time to think about a custom theme, or at least a _customized_ theme.

I got frustrated with the Site Editor back when it was an experimental feature, but like the block editor for posts and pages, it has come a long way since. Carolina Nymark's [FullsiteEditing.com](https://fullsiteediting.com/) is an invaluable resource for learning your way around this new approach to templating and theming. I tried out every flavor of the [theme generator](https://fullsiteediting.com/block-theme-generator/), but found what I really wanted/needed in Nymark's [Jace](https://wordpress.org/themes/jace/)—a gorgeous theme built to be accessible-ready and ready to show off the site editor too. I customized this further with the [Create Block Theme plugin](https://github.com/WordPress/create-block-theme), which has the best tools for local fonts I've seen in a long time. I'm using [Hanken Grotesk](https://hanken.co/products/hk-grotesk) for most text, and [Bricolage](https://ateliertriay.github.io/bricolage/) for the headings.

I didn't run into too many snags until I moved my site from Local to a production server, and discovered a weird bug with WordPress 6.3's `_transient_wp_core_block_css_files` feature. This bug screwed up the layout I spent hours lovingly obsessing over, and is [documented on the Local site](https://community.localwp.com/t/importing-a-wp-6-3-exported-site-with-block-theme-results-in-css-problems-with-solution/38552?u=nick-b), and in [WordPress core itself](https://core.trac.wordpress.org/ticket/59111). Keeping an eye on this, and hopefully its fixed in future 6.3 releases.

## New and Upcoming Features

Thanks to WordPress and IndieBlocks, I have multiple RSS feeds you can subscribe to. You can subscribe to a separate feed for each post type:

- [Longer Posts (RSS)](https://nicksimson.com/posts/feed/)
- [Notes (RSS)](https://nicksimson.com/notes/feed/)
- [Likes (RSS)](https://nicksimson.com/likes/feed/)

Or, you can subscribe to the [main RSS feed](https://nicksimson.com/feed/) which gives you all of the above, in reverse chronological order.

I'm also adding support for [IndieWeb](https://indieweb.org/) building blocks. In addition to [microformats](https://microformats.org), my website is running the [IndieAuth plugin](https://wordpress.org/plugins/indieauth/) (web sign-in), and I'm currently trying to see if I have [Webmentions](https://wordpress.org/plugins/webmention/) configured correctly.

I'm still getting used to this setup, and not sure if I have everything 100% to my liking yet, but feel free to have a look around. In addition to my [posts](https://nicksimson.com/posts/), [notes](/notes/), and [likes](/likes/), I have a handy [index page](https://nicksimson.com/all/) to other sections of my site.
