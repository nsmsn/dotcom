---
title: "My ActivityPub settings"
date: "2024-01-26T02:46:36.000Z"
description: "A peek behind the curtain at my website’s ActivityPub settings. "
tags: 
  - "Fediverse"
  - "This site"
  - "WordPress"
---

<div class="heads-up">
<h2>👋 Hey there!</h2>
<p>The contents of this post refer to an older version of my site and therefore may be <strong>wildly</strong> out of date. I'm no longer using WordPress or ActivityPub on this site, for example. I'm keeping this up for posterity, but obviously some things have changed.</p>
</div>

_In reply to [BTW, how do you actually push your likes into ActivityPub plugin? Is it automatic, because I thought that was just a webmentions thing…](https://starrwulfe.xyz/notes/2024/01/reply-to-i-broke-activitypub/) by starrwulfe._

Happy to walk through my [ActivityPub plugin](https://wordpress.org/plugins/activitypub/) settings.

![](/img/post-images/ap-settings-01-1024x588.png)

On the Settings page, under **Profiles**, I have a blog profile enabled, with an ID of `@nick`. This has always been and will always be a single author blog, so I make sure my fediverse handle is personal.

![](/img/post-images/ap-settings-02-1024x947.png)

Under **Activities**, I use a custom structure for all my fediverse posts. I use the title of a post (my notes and likes all have titles, too), an excerpt, a shortlink (I use the [Hum plugin](https://wordpress.org/plugins/hum/) with the domain [nicks.im](https://nicks.im/)), and any WordPress tags are rendered as hashtags. The Activity Pub plugin helpfully converts multiple word tags into `#CamelCase` tags.

I only allow one media attachment (the first one) per fediverse version. I leave the **Activity-Object-Type** set to 'Note' since Mastodon seems to be the biggest fedi platform right now, and the other options just seem...unpredictable?

![](/img/post-images/ap-settings-03-1024x722.png)

I have multiple post types in WordPress, but I only federate Posts, Notes, and Likes. Notes and Likes are both post types from Jan Boddez's [IndieBlocks plugin](https://indieblocks.xyz/documentation/custom-post-types/). I'm also using hashtags in my content. So #WordPress will be linked to all my other posts tagged "WordPress".

Haven't had to modify anything in the Server or Blocklist settings yet.

That's it! Hope this is helpful.
