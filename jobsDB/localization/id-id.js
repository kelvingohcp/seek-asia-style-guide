import FlagHKIcon from '../../react/FlagHKIcon/FlagHKIcon';
import FlagIDIcon from '../../react/FlagIDIcon/FlagIDIcon';
import FlagSGIcon from '../../react/FlagSGIcon/FlagSGIcon';
import FlagTHIcon from '../../react/FlagTHIcon/FlagTHIcon';
import partners from './partners';

const baseUrl = 'https://id.jobsdb.com';
const baseUrlWithLanguage = `${baseUrl}/id/id`;
const wpUrlWithLanguage = `${baseUrl}/id-id`;
const mbaseUrl = 'https://m.jobsdb.co.id';
const mUrlWithLanguage = `${mbaseUrl}/id-id`;

export default {
  header: {
    playStore: {
      title: 'Google Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.jobsdb&utm_campaign=MobileNavigationMenuAppDownload&utm_source=MobileNavigationMenu&utm_medium=banner'
    },
    appStore: {
      title: 'App Store',
      url: 'https://itunes.apple.com/id/app/jobsdb-job-search/id414607432?utm_campaign=MobileNavigationMenuAppDownload&utm_source=MobileNavigationMenu&utm_medium=banner'
    },
    resumesAndDocuments: {
      title: 'Resumes and Documents',
      url: `${baseUrl}/id/id/MyJobsDB/resumes-and-documents`
    },
    applicationHistoryList: {
      title: 'Application History',
      url: `${baseUrl}/id/id/MyJobsDB/ApplictationHistoryList`
    },
    jobAlertsList: {
      title: 'Job Alerts',
      url: `${baseUrl}/id/id/MyJobsDB/JobAlertsList`
    },
    saveJobs: {
      title: 'Save Jobs',
      url: `${mUrlWithLanguage}/saveJobs.do`
    },
    jobsDBTitle: {
      title: 'My jobsDB',
      url: `${baseUrl}/id/id/MyJobsDB`
    },
    resources: {
      title: 'Tips Dunia Kerja',
      url: `${baseUrl}/id-id/career-recruitment-advice/`
    },
    careerInsights: {
      title: 'Event',
      url: `${baseUrl}/id-id/pages/event`
    },
    profile: {
      title: 'Lihat profil',
      url: `${baseUrl}/id/id/MyJobsDB/profile`
    },
    invitation: {
      title: 'Panggilan kerja',
      url: `${baseUrl}/id/ID/Invitations/InvitationList`
    },
    logout: {
      title: 'Keluar',
      url: `${baseUrl}/id/en/login/jobseekerlogoff`
    },
    signUp: {
      title: 'Daftar',
      url: `${baseUrl}/id/id/jobseeker/registration`
    },
    login: {
      title: 'Masuk',
      url: `${baseUrl}/id/id/login/jobseekerlogin?from=header`
    },
    employer: {
      title: 'Situs Perusahaan',
      url: `${baseUrl}/id/id/home/employerindex`
    },
    homeTitle: 'Beranda',
    homeUrlText: 'jobsDB.com',
    homeUrl: '/id/id',
    downloadApp: 'Download Our App',
    seperatorOr: 'atau',
    searchUrl: '/ID/ID/Search/FindJobs?JSRV=1&page=1'
  },
  menu: {
    jobSeekerHeader: 'KANDIDAT',
    jobSeekerProfile: 'PROFIL',
    settingsHeader: 'PENGATURAN',
    more: 'More',
    moreHeader: 'MORE',
    countryAndLanguage: 'Negara & Bahasa',
    backToMenu: 'Kembali ke menu',
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
      title: 'Singapura (English)',
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
    copyright: 'Hak Cipta© 1998-{year}, jobsDB.',
    rightReserved: 'Semua Hak Dilindungi.',
    cmsLink: '/id-id',
    cfsLink: '/id/id',
    siteMap: {
      title: 'Site Map',
      url: `${baseUrlWithLanguage}/sitemap`
    },
    terms: {
      title: 'Syarat dan ketentuan',
      url: `${wpUrlWithLanguage}/pages/terms/terms-conditions`
    },
    privacy: {
      title: 'Pernyataan Privasi',
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
        url: `${baseUrlWithLanguage}/jobs/companies/jobsdb-hong-kong/1`
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
