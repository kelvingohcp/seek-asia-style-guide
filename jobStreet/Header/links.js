const userLoggedOutNavLinks = [
  {
    href: 'header.homeLink',
    title: 'header.homeTitle',
    text: 'header.homeText',
    childLinks: []
  },
  {
    href: 'header.searchLink',
    title: 'header.searchTitle',
    text: 'header.searchText',
    childLinks: []
  },
  {
    href: 'header.myJobStreetLink',
    title: 'header.myJobStreetTitle',
    text: 'header.myJobStreetText',
    childLinks: []
  },
  {
    href: 'header.companyProfilesLink',
    title: 'header.companyProfilesTitle',
    text: 'header.companyProfilesText',
    childLinks: []
  },
  {
    href: 'header.careerInsightsLink',
    title: 'header.careerInsightsTitle',
    text: 'header.careerInsightsText',
    childLinks: []
  },
  {
    href: 'header.jobStreetEducationLink',
    title: 'header.jobStretEducationTitle',
    text: 'header.jobStreetEducationText',
    childLinks: []
  },
  {
    href: 'header.moreLink',
    title: 'header.moreTitle',
    text: 'header.moreText',
    hideOnMobile: true,
    childLinks: [
      {
        href: 'header.overseasJobsLink',
        title: 'header.overseasJobsTitle',
        text: 'header.overseasJobsText'
      },
      {
        href: 'header.freshGradJobsLink',
        title: 'header.freshGradJobsTitle',
        text: 'header.freshGradJobsText'
      },
      {
        href: 'header.classifiedJobsLink',
        title: 'header.classifiedJobsTitle',
        text: 'header.classifiedJobsText'
      }
    ]
  }
];

const getNavLinks = (name, xToken) => {
  if (name && name.length) {
    return userLoggedOutNavLinks.map(link => {
      if (link.text === 'header.myJobStreetText') {
        return {
          ...link,
          href: 'header.myJobStreetLoggedInLink',
          hrefParams: {
            x: xToken
          }
        };
      }

      return link;
    });
  }

  return userLoggedOutNavLinks;
};

const userLoggedOutLinks = [
  {
<<<<<<< HEAD
    href: 'shell.navLoginLink',
    title: 'shell.navLoginTitle',
    text: 'Log In',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'shell.navSignUpLink',
    title: 'shell.navSignUpTitle',
    text: 'Sign Up',
    hasIcon: false,
=======
    href: 'header.loginLink',
    title: 'header.loginTitle',
    text: 'header.loginText',
    hasRightSideDivider: true,
    childLinks: []
  },
  {
    href: 'header.signUpLink',
    title: 'header.signUpTitle',
    text: 'header.signUpText',
>>>>>>> master
    childLinks: []
  }
];

<<<<<<< HEAD
const getUserLinks = candidate => {
  const isUserLoggedIn = isObject(candidate);
  return isUserLoggedIn ?
    [
      {
        href: '',
        title: candidate.username,
        text: candidate.username,
        preventTranslation: true,
        hasIcon: false,
        childLinks: [
          {
            href: 'shell.navLogoutLink',
            title: 'shell.navLogoutTitle',
            text: 'shell.navLogoutText'
          },
          {
            href: 'shell.navHelpLink',
            title: 'shell.navHelpTitle',
            text: 'shell.navHelpText'
          },
          {
            href: 'shell.navAccountLink',
            hrefParams: {
              id: candidate.id
            },
            title: 'shell.navAccountTitle',
            text: 'shell.navAccountText'
          }
        ]
      }
    ] :
    userLoggedOutLinks;
};

export default {
  navLinks,
=======
const getUserLinks = (name, xToken) => {
  return (name && name.length) ? [
    {
      href: '#',
      title: name,
      text: name,
      preventTranslation: true,
      childLinks: [
        {
          href: 'header.logoutLink',
          hrefParams: {
            x: xToken
          },
          title: 'header.logoutTitle',
          text: 'header.logoutText'
        },
        {
          href: 'header.helpLink',
          hrefParams: {
            x: xToken
          },
          title: 'header.helpTitle',
          text: 'header.helpText',
          hideOnMobile: true,
          hasDivider: true
        },
        {
          href: 'header.myAccountLink',
          hrefParams: {
            x: xToken
          },
          title: 'header.myAccountTitle',
          text: 'header.myAccountText',
          hideOnMobile: true
        }
      ]
    }
  ] : userLoggedOutLinks;
};

export default {
  getNavLinks,
>>>>>>> master
  getUserLinks
};
