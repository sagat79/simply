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
    Originally created by GodoFredo; forked and extended by
    <a href="https://github.com/sagat79">Pavel Dimov</a>.
</p>

> [!NOTE]
> **Archived / not maintained.** This fork ran [dimov.xyz](https://dimov.xyz)
> until August 2026; the site now uses a different, purpose-built theme. The
> code stays under `GPL-3.0-or-later` - fork freely. For an actively maintained
> version, see the upstream: [godofredoninja/simply](https://github.com/godofredoninja/simply).

## Featured

A quick tour of what ships out of the box, plus every setting broken down by category.

| Feature | What it does |
| --- | --- |
| 🏠 3 home layouts | Default, Personal (hero cover), and Archive — switch per-route via `routes.yaml` |
| 📝 9 post formats | Full, Wide, Header Image, Image, Image Right, Sidebar, Not Image, ToC, Default — picked per-post in Ghost Admin |
| 🌓 Light/dark logo | Separate logo images per color scheme, swapped automatically |
| 📣 Announcement bar | Dismissible site-wide banner with configurable color and text |
| 📚 Kusi Doc | A documentation-hub template — built for this fork's Matrix homeserver docs, reusable for any project |
| 💬 Native comments | [Ghost's own commenting system](https://ghost.org/help/commenting/), no third-party embed |
| 🌍 en / bg | Fully translated in English and Bulgarian |
| ⚡ Lazy-loaded images | Every image below the fold, out of the box |

<details open>
<summary>🎨 Theme settings</summary>

- Social media links, search, custom title/body fonts

**Header**
- Default
- Drop-down menu

**Footer**
- Default
- Dark
- No secondary navigation

**Color scheme**
- Auto (default)
- Dark
- Light

**Pagination**
- Infinite scroll (default)
- Numbered pages

**Announcement bar**
- Show / hide, style, text color, dismissible

**Membership**
- Can be fully disabled

</details>

<details>
<summary>🏠 Homepage &amp; layouts</summary>

**Home page**
- Default
- Personal
- Archive

**Publication cover (Default layout)**
- None
- Featured — latest featured article
- Featured Slider — 3 latest articles
- Cover (default) — title, description, color, image

</details>

<details>
<summary>📝 Posts &amp; pages</summary>

**Post format**
- Default, Full, Wide, Header Image, Image, Image Right, Sidebar, Not Image, ToC

**Post settings**
- Font: serif (default) or sans
- Newsletter block: show/hide, custom text
- Related articles, previous/next post, social share buttons

**Page format**
- Default
- Table of contents

**Page templates**
- Contact
- Podcast
- Portfolio
- 404

</details>

<details>
<summary>🗂️ Archives &amp; docs</summary>

- Author archive page
- Tag archive page
- Kusi Doc — documentation-hub collection template

</details>

<details>
<summary>✨ Content &amp; media</summary>

- [Prism syntax highlighting](https://prismjs.com/index.html#supported-languages), all languages
- Medium-style image zoom
- Responsive video embeds (YouTube, Vimeo, and anything Ghost's native embed cards support)

</details>

<details>
<summary>📌 Sidebar</summary>

- 3 featured articles on the home page
- 3 latest articles
- Tag cloud

</details>

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
