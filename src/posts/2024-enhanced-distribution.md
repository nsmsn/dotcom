---
title: "“Enhanced Distribution”"
date: "2024-03-10T03:41:37.000Z"
description: "This whole ordeal has me rethinking Jetpack and Automattic. "
tags: 
  - "Privacy"
  - "WordPress"
---

I'm doing some weekend maintenance on [Eleanor's portfolio](https://eleanoraldrich.com/), a WordPress site we've been running since 2013. Eleanor keeps the content and images updated and I'm responsible for plugins, new features, navigation, and keeping the little copyright notice up-to-date.

With [404 Media educating us all about the phrase "WordPress Firehose"](https://www.404media.co/wordpress-firehose-allows-ai-companies-to-buy-access-to-a-million-posts-a-day/) last week, I wanted to make sure we were doing all we could to keep OpenAI and Midjourney from using her images to train AI to make art generative images. I had installed the Jetpack plugin, an "Automattic Airline" eons ago, and this is the area I was a bit worried about. [Greg Pak wrote and updated a post](https://gregpak.net/2024/03/03/the-wordpress-jetpack-tumblr-automattic-a-i-feed-and-firehose-debacle-and-how-ive-tried-to-opt-out-as-best-as-i-think-i-can-at-this-point/) about the steps he took, including updating the robots.txt file and disabling modules in the Jetpack settings.

If you're self-hosting WordPress and using the Jetpack plugin, you have to go to a somewhat hidden "Modules" panel. It's linked in the footer of the Jetpack Dashboard, which you can navigate to from `WP Admin > Jetpack > Dashboard`. Scroll to the bottom, and click on `Modules` in the footer navigation:

![Jetpack Footer Navigation: About, Privacy, Terms, Version 13.2, Modules, Debug](/img/post-images/Screenshot-2024-03-09-at-9.46.59-PM.png)

Or, copy and paste this to the end of your site's address: `/wp-admin/admin.php?page=jetpack_modules`

On the Modules page, there are a couple dozen things you can turn on and off. The WordPress.com firehose setting is inside the [Enhanced Distribution module](https://jetpack.com/support/privacy/enhanced-distribution/). This was already turned off on Eleanor's site, and this feature, plus the firehose itself is slated to be [deprecated and wound down](https://developer.wordpress.com/docs/firehose/).

For good measure I also have the [Blaze module](https://jetpack.com/support/blaze/) and the [JSON API](https://jetpack.com/support/json-api/) deactivated now too. Eleanor also runs a [WordPress.com-hosted site](https://aldrichweissberger.wordpress.com/) with Barbara, another visual artist. We made sure that site is opted-out of AI data sharing, and maybe down the road that should be hosted somewhere else too. This whole ordeal has me rethinking Jetpack and Automattic. Most of the Jetpack functionality we're currently using can be replicated with other plugins.

As [Mike stated earlier this week](https://crashthearcade.com/2024/03/05/slowing-my-roll/), "Automattic _isn’t_ WordPress. Automattic doesn’t _own_ WordPress. We, _the users_, own WordPress." Automattic certainly has a heavy thumb on the scale when it comes to WordPress governance and [product decisions](https://ma.tt/2017/08/we-called-it-gutenberg-for-a-reason/).[1](#53d7f325-187d-4f2f-97ad-a05841dd2ace) I think its imperative for users to push back against the kinds of stuff that's not serving us and _our users_ in turn. Healthy debate and independent voices will serve the project and the WordPress brand in the long term. We're not ready to ditch WordPress just yet.
