const baseUrl = 'https://jobstreet.com.my';
const baseUrlWithLanguage = `${baseUrl}/en`;
const accountBaseUrl = 'https://myjobstreet.jobstreet.com.my';

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
      url: `${baseUrlWithLanguage}/career/JobStreet.htm`
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
      url: 'https://myjobstreet.jobstreet.co.my/home/feedback.php?site=id&sub=feedback'
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
      url: 'https://myjobstreet.jobstreet.com.my/home/login.php?site=my'
    },
    companyProfiles: {
      title: 'Company Profiles',
      url: `${baseUrlWithLanguage}/companies/`
    },
    careerInsights: {
      title: 'Career Insights',
      url: `${baseUrlWithLanguage}/career-insights`
    },
    education: {
      title: 'Education',
      url: 'https://www.jobstreeteducation.com.my/'
    },
    signUp: {
      title: 'Sign up',
      url: 'https://myjobstreet.jobstreet.com.my/signup'
    },
    login: {
      title: 'Log in',
      url: 'https://myjobstreet.jobstreet.com.my/login'
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
    seperatorOr: 'or'
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

