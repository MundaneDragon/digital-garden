---
title: "Building Echo: Best Design at UNIHACK 2026"
date: "2026-03-15"
tags: ["Next.js", "Figma", "Accessibility"]
excerpt: "How we constructed an accessible UI with Speech-to-Text and Dark Mode in 48 hours."
type: "article"
awardBadge: "🥇 Best Design @ UNIHACK 2026"
---

# Building Echo: Best Design at UNIHACK 2026

Over a single 48-hour sprint at Australia's premier student hackathon, our team of four delivered **Echo** — a real-time collaborative workspace tuned for users with motor impairments and visual accessibility needs. The centrepiece of the frontend was an interactive avatar selector component built in Next.js with the App Router. Each avatar option rendered as a glassmorphism card backed by Framer Motion spring animations; selecting a profile triggered a staggered layout transition that swapped the chat interface's colour accent, font scale, and contrast profile to match the user's accessibility preset. We prototyped the micro-interactions in Figma first — 32 frames of component states over three design iterations — then translated them directly into Tailwind utility layers. The result was a fluid, keyboard-navigable picker that felt native, even while streaming Web Speech API transcripts into the chat pane in real time.
