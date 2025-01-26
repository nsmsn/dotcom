---
title: "Short ramble on categories and tags"
date: "2024-01-20T14:37:14.000Z"
description: "My website is my worry stone, but its something a person with a library science degree might recoil in horror at."
tags: 
  - "This site"
  - "WordPress"
---

<div class="heads-up">
<h2>👋 Hey there!</h2>
<p>The contents of this post refer to an older version of my site and therefore may be <strong>wildly</strong> out of date. I'm keeping this up for posterity, but obviously some things have changed and links might be a little broken.</p>
</div>

I spent a little time cleaning up things on my website during the previous weekend. Little things you might not see unless I point them out in this post. _(I did share a demo of these changes at the [Homebrew Website Club Pacific meeting](https://events.indieweb.org/) earlier this week.)_

First, I added some little numbers to my [tags page](/tags/), indicating how many posts use each tag. I had a more condensed 4 column layout at desktop widths that is now a comfier 3 columns. I also added a tag cloud underneath the index...in case that's helpful to anyone. This page is just one of many ways to browse content on my site.

I also converted a bunch of categories (previously "topics") on my site to regular tags, flattening the taxonomy of my posts.

Have I lost you yet? Here's how I've always explained the difference between categories and tags. I always start with the [WordPress.com support page](https://wordpress.com/support/posts/categories-vs-tags/) on the two, to explain how their usage is intended:

> **Categories** are best used for **broad groupings** of topics. For example, if you’re creating a site that reviews pop culture, you might use categories such as _Books,_ _Film,_ and _TV_.
> 
> **Tags** are more **specific keywords** that you want to use to associate related content. For example, if you were creating a site that reviews pop culture, you might want to use tags such as _science fiction_, _horror_, and _action adventure_.

So with WordPress, **categories = broad topics**, and **tags = specific keywords**. These are WordPress' default _taxonomies_ (how similar things are grouped together). There is a much more [complex documentation on the WordPress.org website](https://developer.wordpress.org/themes/basics/categories-tags-custom-taxonomies/).

Remember that I didn't start out using WordPress, though. My previous Eleventy site allowed me to use "tags." [Here's an Internet Archive link](https://web.archive.org/web/20220930055600/https://nicksimson.com/tags/) so you can see how this looked and worked. I also used Micro.blog, which only gave you "categories". In the [screenshot of this post](https://nicksimson.com/notes/reason-1461/), you can see how liberally I used those. When I combined all my Eleventy _and_ Micro.blog posts in summer 2023, I...don't quite remember if everything imported as a either a category or tag, and I've been cleaning things up since then.

My website taxonomy became a weird, messy system of my own devising, and cleaning it up was pretty much up to my own whims. One example: the [Television tag](https://nicksimson.com/tags/television/) collects entries both about series and specials airing on TV, but also the [1970s post-punk band from New York City](https://en.wikipedia.org/wiki/Television_(band)).

My website is my [worry stone](https://ethanmarcotte.com/wrote/let-a-website-be-a-worry-stone/), but its something a person with a library science degree might recoil in horror at.

## Also, hashtags

Before I forget, my website is also [ActivityPub](https://www.w3.org/TR/activitypub/) enabled, and I used to have both my categories and tags configured to show up as [hashtags](https://en.wikipedia.org/wiki/Hashtag) in federated social media apps like [Mastodon](https://joinmastodon.org/).

<figure>

![screenshot of a social media post. This post includes a blog posts's title, excerpt, shortlink, and hashtag websites and hashtag IndieWeb.](/img/post-images/recent-post-elk-zone-1024x639.png)

<figcaption>

One of my recent blog posts, as it appears in the Mastodon web app [Elk](https://elk.zone/).

</figcaption>

</figure>

So although the categories and tags aren't visually differentiated as hashtags here, I like how the hashtags started a bit broader (category/topic) and get more specific (tags). That's kind of an interesting convention to follow if you are using multiple hashtags at the end of a social media post.

## Flattening my taxonomy

I kind of hated the old system of topics and tags, and wanted to simplify things more. What is the difference between a "topic" and a "tag", really? My hosting provider has an easy staging environment tool so I did everything in staging first, then pushed to production. I converted most topics to tags. I used the [WordPress category and tag converter](https://www.inmotionhosting.com/support/edu/wordpress/plugins/wp-converting-tags-categories-tool/) under Tools > Import in /wp-admin. I did have to do some manual cleanup for each post type later on.

My longer [posts](/posts) do require a category (this is a WordPress default I did not want to mess with), but my shorter [notes](https://nicksimson.com/notes/) and [likes](/likes/) do not. A fresh WordPress install comes with a default category of "Uncategorized". Initially I changed this to the category/topic "Personal". After converting that to a tag, I went with the generic "Words" for my default category (long blog posts only) and then "Places" as another category. [Places](/cat/places/) are geolocated entries (longer posts and shorter notes).

I removed "Topics" from my navigation and set up redirects. I also changed my ActivityPub settings to only show the tags as hashtags, not the category. Finally, I set up a few redirects before pushing to production.

So, in review: [Words](/cat/words/) are most long-form blog posts; [Places](/cat/places/) are any entry with a location (latitude and longitude) and populate the [Map](/map/); [Tags](/tags/) can be used on any post type, and it's fine as a practice to use multiple tags for a single post; Tags become hashtags in ActivityPub environments. I'm pretty happy with the setup now and don't expect I'll change it anytime soon.
