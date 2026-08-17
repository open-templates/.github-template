# .github-template

A **GitHub organization meta-repository template** from [@open-templates](https://github.com/open-templates). Scaffold a public [`.github`](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile) repo with the visitor-facing org profile, template catalog starter, Dependabot, CODEOWNERS, and issue/PR scaffolding.

Pair with [`.github-private-template`](https://github.com/open-templates/.github-private-template) if you also want a member-only org profile for maintainers.

## Quick start

1. **Use this template** on GitHub inside your organization (repo name must be `.github`).
2. Clone and personalize from [`templates/`](templates/):

```bash
git clone https://github.com/open-templates/.github-template.git
cd .github-template
./scripts/init-from-template.sh
```

The hosted repo keeps **@open-templates** branding in root markdown until you run init. See [docs/init-from-template.md](docs/init-from-template.md).

### What you get after init

| Path | Role |
|------|------|
| `profile/README.md` | **Public** org profile (template catalog on your org homepage) |
| `README.md` / `INSTRUCTIONS.md` | Meta-repo governance for your org |
| `.github/dependabot.yml` | Dependency update PRs |
| `.github/CODEOWNERS` | Review ownership |

Workflow and issue template reference: **[docs/README.md](docs/README.md)** · [INSTRUCTIONS.md](INSTRUCTIONS.md) · [index.md](index.md)

## Reference implementation

The [open-templates/.github](https://github.com/open-templates/.github) repository is the live public catalog for [@open-templates](https://github.com/open-templates). Use it as inspiration after init.

## License

MIT — see [LICENSE](LICENSE).

---

## Repository documents

**README** | [INSTRUCTIONS](INSTRUCTIONS.md) | [CHANGELOG](CHANGELOG.md) | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
