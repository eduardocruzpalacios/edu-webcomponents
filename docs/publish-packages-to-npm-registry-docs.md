# Publish packages to npm registry by using GitHub Actions
- Have an account in npm.com and create a PAT with write permissions
- Add PAT created to GitHub secrets
- Use workflow from [here](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages#publishing-packages-to-the-npm-registry)

## Provenance

### What is is?

You can generate provenance statements for the packages you publish. This allows you to publicly establish where a package was built and who published a package, which can increase supply-chain security for your packages.

More info: [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements).

### How to
Add permissions and provenance flag to the workflow job that publishes packages to npm registry, as you can see here:
```
name: Publish Package to npmjs
on:
  release:
    types: [published]
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm install -g npm
      - run: npm ci
      - run: npm publish --provenance --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add repository object with type and url properties to the package.json, as you can see here:
```
 "repository": {
    "type": "git",
    "url": "https://github.com/eduardocruzpalacios/edu-webcomponents"
  },
```
