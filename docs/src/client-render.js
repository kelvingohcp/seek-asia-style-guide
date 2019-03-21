// Polyfills
import 'babel-polyfill';
import 'core-js/fn/array/fill';
import 'core-js/fn/array/includes';
import 'core-js/fn/array/from';
import 'core-js/fn/string/ends-with';
import 'core-js/fn/string/includes';
import 'core-js/fn/string/starts-with';
import 'core-js/fn/object/get-own-property-symbols';

// import React from 'react';
// import { hydrate, render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import BrowserRouter from './BrowserRouter';

// const appElement = document.getElementById('app');

// const renderMethod = module.hot ? render : hydrate;

// renderMethod(
//   <AppContainer>
//     <BrowserRouter />
//   </AppContainer>,
//   appElement
// );

// if (module.hot) {
//   module.hot.accept('./BrowserRouter', () => {
//     const NextBrowserRouter = require('./BrowserRouter').default;

//     render(
//       <AppContainer>
//         <NextBrowserRouter />
//       </AppContainer>,
//       appElement
//     );
//   });
// }


import React from 'react';
import { hydrate } from 'react-dom';

import App from './components/App/App';

export default () => {
  hydrate(
    <App />,
    document.getElementById('app'),
  );
};
