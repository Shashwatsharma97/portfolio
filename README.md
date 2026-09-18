# Shashwat Sharma — Portfolio

A single-page developer portfolio built around a scroll-scrubbed hero video —
scroll down and the video plays forward frame-by-frame in sync with your
scroll position;

**Live repo:** https://github.com/Shashwatsharma97/portfolio

## Features

- **Scroll-scrubbed hero video** — the hero background isn't a looping clip,
  it's bound directly to scroll position via `video.currentTime`, so
  scrolling *is* the playback control.
- **Buttery smooth scrolling** — [Lenis](https://github.com/darkroomengineering/lenis)
  replaces native scroll with inertia-based easing across the whole site.
- **Scroll "vibration"** — the hero video gets a subtle camera-shake jitter
  that scales with scroll velocity, plus a haptic pulse
  (`navigator.vibrate`) on devices that support it.
- **Scroll-triggered reveals** — section content fades/slides in via
  [Framer Motion](https://www.framer.com/motion/) as you scroll past it.
- **Projects pulled from GitHub** — the Work section lists real repos from
  [github.com/Shashwatsharma97](https://github.com/Shashwatsharma97).
- Fully responsive, with a mobile hamburger nav.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lenis](https://github.com/darkroomengineering/lenis) — smooth scroll
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals

## Project Structure

```
app/
  layout.tsx          # root layout, fonts, wraps app in SmoothScrollProvider
  page.tsx             # assembles Hero, About, Projects, Contact
  globals.css           # design tokens (colors, Lenis CSS)
components/
  SmoothScrollProvider.tsx  # Lenis instance + React context
  Nav.tsx                    # fixed header, smooth-scroll anchor links, mobile menu
  Hero.tsx                    # scroll-scrubbed video hero + shake/haptics
  About.tsx                    # skills, tech stack, bio
  Projects.tsx / ProjectCard.tsx  # project grid
  Contact.tsx                      # email + socials
  Footer.tsx
lib/
  site-config.ts       # name, role, tagline, bio, skills, socials, email
  projects.ts            # project list (title, description, tags, link, image)
public/
  images/               # project screenshots (drop files here)
  video/hero-scrub.mp4    # hero background video, re-encoded for scroll scrubbing
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or whatever port the
terminal prints, if 3000 is already in use locally).

## Customizing

- **Your info** — edit `lib/site-config.ts` (name, role, tagline, bio,
  skills, email, social links). Every section on the site reads from this
  one file.
- **Projects** — edit `lib/projects.ts`. Each entry can optionally point at
  an `image` under `public/images/`; without one, the card falls back to a
  gradient placeholder.
- **Hero video** — replace `public/video/hero-scrub.mp4`. Scroll-scrubbing
  needs a keyframe on every frame or seeking will stutter, so re-encode any
  replacement clip with:

  ```bash
  ffmpeg -i input.mp4 -t 8 -an -c:v libx264 -preset slow -crf 15 -g 1 -bf 0 \
    -pix_fmt yuv420p -movflags +faststart public/video/hero-scrub.mp4
  ```

  Adjust `SCRUB_VH` in `components/Hero.tsx` to change how much scroll
  distance the video scrubs across.
- **Colors** — edit the CSS custom properties in `app/globals.css`
  (`--background`, `--foreground`, `--accent`, `--muted`).

## Build & Deploy

```bash
npm run build
```

Deploys cleanly to [Vercel](https://portfolio-two-blush-iyk2u043f4.vercel.app/) — connect this repo and it
just works, no config needed.
