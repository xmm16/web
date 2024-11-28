---
title: Moving to Nix
description: Migrating my entire workflow to NixOS has been a very good experience
pubDate: "November 28 2024"
---

## NixOS

3 days ago I decided to install NixOS on my machine, it has been a really nice experience so far, I really like the configuration concept and the immutability, I was proven wrong (by myself) that immutability doesn't necessarily mean less freedom. Maintaining the system and upgrading it is as easy as doing `sudo nixos-rebuild switch` which felt really relieving compared to other distros and NixOS allowed me to mess around with little to no worries of bricking the system as I could just boot an older generation and revert those changes.

## Nix

Learning Nix has been a really nice experience and I'm currently sharing a [configuration in Codeberg](https://codeberg.org/xmm/NixOS) with my partner as we both have the same setups, other than that, it has been a blessing to have a reproducible system wherever I go.
