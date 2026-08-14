---
title: Bellman
description: A cryptocurrency price notification service — set a target price and get emailed when it hits.
thumbnail: ./thumbnail.png
date: 2022-02-03
githubUrl: https://github.com/almoloo/bellman
---

Bellman is a straightforward price-alert service: pick a coin, set a target price, and get an email the moment it's crossed. Originally built for a Gitcoin contest, it periodically polls the **Binance API** for prices and checks them against stored alerts.

## Key features

- **Price alerts** — set a target price per coin and get notified by email when it's hit
- **Periodic price polling** via the Binance API
- **Mobile-friendly UI** in both light and dark mode

## Tech stack

Node.js · Express · Tailwind CSS · Binance API · Flatfile (alert storage)
