const baseUrl = 'https://www.jobstreet.com.sg';
const baseUrlWithLanguage = `${baseUrl}/en`;
const accountBaseUrl = 'https://myjobstreet.jobstreet.com.sg';

export default {
  footer: {
    copyright: 'Copyright © {year} JobStreet.com',
    link: {
      title: 'JobStreet International',
      url: 'https://www.jobstreet.com'
    },
    siteMap: {
      title: 'Site Map',
      url: `${baseUrl}/sitemap.htm`
    },
    about: {
      title: 'About Us',
      url: `${baseUrlWithLanguage}/about-us/`
    },
    profile: {
      title: 'Work With Us',
      url: `${baseUrl}/career/JobStreet.htm`
    },
    terms: {
      title: 'Term of Use',
      url: `${baseUrlWithLanguage}/about-us/terms-of-use/`
    },
    privacy: {
      title: 'Privacy Policy',
      url: `${baseUrlWithLanguage}/about-us/privacy-policy/`
    },
    safe: {
      title: 'Safe Job Search Guide',
      url: `${baseUrlWithLanguage}/about-us/safe-job-search-guide/`
    },
    help: {
      title: 'Help',
      url: `${baseUrlWithLanguage}/user/`
    },
    feedback: {
      title: 'Send Feedback',
      url: 'https://myjobstreet.jobstreet.co.sg/home/feedback.php?site=id&sub=feedback'
    }
  },
  header: {
    overseasJobs: {
      title: 'Overseas Jobs',
      url: `${baseUrlWithLanguage}/job-search/browse/find-overseas-jobs`
    },
    freshGradJobs: {
      title: 'Fresh Grad Jobs',
      url: `${baseUrlWithLanguage}/job-search/campus/job-vacancy.php`
    },
    classifiedJobs: {
      title: 'Classified Jobs',
      url: `${baseUrlWithLanguage}/job-search/classified-ads.php`
    },
    home: {
      title: 'Home',
      url: baseUrl
    },
    myJobStreet: {
      title: 'MyJobStreet',
      url: `${accountBaseUrl}/home/login.php?site=sg`
    },
    companyProfiles: {
      title: 'Company Profiles',
      url: `${baseUrlWithLanguage}/companies`
    },
    education: {
      title: 'Training',
      url: 'https://www.jobstreet.com.sg/learning'
    },
    signUp: {
      title: 'Sign up',
      url: 'https://myjobstreet.jobstreet.com.sg/registration/simple-signup.php?site=sg&language_code=3'
    },
    login: {
      title: 'Log in',
      url: 'https://myjobstreet.jobstreet.com.sg/home/login.php?site=sg&language_code=3'
    },
    employer: {
      title: 'Employer Site',
      url: `${baseUrlWithLanguage}/cms/employer`
    },
    account: { 
      title: 'Account',
      url: `${accountBaseUrl}/registration/update-account.php`
    },
    invitation: {
      title: 'Invitation',
      url: `${accountBaseUrl}/application/interview-request.php?view=latest`
    },
    logout: {
      title: 'Logout',
      url: `${accountBaseUrl}/home/logout.php`
    },
    homeUrlText: 'JobStreet.com',
    seperatorOr: 'or',
    mobileLogoutUrl: `${accountBaseUrl}/home/logout.php`,
    mobileLoginUrl: 'https://myjobstreet.jobstreet.com.sg/home/login.php?site=sg&language_code=3',
  },
  menu: {
    jobSeekerHeader: 'JOB SEEKER',
    settingsHeader: 'SETTINGS',
    more: 'More',
    moreHeader: 'MORE',
    countryAndLanguage: 'Country & Language',
    backToMenu: 'Back to Menu'
  }
};
