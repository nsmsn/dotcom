# dotcom

A personal website. There are many out there, but this one is mine.

This project is built with [Origami](https://weborigami.org) using the [origami-starter](https://github.com/WebOrigami/origami-start) package.

License is MIT, but the text and images are copyright me (unless otherwise attributed). That means most of the `.md` (Markdown) files plus everything in the `/img/` directories. 

You're free to use this project to learn from, but **please don't steal my stuff**!


## Other dependencies

In addition to Node and Origami, my site uses [Pagefind](https://pagefind.app/) for search and the [MapBox](https://www.mapbox.com/) API to generate map images.

The MapBox API token is saved on my local machine under `src/mapbox-token.txt` and is not pushed to git.  I use the command `npm run maps` to build new map images on [geolocated entries](https://www.nicksimson.com/tags/places). You can read more about the MapBox integration in [pull request #1](https://github.com/nsmsn/dotcom/pull/1).

