---
title: "My current Webmention setup"
date: "2024-07-18T15:25:07.000Z"
description: "I thought it may be helpful to share my configuration settings and demonstrate how I’m using both the Webmention plugin and IndieBlocks on the same site."
tags: 
  - "IndieWeb"
  - "This site"
  - "WordPress"
---

<div class="heads-up">
<h2>👋 Hey there!</h2>
<p>The contents of this post refer to an older version of my site and therefore may be <strong>wildly</strong> out of date. I'm keeping this post up for posterity, but some things may have changed in these WordPress settings.</p>
</div>

In [IndieWeb chat today](https://chat.indieweb.org/dev/2024-07-18#bottom), somebody was asking about this sentence in the [IndieBlocks](https://wordpress.org/plugins/indieblocks/) plugin description on WordPress.org:

> IndieBlocks comes with its own Webmention implementation, but a separate plugin can be used, too.

I will let [Jan Boddez](https://jan.boddez.net/) respond on his own time (if he desires), but I thought it may be helpful to share my configuration settings and demonstrate how I'm using both the [Webmention plugin](https://wordpress.org/plugins/webmention/) and IndieBlocks on the same site.

## WTF is a webmention?

[Webmention](https://indieweb.org/Webmention) is an open web standard (and [W3C Recommendation](https://www.w3.org/TR/webmention/)) "for conversations and interactions across the web". Simply, a webmention notifies any URL when you link to it from your own site.

You can enable and implement Webmention on your site in a number of ways to enable things like comments, replies, discussion, and reactions (the basic reactions are "likes", reposts, and bookmarks). I am going to use the term _webmention_ or plural _webmentions_ in this post to differentiate from WordPress' own native commenting feature.

## Webmention settings

![WordPress admin configuration screen for Webmention settings](/img/post-images/Webmention-‹-Nick-Simson-—-WordPress-989x1024.png)

Under IndieWeb > Webmention in the WordPress dashboard (`/wp-admin/admin.php?page=webmention`) you'll find the Webmention settings page. Here's how I've configured things:

### Sender

All Self-ping settings are checked (meaning disabled). I've disabled self-pings on the same URL and same domain. I also disabled sending Webmentions for media links<sup><a href="#fn1">1</a></sup> (image, video, audio).

### Receiver

I only have Webmention enabled for the following:

- Posts
- Notes
- Likes

I don't have homepage mentions enabled. Not sure where these should or would go, since my homepage is a feed of individual posts.

I'm automatically approving webmentions from certain domains like `indieweb.org`, `brid.gy`, `micro.blog`, and some trusted pals.

I have **comment settings** checked, to show a webmention form in my comments section. I am showing **avatars** on Webmentions if available.

Under **Display**, I am not separating Webmention Types from Comments. For "[facepiles](https://indieweb.org/facepile)," I am showing everybody.

## IndieBlocks settings

![WordPress admin settings screen for IndieBlocks Webmention](/img/post-images/Screenshot-2024-07-18-at-9.39.36-AM-1024x589.png)

I'm only going to focus on the **Webmention** screen, found under Settings > IndieBlocks > Webmention (`/wp-admin/options-general.php?page=indieblocks&tab=webmention`).

**Enable Webmention** is unchecked, since I'm using the Webmention plugin. There is this helpful note:

> (Experimental) Automatically notify pages you’ve linked to, and allow other websites to do the same. You’ll probably want to leave this disabled if you’re already using a different Webmention plugin.

I have my Post, Note, and Like **Post Types** checked again here. Not sure if this inherits the settings from the other plugin or not? 🤷🏻

**Webmention Delay** is set to 300 seconds. I think this is the default.

**"Reverse proxy" avatars** is checked. This setting serves remote avatars from my domain. **Proxy Secret** is filled in, but it's a Secret (shhhh) so I temporarily removed it for the screenshot.

**Cache webmention avatars** is checked. This is an experimental setting that attempts to locally cache webmention avatars.

**Facepile**: The first setting is checked (experimental, again), to "facepile" bookmarks, likes, and reposts. I have the **Auto-insert Facepile block** option disabled, since I have the facepile block inserted in my templates already in the Site Editor.

## Discussion (comments) settings

![Discussion settings screen in WordPress admin.](/img/post-images/Discussion-Settings-‹-Nick-Simson-—-WordPress-724x1024.png)

To have webmentions working on my site, I am pretty sure I need to have comments enabled, at least with the Webmention plugin. This screen is under Settings > Discussion (`/wp-admin/options-discussion.php`). All my webmentions themselves appear on the comments screen (`wp-admin/edit-comments.php`).

Most of the settings are default ones, but here's what's important:

- Attempt to notify any blogs linked to from the post: Checked.

- Allow link notifications from other blogs (pingbacks and trackbacks) on new posts: Checked.

- Allow people to submit comments on new posts: Checked.

- **Other comment settings** apply to WordPress "native" comments I believe. I'm not sure where these overlap with webmention. I am automatically closing comments on content older than a year old, mostly as a spam protection<sup><a href="#fn2">2</a></sup>.

- I am displaying **Avatars** and keeping them G rated, although I only think these settings apply to [Gravatar](https://en.wikipedia.org/wiki/Gravatar) avatars?🤷🏻

## Bringing it all back home

If you are using the block editor (Gutenberg) and/or full-site editing, [IndieBlocks](https://indieblocks.xyz/) is a great plugin to use if you want to IndieWeb-ify your WordPress site. You can use its [Webmention functionality](https://indieblocks.xyz/documentation/webmention/) to replace or augment other webmention implementations, such as the [Webmention plugin](https://wordpress.org/plugins/webmention/) maintained by [Matthias](https://pfefferle.dev/) and [David](https://david.shanske.com/).

<mark>There's probably stuff I got wrong in this post.</mark> If you have comments or questions, please leave a reply below (preferably by webmention 😁).

&nbsp;

<small>
<ol>
<li id="fn1">My other settings for media are to redirect WordPress’ built-in media attachment pages to the media file itself.</li>

<li id="fn2">I have received very little spam from webmentions so far, but some of my older posts get a lot of weird spam comments. I am using <a href="https://wordpress.org/plugins/wp-toolbelt/">WP Toolbelt</a> for spam protection, by the way.</li>
</ol>
</small>