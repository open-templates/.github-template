---
type: Feature
title: Organization profile
description: Public visitor-facing profile README on the org homepage.
tags: [github, organization, profile]
timestamp: 2026-08-17T00:00:00Z
---

# Organization profile

GitHub renders **two** organization profile READMEs when you use both meta-repos:

| Repository | Audience | File |
|------------|----------|------|
| `org/.github` | **Everyone** (public visitors) | `profile/README.md` |
| `org/.github-private` | Signed-in org members (optional) | `profile/README.md` |

This template scaffolds the **public** profile. After init, edit `profile/README.md` to list your org’s templates with one-line summaries. Keep internal maintainer detail out of this file — use `.github-private` if you adopt that template too.

Preview: push to `main` and open `https://github.com/your-org` (no sign-in required).
