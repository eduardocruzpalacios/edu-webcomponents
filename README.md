# Edu web components library

This web components library follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i edu-webcomponents
```

## Usage

```html
<script type="module">
  import 'edu-webcomponents/index.js';
</script>

<webcomponent-tagname></webcomponent-tagname>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
