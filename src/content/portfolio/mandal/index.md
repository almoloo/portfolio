---
title: Mandal
description: A Chrome extension that runs real-time AI security analysis on smart contracts and dApps on the Mantle blockchain.
thumbnail: ./thumbnail.png
date: 2025-11-26
githubUrl: https://github.com/almoloo/mandal
---

Mandal is a Chrome extension that watches Mantle explorer pages and gives visitors an instant, AI-generated risk read on whatever contract they're looking at — before they connect a wallet or sign anything.

## How it works

When the extension detects a contract page on Mantle's explorer, it pulls the contract's source, creator, and balance from the Mantle Explorer API, then sends the source code to GPT-4o for a security pass: reentrancy, overflow, access-control gaps, and other common attack patterns. Results are cached for three days so repeat visits are instant, and combined with off-chain signals — domain age via WHOIS, scraped dApp metadata — to build a fuller trust picture than on-chain data alone.

Anyone can also file a community report against a contract or dApp (scam, phishing, honeypot, etc.), so the risk signal isn't purely AI-generated over time.

## Key features

- **AI-powered contract analysis** — risk-level scoring (Low/Medium/High/Critical) with a plain-English summary
- **DApp metadata intelligence** — domain age and scraped site metadata as trust signals
- **Real-time monitoring** — activates automatically on Mantle explorer pages, mainnet and testnet
- **Community reports** — crowdsourced warnings layered on top of the AI analysis

## Tech stack

**Backend:** Hono.js · PostgreSQL + Prisma ORM · OpenAI GPT-4o · Cheerio
**Extension:** React 19 + TypeScript · Vite 7 · TanStack Query · Tailwind CSS v4 · React Aria Components
