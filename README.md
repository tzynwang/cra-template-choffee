# cra-template-choffee

```string
npx create-react-app <your-app-name> --template choffee
```

This is a template for [Create React App](https://github.com/facebook/create-react-app).
This template creates a React app with `typescript` installed by default.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Launch the app locally.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run deploy`

Deploy the app to the repository as GitHub Pages.

## Components Import Path

Use `@Components/path/to/the/component` to import any component from anywhere.\

```ts
// src/index.tsx
import App from '@Components/App';
import ErrorBoundary from '@Components/Common/ErrorBoundary';
```

## Author

Charlie (Tzu Yin)\
[Blog](https://tzynwang.github.io/) | [GitHub](https://github.com/tzynwang)
