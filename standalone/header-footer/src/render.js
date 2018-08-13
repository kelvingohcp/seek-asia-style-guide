import React from 'react';
import { renderToString } from 'react-dom/server';
import dedent from 'dedent';
import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';
import StandaloneProvider from './StandaloneProvider/StandaloneProvider';
import { Header } from 'seek-asia-style-guide/jobsDB';
import { Footer } from 'seek-asia-style-guide/jobsDB';
import { Constants } from 'seek-asia-style-guide/react';
const { ACTIVE_TAB_HOME } = Constants;
const renderHtml = (Component, initialProps, options = { preview: false }) => {
  const componentHtml = renderToString(
    <StandaloneProvider
      component={Component}
      initialProps={initialProps}
      registerPropsUpdater={() => {}}
    />
  );

  const html = `
    ${!options.preview ? '' : `
      <!DOCTYPE html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">html,body{padding:0;margin:0;}</style>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </head>
      <body>
    `}

    <div id="__SSG_${Component.displayName}__">${componentHtml}</div>
    <script type="text/javascript">window.__SSG_${Component.displayName}_props__ = ${serialize(initialProps)}</script>

    ${!options.preview ? '' : dedent`
      <script type="text/javascript" src="client.js"></script>
      <script type="text/javascript">
        // Create the instance
        window.seek${Component.displayName}Instance = SeekHeaderFooter.render${Component.displayName}();

        ${Component.displayName === 'Footer' ? `
          // Simulate company profile toggled
          seek${Component.displayName}Instance.updateProps({ hasCompanyProfile: true });
        ` : `
          // Simulate authenticating the user
          seek${Component.displayName}Instance.updateProps({ authenticationStatus: 'authenticated', userName: 'Olivia', domainUrl: 'jobsdb.com' });
        `}

      </script>
      </body>
    `}
  `;

  return minify(html, { collapseWhitespace: true });
};

const renderFiles = (Component, props = {}) => {
  if (typeof Component.displayName !== 'string') {
    throw new Error('Component must have a display name');
  }

  const tabSuffix = !props.activeTab ? '' :
    `__${props.activeTab.toLowerCase().replace(/ /g, '_').replace('$', '').replace('&', 'and')}`;
  const fileName = `${Component.displayName.toLowerCase()}__HK${tabSuffix}`;
  const renderProps = { ...props };

  return {
    [`/${fileName}.html`]: renderHtml(Component, renderProps),
    [`/${fileName}__preview.html`]: renderHtml(Component, renderProps, { preview: true })
  };
};

export default () => ({
  ...renderFiles(Header, { language: 'en', country: 'hk', loginAvailable: true, activeTab: ACTIVE_TAB_HOME }),
  ...renderFiles(Footer, { language: 'en', country: 'hk', isExpandedVersion: true })
});
