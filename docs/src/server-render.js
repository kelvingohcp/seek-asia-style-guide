import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import App from './components/App/App';

export default {
  renderApp: ({ SkuProvider, route }) =>
    renderToString(
      <SkuProvider>
        <StaticRouter location={route} context={{}}>
          <App  />
        </StaticRouter>
      </SkuProvider>,
    ),

  renderDocument: ({ app, bodyTags, headTags }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>My Awesome Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${headTags}
      </head>
      <body>
        <div id="app">${app}</div>
        ${bodyTags}
      </body>
    </html>
  `,
};