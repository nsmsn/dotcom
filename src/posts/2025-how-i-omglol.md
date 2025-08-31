---
title: "How I omg.lol"
date: "2025-08-31T13:05:34.626-06:00"
description: "A year+ with a really fun web service."
tags: 
  - "Websites"
---

<img src="/img/post-images/2025-omglol-1year.png" alt="@nsmsn you've had this address for 1 year." width="600" height="168" loading="lazy">

This summer, I came up on a milestone: one year since purchasing an [omg.lol](https://omg.lol) address. I thought it might be fun and helpful to write up how I'm using _almost_ all the fun features of this web service/platform/thingy, but I want to get two important things out of the way:

September is a great time to sign up, since their [annual fundraiser for St. Jude](https://omglol.news/st-jude-2025) is underway. The fundraiser coincides with Childhood Cancer Awarenes Month. Between now and September 30, 50% of every dollar omg.lol earns will be donated to [St. Jude Children's Research Hospital](https://www.stjude.org/).

It is also important to know that **this is not for everybody**. The use of omg.lol services to spread hate and negativity is not tolerated and the owner/operator is not shy about removing users for breaking the [code of conduct](https://home.omg.lol/info/code-of-conduct) or [terms of service](https://home.omg.lol/info/legal) agreements. You can also read the [About our Community page](https://home.omg.lol/info/community) to get a feel for what the community values, priortizes, and prctices. Adam's also created the [People Pledge](https://people.pledge.party/), which is linked in the footer. So as long as you are not acting in a pro-fascist, anti-trans, racist, ableist, ageist, etc. manner, you should be good to go!

## Becoming aware of omg.lol

I'm pretty sure the first omg.lol user I was aware of was [maique](https://maique.omg.lol/), who I knew from Micro.blog. I visited the landing page, but didn't understand right way if it was something I actually needed: I already had a web address. I already had email. I wasn't sure if any of the the other technical things were anything I needed at the time. 

I became more curious after reading [Blake Watson's review in late 2023](https://blakewatson.com/journal/omg-lol-an-oasis-on-the-internet/), in which he descirbes it as an "oasis on the internet." Social proof goes a long way. Blake has a lot of experience building cool digital products, like [A Fine Start](https://afinestart.me/) and [HTML for People](https://htmlforpeople.com/).

After stumbling across the [profile directory](https://home.omg.lol/directory), and seeing a few more familiar faces and a bunch of cool new people, I decided to pay the $20 and jumped in on or around July 15, 2024. My profile page can be viewed at [nsmsn.omg.lol](https://nsmsn.omg.lol/).

## Feature break-down

<img src="/img/post-images/2025-omglol-weblog.png" alt="a split screen showing a web page in the markdown language on one side and a live web page on the other" width="960" height="636" loading="lazy">

I think of the **Web Page** and **Email** as the two main features of omg.lol. When you create a username, this is what you are paying for and how you are identified on the service. The web page page editor shows a markdown file in one column, and a live preview in another. You can control what your page looks like with a theme, footer branding, and custom CSS. There are also page <code>title</code> and <code>description</code> metadata overrides as well as a field to add additional content to the HTML <code>head</code> elelment of the page. You upload your profile picture and can evencustomize a favicon here as well. Your profile page also sets up a mirroring Tildeverse page: [Here's mine](https://omg.lol/~nsmsn).

**Email** is a bit more straightforward. I set up my main personal email as the the forwarding address for <code>nsmsn@omg.lol</code>. There is also 'Recent email activity' that allows you to see what has been recieved by your omg.lol email. There's a Fastmail integration/partnership, which I am currently not using.

The next thing mentioned on the omg.lol home page is **DNS**. I am not currently using this feature, but you can [read all about DNS in the official documentation](https://home.omg.lol/info/dns). 

**Mastodon** was a huge selling feature for me. I had already migrated from the big default mastodon.social instance to a smaller instance in Europe that felt more on-brand at the time for me. Upon discovering social.lol and its cozy local timeline, it felt like a better long-term, sustainable home for my Mastodon posts. 

The **Pastebin** feature is another one I'm not using right now, but there's a helpful [documentation page about it](https://home.omg.lol/info/pastebin).

**PURLs**. Here's a fun one. A PURL is a URL that doesn't change. I'm using this in combination with the **Switchboard** feature, using a custom URL for a bit.ly style link shortener/redirection service. I only have a few PURLs right now:

- [nsmsn.co/www](https://nsmsn.co/www) redirects to my home page.
- [nsmsn.co/books](https://nsmsn.co/books) redirects to my Bookshop.org store.
- [nsmsn.co/how-i-use-ai-to-write-code](https://nsmsn.co/how-i-use-ai-to-write-code) is for trolling.

I am not using **Pics** right now, but this is a (public) photo hosting service in beta, which I suppose you could use as a CDN for images for your blog posts, or as a small web Instagram replacement. You can upload an image up to 8MB here. Everything is shared to the [some.pics](https://some.pics/) website.

The **Statuslog** is something I really enjoy using. A status is just a short update accompanied by an emoji. The status.lol website uses the [Fluent emoji](https://github.com/microsoft/fluentui-emoji) library. There's a little JS embed snippet I use to automatically show my latest status on my omg.lol profile page, as well as my [/now page](/now.html). [Here's all my statuses](https://status.lol/nsmsn). Since I have a social.lol account, I can also cross-post these automatically to Mastodon. I'm also trying out Robb Knight's [EchoFeed app](https://echofeed.app/) to syndicate my status updates to my Bluesky account, where they are generally ignored.

That exhausts the features listed right under the home page hero. There's a lot more!

**Weblog** is a blogging service that comes withyour omg.lol account. My main blog is here at nicksimson.com, but I thought I'd kick the tires on this a bit. I created [Nickipedia](https://nsmsn.weblog.lol/), which is an ongoing log of interesting Wikipedia articles I have looked up. Weblog.lol is a very simple markdown based blogging tool, but it gets the job done. Adam is currently building out [Neato](https://www.neato.pub/), a more fully featured web publishing service.

I am not using omg.lol's **/now page** since I have one on my domain that predates my omg.lol account. But [the way omg.lol does it](https://home.omg.lol/info/now) is quite interesting: it works very simialr to the profile page feature, and integrates with the weblog as well. You can set a periodic reminder to update your /now page. There's also a [/now Garden](https://now.garden/) that updates as users tend to their /now pages.

**Charms** are not available yet (but [coming soon](https://charms.lol/)).

**Proofs** is a feature (in beta) that proves you own or control a digital asset, like a website or social media account. I created a [proof of this website](https://proven.lol/e171ef) through DNS. You can also store and share a [**public key**](https://home.omg.lol/info/keys) with omg.lol, although I am not doing that yet.

**Switchboard** is a cool way to manage various domains and addresses. I am using a custom domain ([nsmsn.co](https://nsmsn.co/)) for my omg.lol profile and use the switchboard to redirect [nsmsn.omg.lol/now](https://nsmsn.omg.lol/now) to my pre-existing /now page.

[**Live chat**](https://home.omg.lol/info/chat) is also a thing you can access from the dashboard, in addition to Mastodon. You can set up with IRC, XMPP, or Discord, which is all bridged together. I'm becoming more familiar with IRC, but mainly use Discord. There's a **#design** channel I particularly like to hang out in.

## Other fun stuff

<figure>
<img src="/img/post-images/2025-omglol-terminal-land.png" alt="a black command line interface screen that reads Terminal Land a world in the shell" width="960" height="572" loading="lazy">
<figcaption>The <a href="https://terminal.land/">Terminal Land</a> interface.</figcaption>
</figure>

An omg.lol account unlocks a few other fun things you can play with. [There is an API](https://api.omg.lol/) for doing a bunch of the things I described above. There's a slower [forum powered by Discourse](https://discourse.lol/) for discussing gaming, music, pets, whatever. There is a [world map](https://home.omg.lol/map) where users have pinned their (approximate!) location. There is a text-based adventure game in development at [terminal.land](https://terminal.land/). There's a web directory at [url.town](https://url.town/) you can contribute awesome links to ([view my contributions](https://url.town/@nsmsn)).

That's a lot for $20 a year. The features and fun have only continued to grow in my past year of using this stuff. As I've said elsewhere, I've certainly spent that amount of money in stupider ways.

If you want to be a part of this but can't afford the annual fee for any reason, [there are sponsorships available](https://home.omg.lol/info/sponsorships), too. I'm proudly sponsoring a membership each year, and would love to see you on this fun corner of the web.