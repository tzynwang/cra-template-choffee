import React, { memo } from 'react';

function App(): React.ReactElement {
  return (
    <main>
      Hello world, this react app is created by running <code>npx create-react-app react-fox template --choffee</code>.
    </main>
  );
}

export default memo(App);
