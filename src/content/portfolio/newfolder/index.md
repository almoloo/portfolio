---
title: NewFolder
description: Fully decentralized document storage with AI-powered chat over your files, built on the 0G Network.
thumbnail: ./thumbnail.png
date: 2026-04-15
githubUrl: https://github.com/almoloo/newfolder
demoUrl: https://newfolder.space
---

NewFolder is a decentralized document platform: upload a PDF, Word doc, or spreadsheet, store it permanently on the **0G decentralized storage network**, then have a conversation with it using **verifiable AI inference** from the 0G Compute Network. No centralized servers hold the data, no subscriptions — just pay-per-use credits, settled in crypto.

## How it works

Uploads go through the 0G Storage SDK and are content-addressed, so a file can't be silently deleted or tampered with. When a user asks a question, the app pulls the file back from 0G storage, extracts its text, and routes the query to a verifiable AI inference provider on the 0G Compute Network — every response is attributable to a specific, checkable provider rather than an opaque backend.

Credits are funded by a small, auditable `CreditVault` smart contract: users top up with 0G, and the contract forwards 100% of funds straight to the treasury — no funds are ever custodied by the contract itself.

## Key features

- **Decentralized storage** — content-addressed uploads that can't be tampered with or silently removed
- **AI document chat** — streaming answers grounded in the file's actual content
- **Wallet authentication** — Sign In With Ethereum, no passwords or email
- **Pay-per-use credits** — top up with 0G, no monthly fees
- **Shareable files** — generate a public link for any uploaded document

## Tech stack

Next.js 16 (App Router, Turbopack) · Tailwind CSS v4 · Better Auth + SIWE · RainbowKit / Wagmi / viem · 0G Storage & Compute SDKs · PostgreSQL + Drizzle ORM · Solidity + Foundry
