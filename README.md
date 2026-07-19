<!--
SPDX-FileCopyrightText: 2017-2025 GodoFredo <hello@godofredo.ninja>
SPDX-FileCopyrightText: 2025-2026 Pavel Dimov <hello@dimov.xyz>
SPDX-License-Identifier: GPL-3.0-or-later
-->

<p align="center">
  <img src="screenshot.jpg" width="600" alt="Simply theme for Ghost" />
</p>

<p align="center">
    <a href="https://github.com/sagat79/simply/actions/workflows/ci.yml">
        <img src="https://github.com/sagat79/simply/actions/workflows/ci.yml/badge.svg?branch=dev" alt="CI status" />
    </a>
    <a href="https://github.com/TryGhost/Ghost">
        <img src="https://img.shields.io/badge/Ghost-%3E%3D5.0-brightgreen.svg" alt="Ghost version" />
    </a>
    <a href="https://api.reuse.software/info/github.com/sagat79/simply">
        <img src="https://api.reuse.software/badge/github.com/sagat79/simply" alt="REUSE status" />
    </a>
    <a href="LICENSE">
        <img src="https://img.shields.io/badge/license-GPL--3.0--or--later-blue.svg" alt="License" />
    </a>
</p>

<p align="center">
    A free, Medium-inspired personal blog theme for <a href="https://github.com/tryghost/ghost/">Ghost</a>.
    <br />
    Originally created by GodoFredo; this fork is maintained by
    <a href="https://github.com/sagat79">Pavel Dimov</a>.
</p>

## Featured

- Simply Settings
  - Social Media
  - Search
  - Logo Light / Dark Mode
  - Custom Fonts (title / body)
- Site wide
  - Header
    - Default
    - DropDown Menu
  - Footer
    - Default
    - Dark
    - No Secondary Navigation
  - Color Scheme
    - Auto (default)
    - Dark Mode
    - Light Mode
  - Pagination
    - Infinite Scroll (default)
    - Pagination Number
  - Membership
    - Disable Membership
  - Announcement Bar
    - Show / Hide
    - Style, text color, dismissible
- Homepage
  - Publication cover
    - None
    - Featured -> Latest Featured Article
    - Featured Slider -> 3 Latest Articles
    - Cover (default)
      - Publication cover title
      - Publication cover description
      - Publication cover color
      - Publication cover img
- Post
  - Post Font
    - font-serif (default)
    - font-sans
  - Newsletter
    - Show / Hide
    - Newsletter Text
  - Comments via [Ghost's native commenting](https://ghost.org/help/commenting/)
- Publication Language
  - `en` — English (default)
  - `bg` — Български
- Home Page
  - Default
  - Personal
  - Archive
- Post Format
  - Post Default
  - Post Full
  - Post Wide
  - Post Header Image
  - Post Image
  - Post Image Right
  - Post Sidebar
  - Post not Image
  - Post Toc
- Page Format
  - Page Default
  - Page Toc
- Page
  - Contact
  - Podcast
  - Portfolio
  - 404
- Archive
  - Authors Page
  - Tags Page
- Kusi Doc — a documentation-hub template for your project
- Post and Page
  - [Prism supported syntax highlighting](https://prismjs.com/index.html#supported-languages)
  - Medium-style image zoom
  - Responsive video embeds (YouTube, Vimeo, and anything else Ghost's native embed cards support)
- Post Content
  - Related Articles
  - Social share buttons support for posts
  - Previous and next Post
- Sidebar
  - 3 featured articles on the home page
  - 3 latest articles
  - Tag Cloud
- Lazy loading for images

## Automate theme deployment via Ghost API

- Visit Ghost Admin > Settings > Integrations
- At the bottom of that page, click the button to `Add custom integration`
- Name the new custom integration anything you like — say, `automated-updates` — and save.
- Copy the Admin API key
- Create a file named `.env` in the theme folder
- Paste the Admin API key in the `.env` file as shown below.
- Do not commit or push the `.env` file — it's already listed in `.gitignore` so you don't accidentally leak your Admin API key.
- In the same `.env` file, set the API URL to wherever your site is currently hosted.

```
GHOST_API_URL=https://domain.TLD
GHOST_ADMIN_API_KEY=provideyouradminapikeyfromtheghostdashboard
THEME_NAME=simply
API_VERSION="v5.0"
```

Run the following command to deploy your theme updates to your Ghost installation:

```bash
npm run deploy
```

You'll see the updates you made in the theme locally deployed and activated in your Ghost setup. You can also incorporate this deploy step in your CI/CD pipeline if you use one.

## Contributing

Looking for contributors of all skill levels! If you'd like to help, take a look at the [Contributing Guide](./CONTRIBUTING.md).

### Code Contributors

This project exists thanks to all the people who contribute.

[![Simply Contributors](https://contrib.rocks/image?repo=sagat79/simply)](https://github.com/sagat79/simply/graphs/contributors)

## Credits

- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- [Ionicons](https://github.com/ionic-team/ionicons)
- [IcoMoon](https://icomoon.io/)
- [Medium Zoom](https://github.com/francoischalifour/medium-zoom)
- [Prismjs](https://github.com/PrismJS/prism/)
- [Inter Font Family](https://github.com/rsms/inter/)
- [PT Serif Font Family](https://fonts.google.com/specimen/PT+Serif)
- [Tiny Slider](https://github.com/ganlanyuan/tiny-slider)

## Copyright & License

Originally created by GodoFredo. Copyright (c) 2017-2025 GodoFredo, 2025-2026 Pavel Dimov — released under the [GPLv3 license](LICENSE).
