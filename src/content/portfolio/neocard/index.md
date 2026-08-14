---
title: NeoCard
description: A decentralized social profile — username, bio, avatar, and links — stored entirely on the Neo X blockchain.
thumbnail: ./thumbnail.png
date: 2024-10-05
githubUrl: https://github.com/almoloo/neocard
---

NeoCard gives every wallet address a shareable profile that lives on-chain instead of on a company's server. Set a username, bio, avatar, and social links once, and NeoCard mints a unique, shareable URL backed by the **Neo X** blockchain's EVM compatibility — so the profile can't be taken down or silently edited by a platform.

## How it works

The `NeoCard` smart contract exposes two core functions: `upsertProfile` to create or update a profile, and `getProfile` to read one back by address. Because everything is EVM-compatible, the whole flow works with familiar tooling — MetaMask for the wallet, Hardhat + Ignition for deployment.

## Key features

- **Create and update profiles** directly from a connected wallet
- **Immutable, decentralized storage** — profile data lives on-chain
- **Unique shareable URLs** — one link per wallet address, shareable anywhere
- **Fully on-chain logic** — every read/write goes through the smart contract

## Tech stack

Next.js · Wagmi · Solidity · Neo X (EVM-compatible) · Hardhat + Ignition
