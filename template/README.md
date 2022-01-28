# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), with template `choffee`.

`npx create-react-app react-fox --template choffee`

Install the following packages by default:
- `typescript`
- (dev) `webpack`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Components Import Path

Use `@Components/path/to/the/component` to import any component from anywhere.\

```ts
// src/index.tsx
import App from '@Components/App';
import ErrorBoundary from '@Components/Common/ErrorBoundary'
```

## Folder Structure
```
config/
  alias.js
  webpack.config.js
public/
  index.html
  robots.txt
src/
  components/
    App/
      index.tsx
    Common/
      ErrorBoundary/
        index.tsx
        types.d.ts
    Layout/
  index.css
  index.tsx
  react-app.env.d.ts
  reportWebVitals.ts
.babelrc
.gitignore
package.json
README.md
tsconfig.json
```

## Author
Charlie (Tzu Yin)\
[Blog](https://tzynwang.github.io/) | [GitHub](https://github.com/tzynwang) |  `tzyn.wang`🦊`gmail.com` (🦊 >> `@`)