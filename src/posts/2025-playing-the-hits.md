---
title: "Playing the hits"
date: "2025-09-04T14:01:03.276-06:00"
description: "Mirroring a daily playlist to my website."
tags: 
  - "Music"
  - "This site"
---

[Crucial Tracks](https://crucialtracks.org/) is one of my new favorite things on the web. It is a good music blog with regular round-ups of new releases, interviews, and the other usual stuff you'd expect from a good music blog. It is also a [music journaling app](https://app.crucialtracks.org/learn-more) where you can share the _crucial_ tracks you care about, and see what other people are listening to. 

I signed up and started using the app on May 1 this year, and posted daily for the whole month. The progressive web app (PWA) looks and works great, by the way. I was music blogging from my phone while on vacation in NYC. After a few more weeks, I signed up to be a supporter for $40 a year. [Jason](https://endonend.org/) sent me a Fontaines D.C. record through the mail! You can [view my Crucial Tracks profile here](https://app.crucialtracks.org/profile/nsmsn).

So far I've posted 80 tracks (close to 6 hours of music) and I'm looking forward to hitting 100 soon. I connected to my <del>iTunes</del> Apple Music account, as well as Bluesky and Mastodon. It took me more than 75 posts to figure out how to get my tracks posting automatically to an Apple Music playlist. 

I discovered the experience of listening to this particular playlist is a bit disjointed&mdash;like playing my music library on shuffle. I also learned that Apple Music will in fact let you name a playlist ["Playlist"](https://music.apple.com/us/playlist/playlist/pl.u-06oxDB6uYbJmbj) and that is in fact what I named mine. I even uploaded artwork for my playlist:

<figure>
<img src="/img/static/playlist-art.jpg" width="480"  height="480" alt="Schroeder, Kirby, Count, Sonic, Bluey, Scooby-Doo, Spongebob, and Bart Simpson all wearing headphones" loading="lazy">
<figcaption>Cover art for <a href="https://music.apple.com/us/playlist/playlist/pl.u-06oxDB6uYbJmbj">Playlist on Apple Music</a>. Don't DMCA me, bro!</figcaption>
</figure>

With my daily-ish music posts going out automatically on Apple Music, Mastodon, and Bluesky now, I was thinking how great it would be to feature this playlist on my own site somehow. I came across [Joe/Artlung's Mixtapes page](https://artlung.com/mixtapes/) recently and was inspired. He has playlists dating back to 1984! So I now have a [new page named "Playlist"](/playlist.html) you can check out now. Keep reading to learn how it works.

The [IndieWeb movement has this helpful concept called PESOS](https://indieweb.org/PESOS), which is an acronym for **Publish Elsewhere, Syndicate (to your) Own Site**. The idea is if you are publishing to a third-party site (something besides a domain you control) you can use feeds or a web hook or other tech to publish a copy on your site. 

I'm not using Eleventy for this website, but two projects that caught my eye were [eleventy-import](https://github.com/11ty/eleventy-import), a utility for importing content from third-party sources to your website and [eleventy-activity-feed](https://github.com/11ty/eleventy-activity-feed), a way to aggregate content from disparate sources into one feed. [EchoFeed](https://echofeed.app) is also built to do handy stuff like this.

There's also an IndieWeb concept called [manual until it hurts](https://indieweb.org/manual_until_it_hurts):

> **manual until it hurts** is an IndieWeb development practice of resisting automating something until you have manually done it enough times to really understand it, and know that it is worth doing and automating.

That is what I'm doing right now. I inspected the HTML and JSON files for my Crucial Tracks account and found some good, useful stuff: album artwork, [song.link permalinks](https://odesli.co), links to Apple Music, permalinks on crucialtracks.org, etc.

I already have [Library](/library.html) and [Vinyl](/vinyl.html) pages set up that I keep updated by making edits to a JSON file, so I started a new <code>playlist.json</code> file in my <code>src/data</code> directory. I use the [Origami project](https://weborigami.org) to build my site, which allows me to structure templates and use data in a very open-ended way. Here is the relevant line of code in my <code>site.ori</code> (the file that powers my website):

<pre>
<code>
  playlist.html = templates/playlist.ori(data/playlist.json)
</code>
</pre>

This code is building a page at <code>playlist.html</code> using data from <code>playlist.json</code> inside a template file called <code>playlist.ori</code>. [Here's the whole template file](https://github.com/nsmsn/dotcom/blob/main/src/templates/playlist.ori) if you are interested in inspecting it. I decided to comment out the Apple Music link for now. I personally already pay for Apple Music for streaming, and it integrates with Crucial Tracks, but the song.link link is a bit more inclusive, for folks that prefer Spotify, Tidal, YouTube, Bandcamp, whatever. Also, the availability of each song varies by geography&mdash;the dream of a universal music player on the web is a dream unfulfilled.

The last little bit of fun I had was playing with the layout and adding a new utilty class that makes one grid item sticky on bigger screens:

<pre>
<code>
@media (min-width: 64em) {
	.sticky-desktop {
		position: sticky;
		top: 4px;
		align-self: start;
	}
}
</code>
</pre>

When you are using <code>position:sticky</code> with CSS grid, the <code>align-self: start</code> rule is very important. Both [Melanie Richards](https://melanie-richards.com/blog/css-grid-sticky/) and [Ahmad Shadeed](https://ishadeed.com/article/position-sticky-css-grid/) have helpful blog posts on this topic. Likewise, the <code>top</code> property needs a value set with units, unless that value is set to <code>0</code>. The sticky-column-on-desktop pattern is a thing I've been playing around a bit with lately, and I'm trying it on [my home page](/index.html) now too.  We'll see if it _sticks_.

I'm looking into ways of possibly automating the updates to this page via Crucial Tracks using something like a webhook or GitHub actions, but honestly I'm also OK with the manual process for now. It may seem weird to update a JSON file by hand, but I also think there's some longevity to doing it this way. I'm paying a bit of $$ each year to keep Crucial Tracks going (like I said earlier, I love it), but it might not be around forever. The Apple Music integration could also break. [Songlink/Odesli is only around as long as its parent company Linktree](https://www.prnewswire.com/news-releases/linktree-announces-acquisition-of-songlinkodesli-and-launches-music-link-feature-301358565.html), and all that may disappear too. But at the very least I have some useful, portable data I can use to rebuild my ongoing playlist in some form in the future.