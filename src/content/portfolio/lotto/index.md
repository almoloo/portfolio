---
title: Lotto
description: A fully decentralized lottery on Flow blockchain, with provably fair on-chain randomness and transparent prize splits.
thumbnail: ./thumbnail.png
date: 2025-10-18
githubUrl: https://github.com/almoloo/lotto
---

Lotto is a decentralized lottery built entirely on **Cadence smart contracts** — session creation, ticket sales, winner selection, and prize distribution all happen on-chain, so nothing about the draw depends on trusting a server.

## How it works

Anyone can create a session with a ticket price and end time; buyers purchase tickets with FLOW up to a per-wallet cap. Once a session expires, anyone can close it — closing triggers Flow's native `revertibleRandom()` to pick a winner, weighted by ticket count, and the pool is split automatically:

- **85%** to the winner
- **10%** to the session creator
- **2.5%** to the platform
- **2.5%** to whoever closed the session (an incentive to keep sessions moving)

## Key features

- **Provably fair randomness** — verifiable on-chain selection, no possibility of manipulation
- **Time-based sessions** with automatic state transitions (Active → Expired → Winner Picked → Completed)
- **Full transparency** — every ticket purchase and payout is a public transaction
- **Session dashboard** — track your created sessions, tickets, and history

## Tech stack

React 19 · TypeScript · Vite · React Router 7 · Tailwind CSS 4 · shadcn/ui · Cadence smart contracts · Flow CLI / Emulator
