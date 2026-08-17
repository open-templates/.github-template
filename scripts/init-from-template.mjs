#!/usr/bin/env node

import { initFromTemplate } from './lib/template-init/index.js';
import { GITHUB_ORG_MANIFEST } from './lib/template-init/manifests/github-org.js';
import { printHelp } from './lib/template-init/parse-args.js';
import { brandHeader, error as printError } from './lib/template-init/terminal.js';

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  brandHeader('.github public org meta-repository template');
  printHelp('.github-template');
  process.exit(0);
}

initFromTemplate({
  manifest: GITHUB_ORG_MANIFEST,
  includePackageName: false,
  includeAuthorStep: true,
  includeBundler: true,
  defaultBundler: 'none',
  fixedRepoName: '.github',
  templateLabel: '.github public org meta-repository template',
  authorStep: {
    stepTitle: 'maintainer (Git owner)',
    selectMessage: 'How should we set the repository maintainer?',
    acceptLabel: 'Accept detected Git owner',
  },
  scriptsCleanup: 'all',
  nextSteps:
    'create the org repo named .github (public), push, then edit profile/README.md',
}).catch((err) => {
  printError(`Init failed: ${err.message}`);
  process.exit(1);
});
