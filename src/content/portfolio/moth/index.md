---
title: Moth
description: An on-chain loyalty point system for the Algorand network, built for the "Algorand Change the Game" hackathon.
thumbnail: ./thumbnail.png
date: 2024-05-18
githubUrl: https://github.com/almoloo/moth
---

Moth is a fully on-chain royalty/loyalty points system: shop owners set up a customizable gateway profile, customers earn Algorand Standard Assets (ASAs) by transacting through it, and those points can be spent on discounts in later purchases — all recorded on Algorand rather than a merchant's internal ledger.

## How it works

Each shop owner configures their own gateway with its own settings, and the site lets shoppers browse available shops. Payment flows redirect to a gateway URL carrying the recipient wallet, amount, and a callback URL; once the transaction completes, the platform redirects back with a transaction ID the client can independently verify on-chain — no trust in the platform's own bookkeeping required. Earned points are also transferable peer-to-peer, turning the loyalty system into something closer to a shared currency between users.

## Key features

- **On-chain loyalty system** — points are ASAs, secured and settled on Algorand
- **Point transfers** — send earned points to friends and family
- **Shop owner profiles** — customizable gateway per shop, browsable storefront

## Tech stack

Algorand (ASAs, smart contracts) · Pinata (IPFS)

Built for the Algorand "Change the Game" hackathon (consumer track) with [Hossein](https://github.com/Hossein-79).
