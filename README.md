HugoShortcoder
=================

## About

Chrome extension to copy [Hugo](https://gohugo.io/) [shortcode](https://gohugo.io/content-management/shortcodes/) to clipboard according to open URL.

## Usage

1. Open a supported site (currently gist, Instagram, X a.k.a Twitter, Vimeo, YouTube) and open the context menu by right-clicking the mouse.
1. Select HugoShortcoder from the context menu.
1. The Shortcode corresponding to the open site will be copied to the clipboard.
1. If the site does not support it, the title and URL of the page will be copied in Markdown format.

## Supported services and corresponding shortcodes

- gist `{{< gist user 50a7482715eac222e230d1e64dd9a89b >}}`
- Instagram `{{< instagram BWNjjyYFxVx >}}`
- X (Twitter) `{{< tweet user="SanDiegoZoo" id="1453110110599868418" >}}`
- Vimeo `{{< vimeo 55073825 >}}`
- YouTube `{{< youtube w7Ft2ymGmfc >}}`


## License

MIT License.

## Contribute

1. Fork this repository.
1. Clone your forked repository.
1. Open Chrome extension setting page.
1. Check Developer mode.
1. Click [Load unpacked extension...] button.
1. Select prior cloned repository src directory.
1. Good luck!
