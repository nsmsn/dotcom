---
title: "Version Six"
date: "2025-02-14T22:22:33Z"
description: "Welcome back to my website."
tags: 
  - "This site"
---

I've moved around a bit since 2008: Arizona to Tennessee to New Mexico, many apartments and houses in between. And I've done the same online, since purchasing a domain name in February 2008 to represent myself online. Maybe it's only appropriate that I re-launch this in February, 17 years later.

I don't have a ton to say about version 6 except its a continuation of what I started with version 3: Design in the open; Think in the open; Use open source.

My most recent move finds me back with [Netlify](https://www.netlify.com) hosting the site once again. This time around, I am building with [Web Origami](https://weborigami.org), a project that I can best describe as a programming language (Origami) and static site generator running in NodeJS. I had a lot of help from Origami's creator and maintainer, [Jan Miksovsky](https://jan.miksovsky.com). The first commit for version 6 goes back to early October of last year, so it's been coming for a while.

I am working on a more detailed post about converting a WordPress project to a Web Origami project. There were a lot of features and [plugins](/posts/2023-wp-plugin-inventory.html) I was using in my last version. The plugin ecosystem was a big enabler for me. But with this version I wanted to get back to content basics: words, and sometimes images. Just be aware I removed a bunch of things:

- Comments. Too much spam management (with WordPress at least). I may implement a simple "Reply by Email" feature. I'm also no longer bridging likes and reposts from social media.

- No longer sending or recieving webmentions, for now. (might be bringing this functionality back)

- No longer using a separate feed and post type for IndieWeb 'likes'. These are now notes, archived under the [Likes tag](/tags/likes.html).

- All the built-in automatic feeds for every category and tag. This seemed like a lot of overhead and I had no idea if anyone was subscribing exclusively to bookmarks, for example. Sorry if I broke your favorite feed.

- ActivityPub. Again, a lot of overhead. I'm not sure every one of my blog posts needs to have a social media presence, and RSS is much easier to set up and maintain.

- Automatic shortlinks. This feature was cool, but always felt like a nice-to-have. I'm still in the process of setting up redirects for most of the old ones.

- The [experimental map](https://web.archive.org/web/20240325124359/https://nicksimson.com/map/)...I'd still like to do something with geolocation so I did save latitude and longitude in the front matter for certain entries. There are a lot of cool projects and libraries to explore, and lots to learn here. I'll take my time with it. For now, you can still explore [Places](/tags/places.html) as a tag.

Since I started working on this thing in October, my priority was always getting the HTML right. I had some ideas of what I wanted the design to be and I cycled through a few different stylesheets and typographic scales, before arriving at what you see here. 4 has always been my lucky number, and somewhat inspired by the [8-point grid](https://spec.fm/specifics/8-pt-grid), almost every value on my website derives from 4 or 8 pixels. For example, on my [home page](/index.html) the logo in the header is rendered at 32px by 32px (with 8px of padding on each side to make a 48x48 tappable area); my profile picture in the footer is 64px by 64px; and the Victory hand sign picture is 128px by 128px. Don't treat this as design advice. Use the numbers and scale that makes sense for you. I may have gotten carried away, but these little things are making me happy right now. Goodness knows we need all the happiness we can muster these days.

Another page I'm proud of is my "[How this site works](/this-site.html)" page. It features my approach, technology and tools used, plus a nod to the five versions that came before this one. Websites are never finished, and what I hopefully have here today is a solid foundation for good things to come. I will be adding a little portfolio of projects I enjoyed working on. I will eventually add dark mode to the CSS file and fix up some of the print styles here, too. Most of all I look forward to writing more posts and notes. Bookmarking and collecting new things. [Gardening](https://maggieappleton.com/garden-history).

This post continues a tradition I started in 2014 of writing up a little about each major version of my site. If you are interested in reading my introductory posts from the past, here they are in reverse chronological order:

- September 2023: [Hello WordPress, my old friend.](/posts/2023-hello-wordpress.html) (v5)
- December 2020: [Ready for a Newww Year](/posts/2020-newww-year.html) (v4)
- November 2014: [Deploy](/posts/2014-deploy.html) (v3)