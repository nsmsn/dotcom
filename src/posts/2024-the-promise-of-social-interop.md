---
title: "The promise of social interoperability"
date: "2024-07-25T01:50:02.000Z"
description: "It is really refreshing to be able to read, post and interact with others on a single timeline. "
tags: 
  - "Social Media"
---

<div class="heads-up">
<h2>👋 Hey there!</h2>
<p>The contents of this post refer to an older version of my site and therefore may be kinda out of date. Also, some links may be broken.</p>
</div>

I learned about [**Openvibe**](https://openvibe.social/) from [something Andy Bell posted](https://bsky.app/profile/bell.bz/post/3kxwv4kjbev2g) the other day. Openvibe promises to combine your decentralized social media accounts (Mastodon, Bluesky, Nostr, and pretty soon Threads plus others) into one timeline.

[Interoperability](https://en.wikipedia.org/wiki/Interoperability) between social networks? Sign me up. So, I thought I would download the app to give it a try.

First of all, I don't have a [Nostr](https://nostr.com/) account, so I can't speak to that user experience. I was able to sign in with my personal Mastodon and Bluesky accounts, though.

Logging in to Bluesky on the app was a bit of a hurdle for me since I use a custom domain as my username, but my actual account is on the main `bsky.app` (or is it `bsky.social`?) host. I think I finally figured it out by using my email to sign in.

I think the UI is _almost_ there on Openvibe. Search and Notifications work great. I do wish they integrated the Mastodon "bookmark" feature within the timeline; here its completely hidden. I bookmark as much as I like or re-post. I'm also kind of wishing they went with the system UI font instead of... is this [Nunito](https://fonts.google.com/specimen/Nunito)?

It's still funny to me see threads.net accounts showing up under a Mastodon heading (Follow Suggestions). Maybe this will all get ironed out once Threads is integrated into the app. But I think this could become my go-to app for reading and posting to both Bluesky and Mastodon, and I'm glad this exists.

**The Openvibe verdict:** It is really refreshing to be able to read, post and interact with others on a single timeline.

Then, I realized I _might_ already be able to do this with [**Micro.blog**](https://micro.blog/). So I did a few quick tests during lunch and after work:

- Test #1: [test post from social.lol](https://social.lol/@nsmsn/112842476726727818)

- Test #2: [test post from bsky.app](https://bsky.app/profile/nicksimson.com/post/3ky264cxhn62z)

- Test #3: test post from Openvibe ([Mastodon copy](https://social.lol/@nsmsn/112842482519453848)) ([Bluesky copy](https://bsky.app/profile/nicksimson.com/post/3ky265zsqls2t))

- Test #4: [test reply from Openvibe to social.lol post](https://social.lol/@nsmsn/112842486175919141)

- Test #5: [test reply from Openvibe to bsky.app post](https://bsky.app/profile/nicksimson.com/post/3ky26aveamh2d)

- Test #6: [test reply from micro.blog to bsky.app post](https://micro.blog/nsmsn/42166312)

- Test #7: [test reply from micro.blog to Openvibe post Bluesky copy](https://micro.blog/nsmsn/42177967)

- Test #6: test reply from micro.blog to social.lol post (failed, could not locate original post in the Micro.blog timeline)

- Test #9: test reply from micro.blog to Openvibe post Mastodon copy (failed, could not locate original post in the Micro.blog timeline)

- Test #10: [test reply from this ActivityPub enabled website to social.lol](https://nicksimson.com/notes/e7eba82921/)

I threw in that last one for fun, since I never tried seeing if my AP-enabled website could interact with the Mastodon timeline before. I always forget how [AP-enabled WordPress sites](https://wordpress.org/plugins/activitypub/) work, and what the limitations are.

So here's the difference between Openvibe and Micro.blog:

Openvibe is a way to integrate a few different decentralized silos and interact within those different silos, all while staying inside the same UI.

Micro.blog is an application that supports several [IndieWeb protocols](https://micro.blog/about/indieweb) as well as newer social protocols like [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub), [AT Proto](https://atproto.com/guides/overview) and [Nostr](https://en.wikipedia.org/wiki/Nostr). Micro.blog is a great cross-posting app (I am using it to sync my WordPress blog to the MB timeline but also cross-post statuses from a different RSS feed to a Bluesky account), as well as a fun and wholesome social network unto itself. I enjoy reading and interacting with people organically in the MB app. But since I'm not using it to host my blog _or_ my Fediverse (ugh, how I hate that word) profile, I don't know if I can fully use all the [cross-platform mentioning](https://help.micro.blog/t/bluesky-cross-posting-and-mentions/1702/2) features.

To be clear, I don't fully understand Micro.blog's integration with Bluesky. One day I discovered that my ActivityPub-enabled [website's profile](https://micro.blog/nicksimson.com) had changed and was starting to include posts from Bluesky as well as from my blog. I can also find Bluesky accounts through the [Discover](https://micro.blog/discover#) feature. I'm following the [Washington Post](https://micro.blog/washingtonpost.com) on Micro.blog now!

If that isn't enough, there are other projects promising interoperability. Ryan Barrett maintains [**Bridgy Fed**](https://fed.brid.gy/docs), a "decentralized social network bridge" connecting the Fediverse, the web, and Bluesky:

> If you're on one of these networks, you can use Bridgy Fed to follow people on other networks, see their posts, and reply and like and repost them. Likewise, they'll be able to see you and your posts too.

Maybe that's more of the kind of interoperability I am looking for. I'm already using [Bridgy](https://brid.gy/) on this site to enable commenting from Bluesky and Mastodon. What if I didn't need [all these accounts](/links.html)? _What if I could just do this from my website?_

The web already works pretty well at allowing interactions between different entities—it's most powerful feature is the hyperlink. And more recently, think of the phrase, "wherever you find your podcasts." The reason you can use whatever podcast player you want to listen to most of your shows is because nearly every podcast feed uses the same [RSS standard](https://en.wikipedia.org/wiki/RSS).

I have pals on Bluesky, Mastodon, and Micro.blog, but very few that are on all three. Some of my friends are still on Twit-er, I mean X, and some are only on LinkedIn. Most of these folks don't care what _protocols_ these platforms are built on. They're there for the people, quality interactions, the jokes, shitposts, and the pics.

I'm glad we're getting closer to the promise of interoperability in the middle of this particular decade of the social media era. I'm tired of walled gardens. Lastly, if you happen to be someone building these kind of tools, please use standards, document your own stuff, and focus on delivering a great user experience.
