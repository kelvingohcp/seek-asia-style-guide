(async () => {
  try {
    console.log('Posting commit status to GitHub...');
     const { GH_TOKEN, CIRCLE_SHA1 } = process.env;
     if (!GH_TOKEN || !CIRCLE_SHA1) {
      throw new Error(
        'GH_TOKEN and CIRCLE_SHA1 environment variables must be present'
      );
    }
     const octokit = require('@octokit/rest')();
     octokit.authenticate({
      type: 'token',
      token: GH_TOKEN
    });
     await octokit.repos.createStatus({
      owner: 'seekinternational',
      repo: 'seek-asia-style-guide',
      sha: CIRCLE_SHA1,
      state: 'success',
      context: 'Preview Site',
      target_url: `https://seek-asia-style-guide--${CIRCLE_SHA1}.surge.sh`,
      description: 'The preview for this PR has been successfully deployed'
    });
     console.log('Successfully posted commit status to GitHub');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();