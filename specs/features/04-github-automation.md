---
type: Feature
title: GitHub automation
description: Dependabot, CODEOWNERS, issue forms, and Dependabot commit signer workflow.
tags: [github, dependabot, automation]
timestamp: 2026-08-17T00:00:00Z
---

# GitHub automation

Shipped at repository root (not copied from `templates/` on init except Dependabot + CODEOWNERS):

| Asset | Role |
|-------|------|
| `.github/dependabot.yml` | Dependency update PRs (personalized on init) |
| `.github/workflows/dependabot-signature.yml` | `Co-authored-by` on Dependabot commits |
| `.github/CODEOWNERS` | Review ownership (personalized on init) |
| `.github/ISSUE_TEMPLATE/*.yml` | Bug, feature, docs issue forms |
| `.github/pull_request_template.md` | Default PR body |

Reference: [docs/README.md](../../docs/README.md).
