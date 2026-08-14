---
title: Middleman
description: An AI-powered widget that bridges a Lukso blockchain profile and its visitors, answering questions on the owner's behalf.
thumbnail: ./thumbnail.png
date: 2025-03-03
githubUrl: https://github.com/almoloo/middleman
demoUrl: https://middleman.almoloo.com
---

Middleman is the earlier of two projects exploring the same idea — an AI layer between a Lukso profile and the people visiting it. Users answer AI-generated questions about themselves, their answers are stored on IPFS so they keep ownership of the data, and visitors get a conversational assistant that answers strictly from what the owner chose to share.

## How it works

Question generation and the visitor-facing chatbot both run through OpenAI's Assistant API. Users pick which AI-generated questions to answer and which to skip — a privacy-first design where nothing gets stored without explicit opt-in — and responses are pinned to IPFS via Pinata rather than a centralized database. The result is a lightweight, embeddable widget for Lukso's profile grid.

## Key features

- **AI-generated questions** — personalized per user, skippable at will
- **Decentralized storage** — all answers stored on IPFS, owned by the user
- **Interactive AI assistant** — answers visitor questions using only the owner's provided data
- **Lightweight profile widget** — fast-loading embed for Lukso's grid

## Tech stack

Next.js · TypeScript · Tailwind CSS · OpenAI Assistant API · IPFS (Pinata)
