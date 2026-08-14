---
title: Fraxtal Starter Kit
description: A CLI boilerplate that scaffolds a full Fraxtal dApp — wallet connection, IPFS, and a deployed sample contract — in one command.
thumbnail: ./thumbnail.png
date: 2024-06-15
githubUrl: https://github.com/almoloo/fraxtal-starter-kit
---

Fraxtal Starter Kit exists to skip the part of starting a new Fraxtal project that's the same every time: wallet connection, contract boilerplate, IPFS wiring, and UI setup. Run `npx create-frax-app my-project` and get a working environment with a sample contract already deployed to Fraxtal mainnet and testnet.

## Key features

- **Explorer API access** — a comprehensive Fraxtal explorer API proxied through the backend, so no API keys ship to the client
- **IPFS integration** — ready-to-use upload/fetch via Pinata
- **Smart contract boilerplate** — a sample contract pre-deployed to mainnet and testnet, plus Hardhat wired up for compiling, testing, and deploying your own
- **Wallet connection** — MetaMask, WalletConnect, and injected wallets working out of the box
- **Next.js + TypeScript frontend** with Tailwind CSS and pre-installed shadcn/ui components

## Tech stack

Next.js · TypeScript · Tailwind CSS · shadcn/ui · Hardhat · Pinata (IPFS) · Fraxtal network
