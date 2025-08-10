# Requeriments to use .github/workflows/release-and-publish.yaml

## Release
- Create a PAT in GitHub and add it to GitHub secrets with *GITHUB_TOKEN* name.

## Publish
- Have an account in npm.com, create a PAT with write permissions, and add it GitHub secrets with *NPM_TOKEN* name.
- Use workflow from [here](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages#publishing-packages-to-the-npm-registry)

# Notes

## Provenance

You can generate provenance statements for the packages you publish. This allows you to publicly establish where a package was built and who published a package, which can increase supply-chain security for your packages.

More info: [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements).
