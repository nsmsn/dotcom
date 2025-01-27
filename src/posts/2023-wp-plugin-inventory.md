---
title: "Plugin Inventory, 2023"
date: "2023-11-15T22:00:00.000Z"
description: "All the plugins I’m running with WordPress (it’s a lot), and the functionality I get. "
tags: 
  - "IndieWeb"
  - "This site"
  - "WordPress"
---

<div class="heads-up">
<h2>👋 Hey there!</h2>
<p>The contents of this post refer to an older version of my site and therefore may be <strong>wildly</strong> out of date. I'm keeping this up for posterity, but obviously some things have changed.</p>
</div>

In [May 2022](/notes/2022-05-30-tech-tool-carousel.html) I wrote the following:

> It was important for me to understand what every line of code does on my website when I embarked on a personal site redesign. I switched my website from Jekyll to Eleventy a couple years ago. It was a nice upgrade and (most importantly) I didn’t have to relearn everything I knew about making a website.


I have been on WordPress since September, and it is a bit more of a complicated setup than my previous site. Despite using this software elsewhere for more than a decade, I don't know what every line of code does here.

I added a lot of functionality to this website after switching to WordPress. Most of that functionality is through [WordPress' plugin ecosystem](https://wordpress.org/plugins/), which is one small reason of why this CMS is so popular.

While I may not know what every line of code does now, I do know this: An important part of maintaining a WordPress site is understanding what every plugin does on your site, updating this software regularly, and only keeping the plugins installed that you actually use. No more, no less.

Consider this post (like all my posts) a snapshot in time. I don't think I'll revisit this post each year, but if I'm still running WordPress in say 2028, it might be interesting to see what I'm still using, or what new functionality comes along.

Here's what I'm currently running on this install:

## ActivityPub

[ActivityPub](https://wordpress.org/plugins/activitypub/) is a plugin maintained by Matthias Pfefferle & Automattic. It makes WordPress websites operable with ActivityPub supported networks like Mastodon and creates a Fediverse profile for my website. 

Here's this post for example, in [elk.zone](https://elk.zone):

![Plugin inventory, 2023. All the plugins I'm running with WordPress (it's a lot), and the functionality I get Posted by @nick@nicksimson.com](/img/post-images/elk-fediverse-748x1024.png)

It comes with a couple of WordPress blocks including this "follow me" block:

<img src="/img/post-images/2023-fediverse-follow-me.png" alt="nick@nicksimson.com Follow Me">

The other block is a dynamic block to show off the accounts that follow your website profile in the Fediverse. 

Right now I don't have a great way of linking to my site's Fediverse profile, but here's [how it looks on micro.blog](https://micro.blog/NickSimson.com).

## Advanced Editor Tools

[Advanced Editor Tools](https://wordpress.org/plugins/tinymce-advanced/) by Automattic adds a ton of additional rich text formatting tools in the paragraph block, and TinyMCE ("Classic" block) should I need them.

## Attachment Pages Redirect

WordPress creates an additional page called an attachment page for every image, PDF or media file you upload. I use [Attachment Pages Redirect](https://wordpress.org/plugins/attachment-pages-redirect/) by Samuel Aguilera to redirect these media attachment pages (annoying!) to my homepage instead.

## Create Block Theme

[Create Block Theme](https://wordpress.org/plugins/create-block-theme/) is a development plugin by WordPress.org that lets you easily customize an existing theme, develop a child theme, or otherwise create a block theme for the new-ish Gutenberg site editor. I could probably remove this plugin, but I'm always making tweaks to my website, and right now this is the best way to customize your typography on a WP theme, at least until the [Font Library feature comes out in version 6.5](https://wptavern.com/wordpress-6-4-font-library-feature-punted-to-6-5-release).

## Hum

[Hum](https://wordpress.org/plugins/hum/) by Will Norris automatically builds short links for every post or page on my site. I point the domain name nicks.im to my Flywheel site as a secondary domain, and now I have a personal link shortener. The shortlink for this post is [nicks.im/b/tZ](https://nicks.im/b/tZ), for example. I use this with the ActivityPub plugin to include a shortlink for each post on my Fediverse profile.

## Humans TXT

I maintain my [humans.txt](https://nicksimson.com/humans.txt) file from the WordPress editor thanks to the [Humans TXT](https://wordpress.org/plugins/humanstxt/) plugin by Till Krüss.

## IndieAuth

I use [IndieAuth](https://wordpress.org/plugins/indieauth/) by IndieWebCamp WordPress Outreach Club to sign in to other websites (like indieweb.org and indiebookclub.biz) with my domain name.

## IndieBlocks

[IndieBlocks](https://wordpress.org/plugins/indieblocks/) by Jan Boddez does a number of cool things to this site and was a catalyst for me switching over to WordPress. First, it adds microformats automatically to each post as well as the block theme. IndieBlocks features custom post types for likes and notes (and the option to hide titles on these), which I use on this site. It also comes with a handful of useful blocks in the post editor and site editor. I frequently use the [“Bookmark,” “Like,” “Reply,” and “Repost” blocks](https://indieblocks.xyz/documentation/the-bookmark-like-reply-and-repost-blocks/) in different posts and utilize the "Facepile" block in my templates for webmentions. Jan's documentation for the plugin is on [Github](https://github.com/janboddez/indieblocks) and [Indieblocks.xyz](https://indieblocks.xyz/).

## IndieWeb

[IndieWeb](https://wordpress.org/plugins/indieweb/) by IndieWebCamp WordPress Outreach Club is a plugin that recommends and helps install other great indieweb WordPress plugins and groups them together under a nice umbrella in your dashboard.

![IndieWeb in the WordPress Admin, featuring settings for Micropub,Webmention, IndieAuth and Syndication Links](/img/post-images/indieweb.png)

## Layout Grid

[Layout Grid](https://wordpress.org/plugins/layout-grid/) by Automattic gives you finer control over aligning elements to a mutt-column grid in the block editor. I'm using this extensively on my [Library page](https://nicksimson.com/library/).

## Location Weather

I'm displaying my current city's forecast on my [Now page](https://nicksimson.com/now/) with [Location Weather](https://wordpress.org/plugins/location-weather/) by ShapedPlugin. The weather widget is powered by the [OpenWeather API](https://openweathermap.org/). The other widgets on the /now page are a [LastFM recently played tracks app](https://github.com/JeffreyCA/lastfm-recently-played-readme) and a [Literal currently reading widget](https://literal.club/pages/widget) that are not proper WordPress plugins.

## Micropub

Thanks to [Micropub](https://wordpress.org/plugins/micropub/) by IndieWebCamp, I can use third-party [micropub](https://indieweb.org/Micropub) clients to draft and publish on my website with this feature.

## Multi-column Tag Map

I automatically display [all tags on an index page](https://nicksimson.com/tags/) with [Multi-column Tag Map](https://wordpress.org/plugins/multi-column-tag-map/) by Alan Jackson (no, [not that one](https://tenor.com/view/water-skiing-alan-jackson-chattahoochee-song-wakeboarding-wakesurfing-gif-20855913)).

## Post Type Switcher

Once in a while, I'll have to switch a new entry from a post to a note or like, or vice versa. [Post Type Switcher](https://wordpress.org/plugins/post-type-switcher/) by Triple J Software lets me do that with ease.

## Random Content

[Random Content](https://wordpress.org/plugins/random-content/) by Endo Creative powers the random footer text at the bottom of each page of my website.

## Redirection

Cool URIs don't change, but sometimes a redesign leaves you needing to create redirects. I am using the [Redirection](https://wordpress.org/plugins/redirection/) plugin by John Godley to manage my 301s.

## ShortPixel Image Optimizer

[ShortPixel Image Optimizer](https://wordpress.org/plugins/shortpixel-image-optimiser/) is the best plugin out there for optimizing your image files and for using next-gen formats like WebP.

## Simple CSS

The [WordPress Customizer](https://wordpress.org/documentation/article/customizer/) will probably be phased out into the newer Site Editor as more and more people switch to [Block Themes](https://wordpress.org/documentation/article/block-themes/). For a long time the Customizer featured a way to add custom CSS to your theme easily without having to create and maintain a custom theme. [Simple CSS](https://wordpress.org/plugins/simple-css/) by Tom Usborne is a great replacement for that feature because it gives you a nicer editor to write CSS in and your customized CSS won't disappear if/when you change themes. Similar to the old school [Art Direction plugin](https://github.com/davatron5000/Better-Art-Direction), you can write CSS rules that only apply to a single page or post, too.

## Syndication Links

I automatically syndicate new posts and notes to my Micro.blog, Bluesky and Mastodon accounts. [Syndication Links](https://wordpress.org/plugins/syndication-links/) by David Shanske links these copies from the canonical source.

## Travelers' Map

I'm using [Travelers' Map](https://wordpress.org/plugins/travelers-map/) by Camille Verrier to add location data to [select entries](/tags/places/) and add them as points to an [interactive map](/map.html).

## Two Factor

[Two Factor](https://wordpress.org/plugins/two-factor/) is a community built plugin that adds an extra layer of security to my WordPress login.

## Ultimate Markdown

[Ultimate Markdown](https://wordpress.org/plugins/ultimate-markdown/) allows me to write or import posts with the [Markdown syntax](https://www.markdownguide.org/) and convert them to rich text, including blocks in the block editor.

## Webmention

I use [Webmention](https://wordpress.org/plugins/webmention/) by Matthias Pfefferle to display [webmentions](https://www.w3.org/TR/webmention/) on my posts along with WordPress comments. Likes, boosts, and replies from Mastodon and Bluesky are also brought in as webmentions via [Brid.gy](https://brid.gy/).

## White Label CMS

[White Label CMS](https://wordpress.org/plugins/white-label-cms/) adds my logo to the WordPress login and /wp-admin/ screens.

## WP Accessibility

I'm already using an "accessibility-ready" theme, but [WP Accessibility](https://wordpress.org/plugins/wp-accessibility/) by Joe Dolson comes with a few additional features I find helpful.

<h2><strike>WP Dark Mode</strike></h2>

<strike>I use [WP Dark Mode](https://wppool.dev/wp-dark-mode/) to add a dark mode theme based on a user's preference. It also comes with a little light mode/dark mode toggle I placed in the lower right corner. Does the trick pretty well, but of course there's a premium upgrade. This plugin sends a lot of unwanted marketing notifications, though, so be warned. I may be on the lookout for a basic plugin without all the bells and whistles and nag screens.</strike>

## WP Robots TXT

[WP Robots TXT](https://wordpress.org/plugins/wp-robots-txt/) by George Pattihis adds a robots.txt file I can customize in my /wp-admin/ settings. In the age of [crawlers and content scrapers](https://adactio.com/journal/20515), this is sadly necessary.

## WP Toolbelt

[WP Toolbelt](https://wordpress.org/plugins/wp-toolbelt/) by Ben Gillbanks is a bit of an alternative to Jetpack: it adds a lot of optional features to a WordPress site. I'm using it for the following:

- wp-admin tweaks like bigger checkboxes, highlighting table rows on hover, etc.
- privacy-focused replacement for Gravatar
- removing unnecessay HTML from the site header
- lazy loading images
- removing IP addresses from comments
- spam blocking

&nbsp;