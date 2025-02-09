---
title: "I broke ActivityPub on my site."
date: "2024-01-25T17:49:04.000Z"
description: "I don’t know how all this is supposed to work, but I got some help from my host and the plugin support forum. Hopefully things are working again now. "
tags: 
  - "Fediverse"
  - "This site"
  - "WordPress"
---

<div class="heads-up">
<h2>👋 Hey there!</h2>
<p>The contents of this post refer to an older version of my site and therefore may be <strong>wildly</strong> out of date. I'm no longer using WordPress or ActivityPub on this site, for example. I'm keeping this up for posterity, but obviously some things have changed.</p>
</div>

**TL;DR**: This post gets a little technical, and most of this stuff is way over my head in the first place. I got a lot of help from [my host](https://getflywheel/) and the [plugin support forum](https://wordpress.org/support/topic/new-posts-are-not-federating/). Hopefully things are working again now.

About a week ago, I noticed that my posts from my website stopped showing up on my fediverse profile **`@nick@nicksimson.com`**. This account is powered by the incredible [ActivityPub plugin](https://wordpress.org/plugins/activitypub/) developed by [Matthias Pfefferle](https://profiles.wordpress.org/pfefferle/). (I also syndicate most posts and notes automatically to [a Mastodon account](https://mastodon.design/@nsmsn) via [Micro.blog](https://micro.blog/about), and this service was running as expected. Two different accounts, slightly different purposes and plumbing.)

Here's what happened: when I [updated a bunch of categories to tags last week](/posts/2024-short-ramble-on-categories-and-tags.html), I inadvertently created a huge amount of cron events and I think it overwhelmed my website. I found this out through a support ticket with my hosting provider:

> There are at least `3,500` cron jobs tied to the site, with the vast majority stemming from ActivityPub, such as (in the format of `cron event name: approx number of cron events`):
> 
> `activitypub_delete_actor_interactions`: `~1,900` 
> 
> `activitypub_send_update_activity`: `~580`
> 
> `activitypub_send_activity`: `~580`
> 
> `indieblocks_preview_card`: `~120`

I installed the [WP Crontrol plugin](https://wordpress.org/plugins/wp-crontrol/) at the suggestion of a support technician and I could see all the events that missed their schedule in this dashboard. With the ActivityPub plugin, each time you update a post, you trigger a `activitypub_send_activity` or `activitypub_send_update_activity` cron event. Since I made these category/tag conversions in staging and pushed live, I created several hundred cron events at once which [WP Cron](https://getflywheel.com/wordpress-support/what-is-a-cron-job-and-how-do-they-work-at-flywheel/) could not execute.

My support technician executed a bunch using the [WP-CLI](https://developer.wordpress.org/cli/commands/):

```
wp cron event run --due-now

Success: Executed a total of 3518 cron events.
```

This still left about 380 cron events which [missed their schedule](https://github.com/johnbillion/wp-crontrol/wiki/Cron-events-that-have-missed-their-schedule). Most of these were `activitypub_send_activity` or `activitypub_send_update_activity` events for posts older than October 31, 2023 (the day I successfully got ActivityPub running on this site). I did not need these events tied to older posts to run, since the earliest post on my **`@nick@nicksimson.com`** fediverse profile was from Oct. 31, so these older events would not show up in Mastodon (or other fediverse environments) anyway.

The `activitypub_delete_actor_interactions` events are kind of interesting. When I looked at the details for each one it looks like these were tied to Mastodon and other fediverse accounts that were deleted. I don't think any of these accounts ever followed or interacted with my WordPress site's fedi profile. What I _think_ happens is when a fedi account is permanently deleted, this action erases all activity that would have happened on your WordPress site's account as a safeguard. This particular cron event pops up in the plugin repo's [GitHub issues](https://github.com/Automattic/wordpress-activitypub/issues/592) and WP.org [support forum](https://wordpress.org/support/topic/new-posts-are-not-federating/#post-17364299).

The WP Crontrol plugin is helpful in that it showed me the details of each one of these cron events that missed their schedule. Some of these I was able to run manually from the dashboard, but I still had trouble deleting the unnecessary ones. When I tried to delete one or more in the dashboard I got this message: '`The cron event list could not be saved`'. Finally, I got some help from a support technician who was able to remove these via SSH with WP-CLI.

I since published a couple '[likes](/likes/)' on my site and these successfully went through and appear now on my **`@nick@nicksimson.com`** profile. Hopefully this post comes across too. 🤞
