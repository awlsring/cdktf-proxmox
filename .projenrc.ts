import { AwlsringCdktfProviderLibrary } from '@awlsring/projen-commons/lib/project/provider/cdktf-provider-library';

const project = new AwlsringCdktfProviderLibrary({
  cdktfVersion: '^0.14.3',
  constructsVersion: '^10.1.52',
  provider: {
    owner: 'awlsring',
    name: 'proxmox',
    version: '~> 0.0',
  },
  name: 'cdktf-proxmox',
  repositoryUrl: 'https://github.com/awlsring/cdktf-proxmox.git',
  description: 'A package that vends generated constructs from the Proxmox Terraform provider',
  keywords: [
    'cdktf',
    'proxmox',
    'backend',
  ],
  deps: [
    'constructs@^10.1.52',
  ],
  devDeps: [
    'constructs@10.1.52',
  ],
  publish: true,
  gitignore: [
    '.DS_Store',
    '**/*.js',
    '**/*.d.ts',
    'package-lock.json',
    'yarn.lock',
    '/test/__snapshots__/',
    '.gen',
    '.vscode',
    'cdktf.out',
    'terraform*',
    '.terraform*',
  ],
});
project.eslint?.ignorePatterns.push('src/base/*');
project.synth();