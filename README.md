# 🎮 Cir Pink's Ultimate Game Review Hub

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-00C7B7)](index.html)

Welcome to **Cir Pink's Game Review Hub** — a modern, stylish, and community-driven destination for reviews, ratings, system requirements, and discussions of top PC, Console, and Mobile games.

Built with clean vanilla web technologies, the hub features an immersive dark gamer aesthetic with neon accents, dynamic instant search, category filtering, responsive trailers, and an interactive comment system.

---

## 🚀 Live Demo & Quick Start

### Option 1: Direct in Browser
Double-click `index.html` to open directly in Chrome, Edge, Firefox, or Safari.

### Option 2: Run via Local Web Server (XAMPP / PHP / Node / Python)
```bash
# Using PHP built-in server
php -S localhost:8000

# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```
Navigate to `http://localhost:8000` in your web browser.

---

## ✨ Features

- 🔍 **Real-Time Live Search**: Instant title, genre, and keyword search across the entire game catalog.
- 🏷️ **Category & Genre Filtering**: Filter games dynamically by *RPG*, *Open World*, *Action*, *MOBA*, *Sandbox*, or *Mobile*.
- 💬 **Interactive Review System**: Visitors can leave reviews and star ratings on any game page. Comments persist across page reloads using browser `localStorage`.
- 📱 **Fully Responsive Layout**: Built with modern CSS Grid and Flexbox for seamless browsing on 4K monitors, laptops, tablets, and smartphones.
- 🎬 **Responsive 16:9 Video Embeds**: YouTube trailers and gameplay videos scale automatically without horizontal overflow.
- ⚙️ **Detailed Hardware Specifications**: Minimum and recommended system specs for PC, Console, and Mobile.
- 🎨 **Unified Design System**: Glassmorphic dark gaming UI with subtle glows, hover elevations, and custom vector icons.
- 🌐 **Rich Community & About Hubs**: Dedicated Socials page with community links (Discord, YouTube, Twitch, Twitter/X, Instagram) and an About page detailing the review rubric.

---

## 🎮 Featured Games

| Game | Genre | Platform | Rating | Review Page |
| :--- | :--- | :--- | :---: | :---: |
| **The Legend of Zelda: Tears of the Kingdom** | Open World Action RPG | Switch, PC | ★★★★★ (5.0) | [`zelda.html`](zelda.html) |
| **Cyberpunk 2077** | Sci-Fi Action RPG | PC, PS5, Xbox | ★★★★☆ (4.0) | [`cyberpunk.html`](cyberpunk.html) |
| **Baldur's Gate 3** | CRPG / Turn-Based | PC, PS5, Xbox | ★★★★★ (5.0) | [`baldurs.html`](baldurs.html) |
| **Mobile Legends: Bang Bang** | 5v5 MOBA | Android, iOS | ★★★★☆ (4.0) | [`ML.html`](ML.html) |
| **Honkai: Star Rail** | Space Fantasy RPG | PC, PS5, Mobile | ★★★★☆ (4.0) | [`HSR.html`](HSR.html) |
| **Wuthering Waves** | High-Mobility Action RPG | PC, PS5, Mobile | ★★★★★ (5.0) | [`wuwa.html`](wuwa.html) |
| **Minecraft** | Sandbox Survival | PC, Console, Mobile | ★★★★★ (5.0) | [`mc.html`](mc.html) |
| **Reverse: 1999** | Retro-Occult Strategic RPG | PC, Android, iOS | ★★★★★ (5.0) | [`r1999.html`](r1999.html) |

---

## 🗂️ Project Structure

```plaintext
Game-Review/
├── index.html                  # Main entry point with search & filtering
├── Game Review.html            # Legacy alias (identical functionality)
├── About.html                  # Mission, stats & scoring rubric
├── Socials.html                # Community channels & social cards
├── favicon.svg                 # Vector gamer icon
├── stylesg.css                 # Homepage & global design system
├── stylesabout.css             # About & Socials styling
├── stylesz.css                 # Game review detail page styling
│
├── assets/
│   ├── js/
│   │   └── main.js             # Instant search, filter & localStorage reviews
│   └── images/
│       ├── logo.svg            # Vector site emblem
│       ├── zelda.jpg           # Zelda cover art
│       ├── cyberpunk.jpg       # Cyberpunk 2077 cover art
│       ├── baldurs.jpg         # Baldur's Gate 3 cover art
│       ├── ml.jpg              # Mobile Legends cover art
│       ├── hsr.jpg             # Honkai Star Rail cover art
│       ├── wuwa.jpg            # Wuthering Waves cover art
│       ├── mc.jpg              # Minecraft cover art
│       └── r1999.jpg           # Reverse 1999 cover art
│
├── placeholderpics/            # Backward-compatible image assets (1.jpg to 8.jpg)
│
├── zelda.html                  # Individual game review pages
├── cyberpunk.html
├── baldurs.html
├── ML.html
├── HSR.html
├── wuwa.html
├── mc.html
├── r1999.html
│
└── README.md                   # Documentation
```

---

## 🛠️ Tech Stack

- **HTML5**: Semantic tags (`<article>`, `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS3**: Custom properties (variables), CSS Grid, Flexbox, smooth transitions, media queries, and glassmorphism.
- **Vanilla JavaScript (ES6+)**: Zero external runtime dependencies. Instant client-side DOM filtering and `localStorage` review persistence.

---

## 📜 Review Scoring Rubric

- **★★★★★ (5.0) - Essential Masterpiece**: An industry milestone with world-class narrative, mechanics, and design.
- **★★★★☆ (4.0) - Great**: Exceptionally polished and engaging with minimal flaws.
- **★★★☆☆ (3.0) - Decent**: Fun gameplay with some repetitive or niche elements.
- **★★☆☆☆ (2.0) - Mediocre**: Suffer from optimization bugs or balance issues.
- **★☆☆☆☆ (1.0) - Avoid**: Severe technical bugs or uninspired execution.

---

## 👤 Author & Credits

Created with ❤️ by **[Jaijai541](https://github.com/Jaijai541)** (Cir Pink).

Feel free to fork, customize, or star ⭐ this repository if you find it helpful!
