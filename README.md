# Sana Monhaseri — Portfolio

Personal portfolio site built with React. Warm, typography-driven design with animated light beams, smooth scroll-reveal transitions, and a custom color system.

**Live:** Hosted on Firebase

## Tech Stack

- React 19
- Framer Motion
- Plain CSS with custom properties
- Canvas API (animated beams)
- Firebase Hosting

## Sections

- **Hero** — Animated canvas beams background with intro and social links
- **Marquee** — Scrolling skills ticker
- **About** — Bio, education, recognition, and languages (with proficiency levels)
- **Projects** — Project cards with image slider
- **Skills** — Categorized skill pills (languages, frameworks, tools)
- **Contact** — Call-to-action with smooth gradient transition
- **Footer** — Minimal footer

## Project Structure

```
portfolio/src/
  Hero/        — Animated hero with canvas beams
  Marquee/     — Scrolling skills ticker
  About/       — Bio, education, languages
  Projects/    — Project cards with image slider
  Skills/      — Skill categories
  Contact/     — Contact CTA
  Footer/      — Footer
  Navbar/      — Fixed navbar with scroll blur
  hooks/       — useReveal (IntersectionObserver)
  constants/   — Shared social links
  style/       — Global CSS & variables
```

## Getting Started

```bash
cd portfolio
npm install
npm start
```

## Deploy

```bash
cd portfolio
npm run build
firebase deploy
```

## License

MIT
