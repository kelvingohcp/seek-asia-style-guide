import FlagHKIcon from '../../react/FlagHKIcon/FlagHKIcon';
import FlagIDIcon from '../../react/FlagIDIcon/FlagIDIcon';
import FlagSGIcon from '../../react/FlagSGIcon/FlagSGIcon';
import FlagTHIcon from '../../react/FlagTHIcon/FlagTHIcon';
import partners from './partners';

const baseUrl = 'https://th.jobsdb.com';
const baseUrlWithLanguage = `${baseUrl}/th/en`;
const wpUrlWithLanguage = `${baseUrl}/en-th`;
const mbaseUrl = 'https://m.jobsdb.co.th';
const mUrlWithLanguage = `${mbaseUrl}/en-th`;

export default {
  header: {
    playStore: {
      title: 'Google Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.jobsdb&utm_campaign=MobileNavigationMenuAppDownload&utm_source=MobileNavigationMenu&utm_medium=banner'
    },
    appStore: {
      title: 'App Store',
      url: 'https://itunes.apple.com/th/app/jobsdb-job-search/id414607432?utm_campaign=MobileNavigationMenuAppDownload&utm_source=MobileNavigationMenu&utm_medium=banner'
    },
    resumesAndDocuments: {
      title: 'Resumes and Documents',
      url: `${baseUrl}/th/en/MyJobsDB/resumes-and-documents`
    },
    applicationHistoryList: {
      title: 'Application History',
      url: `${baseUrl}/th/en/MyJobsDB/ApplictationHistoryList`
    },
    jobAlertsList: {
      title: 'Job Alerts',
      url: `${baseUrl}/th/en/MyJobsDB/JobAlertsList`
    },
    saveJobs: {
      title: 'Save Jobs',
      url: `${mUrlWithLanguage}/saveJobs.do`
    },
    jobsDBTitle: {
      title: 'My jobsDB',
      url: `${baseUrl}/th/en/MyJobsDB`
    },
    resources: {
      title: 'Resources',
      url: `${baseUrl}/en-th/career-recruitment-advice/`
    },
    careerInsights: {
      title: 'Campnet',
      url: `${baseUrl}/th-th/pages/jobsdb-campnet`
    },
    profile: {
      title: 'View profile',
      url: `${baseUrl}/th/en/MyJobsDB/profile`
    },
    invitation: {
      title: 'Job invitations',
      url: `${baseUrl}/th/en/Invitations/InvitationList`
    },
    logout: {
      title: 'Log out',
      url: `${baseUrl}/th/en/login/jobseekerlogoff`
    },
    signUp: {
      title: 'Sign up',
      url: `${baseUrl}/th/en/jobseeker/registration`
    },
    login: {
      title: 'Log in',
      url: `${baseUrl}/th/en/login/jobseekerlogin?from=header`
    },
    employer: {
      title: 'For Employers',
      url: `${baseUrl}/th/en/home/employerindex`
    },
    homeTitle: 'Home',
    homeUrlText: 'jobsDB.com',
    homeUrl: '/th',
    downloadApp: 'Download Our App',
    seperatorOr: 'or',
    searchUrl: '/TH/EN/Search/FindJobs?JSRV=1&page=1'
  },
  menu: {
    jobSeekerHeader: 'JOB SEEKER',
    jobSeekerProfile: 'PROFILE',
    settingsHeader: 'SETTINGS',
    more: 'More',
    moreHeader: 'MORE',
    countryAndLanguage: 'Country & Language',
    backToMenu: 'Back to menu',
    countryList: [ {
      title: 'Hong Kong (English)',
      ItemIcon: FlagHKIcon,
      url: '',
      language: 'en',
      country: 'hk',
      languageDisplay: 'English'
    }, {
      title: 'Indonesia (English)',
      ItemIcon: FlagIDIcon,
      url: '',
      language: 'en',
      country: 'id',
      languageDisplay: 'English'
    }, {
      title: 'Indonesia (Bahasa)',
      ItemIcon: FlagIDIcon,
      url: '',
      language: 'id',
      country: 'id',
      languageDisplay: 'Bahasa'
    }, {
      title: 'Singapore (English)',
      ItemIcon: FlagSGIcon,
      url: '',
      language: 'en',
      country: 'sg',
      languageDisplay: 'English'
    }, {
      title: 'Thailand (English)',
      ItemIcon: FlagTHIcon,
      url: '',
      language: 'en',
      country: 'th',
      languageDisplay: 'English'
    }, {
      title: 'ไทย (ภาษาไทย)',
      ItemIcon: FlagTHIcon,
      url: '',
      language: 'th',
      country: 'th',
      languageDisplay: 'ภาษาไทย'
    } ]
  },
  footer: {
    copyright: 'Copyright © 1998-{year}, jobsDB.',
    rightReserved: 'All Rights Reserved.',
    cmsLink: '/en-th',
    cfsLink: '/th/en',
    siteMap: {
      title: 'Site Map',
      url: `${baseUrlWithLanguage}/sitemap`
    },
    terms: {
      title: 'Terms & Conditions',
      url: `${wpUrlWithLanguage}/pages/terms/terms-conditions`
    },
    privacy: {
      title: 'Privacy Statement',
      url: `${wpUrlWithLanguage}/pages/terms/privacy-policy`
    },
    legal: {
      title: 'Legal terms',
      url: `${mUrlWithLanguage}/legal.do`
    },
    about: {
      title: 'About JobsDB',
      about: {
        title: 'About jobsDB',
        url: `${wpUrlWithLanguage}/pages/aboutus`
      },
      faq: {
        title: 'FAQ',
        url: `${baseUrlWithLanguage}/StaticContentFullContainer/AboutUS/faq/index.htm`
      },
      career: {
        title: 'Career @ jobsDB',
        url: `${baseUrlWithLanguage}/jobs/companies/jobsdb-hong-kong-limited/1`
      },
      contactUs: {
        title: 'Contact us',
        url: `${wpUrlWithLanguage}/pages/regional-coverage`,
        mobileUrl: 'https://m.jobsdb.com/en-hk/legal.do?p=contact_us'
      }
    },
    jobSeeker: {
      title: 'Job Seekers',
      browse: {
        title: 'Browse jobs',
        url: `${baseUrlWithLanguage}/browse`
      },
      resumes: {
        title: 'Post resumes',
        url: `${baseUrlWithLanguage}/Resumes/ResumeIndex`
      },
      jobAlerts: {
        title: 'Job Alerts',
        url: `${baseUrlWithLanguage}/JobAlert/JobAlertCreation`
      },
      myJobsDB: {
        title: 'My jobsDB',
        url: `${baseUrlWithLanguage}/MyJobsDB`
      },
      careerInsights: {
        title: 'Career Insights',
        url: `${baseUrlWithLanguage}/career-insights`
      }
    },
    employers: {
      title: 'Employers',
      postJob: {
        title: 'Post a Job Ad',
        url: `${wpUrlWithLanguage}/cms/employer/product-services/job-ads/`
      },
      searchCandidates: {
        title: 'Search candidates',
        url: `${wpUrlWithLanguage}/cms/employer/product-services/talent-search/`
      },
      advertise: {
        title: 'Advertise with us',
        url: `${wpUrlWithLanguage}/cms/employer/product-and-services/`
      },
      bestCompanies: {
        title: 'Best Companies',
        url: `${baseUrlWithLanguage}/companies`
      }
    },
    connect: {
      title: 'Connect',
      facebook: {
        title: 'Facebook',
        url: 'https://www.facebook.com/JobsDB.HongKong'
      },
      twitter: {
        title: 'Twitter',
        url: 'https://twitter.com/HKJobs'
      },
      playStore: {
        title: 'jobsDB @ Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.jobsdb'
      },
      appStore: {
        title: 'jobsDB @ App Store',
        url: 'https://itunes.apple.com/hk/app/jobsdb-job-search/id414607432'
      }
    },
    partners
  }
};
