---
title: Hyprland and all the things that are wrong with it
description: Many people tend to recommend Hyprland without knowing what they are dealing with along with risks, in this article I'm gonna be explaining why you shouldn't use Hyprland if you value your devices security.
pubDate: "November 16 2024"
---

*DISCLAIMER: In this article I will be avoiding personal things, there are already many articles about Vaxry himself.*

## What is Hyprland?

Hyprland is an independent tiling Wayland compositor written in C++. Noteworthy features of Hyprland include dynamic tiling, tabbed windows, a clean and readable C++ code-base, and a custom renderer that provides window animations, rounded corners, and Dual-Kawase Blur on transparent windows. General usage and configuration is thoroughly documented at Hyprland wiki.

## Security Issues

Vaxry has been caught doing terrible security practices;
On November 9 2024, an [issue](https://github.com/hyprwm/Hyprland/issues/8400) appeared about Hyprland overusing `execAndGet()`, a function that invokes `/bin/sh` (System shell) to call specific programs such as `git`, `grep`, `cat` and `date`, it was also previously seen being used to call the system compiler for a file that was hardcoded in `/tmp/` to compile plugins, this was in practice, a 0day vulnerability as it allowed an attacker to put a file before Hyprland did (a race condition) therefore compiling and executing said file, Hyprland itself technically hard-depends on a compiler, linker, git, binutils and specific coreutils, which should not be tolerated at all since this is a window manager.

## Conclusion

You shouldn't use Hyprland if your environment needs security.
