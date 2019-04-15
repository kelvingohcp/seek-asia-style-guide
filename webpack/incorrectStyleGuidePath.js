const path = require('path');

const notTesting = process.env.NODE_ENV !== 'test';

const explicitlyResolvedIncorrectPath = path.resolve(
  __dirname,
  'node_modules/seek-asia-style-guide'
);
const resolvedPath = require.resolve('seek-asia-style-guide');

module.exports =
  notTesting && resolvedPath.indexOf(explicitlyResolvedIncorrectPath) > -1;
