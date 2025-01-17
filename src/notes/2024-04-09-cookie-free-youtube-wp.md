---
title: "Cookie-free YouTube embeds"
date: "2024-04-09T13:55:53.000Z"
tags: 
  - "Bookmarks"
  - "Privacy"
  - "This site"
  - "WordPress"
---

_Bookmarked [Remove Cookies from YouTube Videos in WordPress](https://www.wpexplorer.com/wordpress-youtube-embeds-nocookie/)._

Here's a handy code snippet which I copied into my `inc/filters.php` file that modifies WordPress' default YouTube block to use the `youtube-nocookie.com` domain.

```
/**
 * Modify YouTube Embeds to Disable Cookies.
 * 
 * @link https://www.wpexplorer.com/wordpress-youtube-embeds-nocookie/
 */
add_filter( 'embed_oembed_html', function( $html, $url, $attr, $post_id ) {
	if ( str_contains( $url, 'youtube.com' ) ) {
		$html = str_replace( 'youtube.com', 'youtube-nocookie.com', $html );
	}
	return $html;
}, 10, 4 );
```

Using [Blacklight](https://themarkup.org/blacklight) from _The Markup_, I can inspect a URL and see that the third-party cookies from Alphabet, Inc. are now removed. Even in a cookie-free YouTube embed, however, there still appears to be an ad tracker from Alphabet. Vimeo embeds also use third-party cookies, by the way.

It would be awesome to somehow provide a cookie-free embed option for YouTube and Vimeo in WordPresss core, or offer this functionality with a plugin. I'm imagining something like a toggle in the block settings. [Toolbelt](https://wordpress.org/plugins/wp-toolbelt/) could be a good contender to offer this extra functionality. The search terms "cookie" and "youtube" bring up a bunch of plugins in the WordPress directory I probably would not want to install on my site.

I currently do not have a cookie banner on my website, and I don't want to create one. Maybe instead of embedding videos on my site in the future, I should just link to them (on an [Invidious](https://invidious.io/) instance?) instead.
