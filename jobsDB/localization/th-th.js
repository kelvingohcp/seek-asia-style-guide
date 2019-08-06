import FlagHKIcon from '../../react/FlagHKIcon/FlagHKIcon';
import FlagIDIcon from '../../react/FlagIDIcon/FlagIDIcon';
import FlagSGIcon from '../../react/FlagSGIcon/FlagSGIcon';
import FlagTHIcon from '../../react/FlagTHIcon/FlagTHIcon';
import partners from './partners';

const baseUrl = 'https://th.jobsdb.com';
const baseUrlWithLanguage = `${baseUrl}/th/th`;
const wpUrlWithLanguage = `${baseUrl}/th-th`;
const mbaseUrl = 'https://m.jobsdb.co.th';
const mUrlWithLanguage = `${mbaseUrl}/th-th`;

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
      url: `${baseUrl}/th/th/MyJobsDB/resumes-and-documents`
    },
    applicationHistoryList: {
      title: 'Application History',
      url: `${baseUrl}/th/th/MyJobsDB/ApplictationHistoryList`
    },
    jobAlertsList: {
      title: 'Job Alerts',
      url: `${baseUrl}/th/th/MyJobsDB/JobAlertsList`
    },
    saveJobs: {
      title: 'Save Jobs',
      url: `${mUrlWithLanguage}/saveJobs.do`
    },
    jobsDBTitle: {
      title: 'My jobsDB',
      url: `${baseUrl}/th/th/MyJobsDB`
    },
    resources: {
      title: 'บทความงาน',
      url: `${baseUrl}/th-th/career-recruitment-advice/`
    },
    careerInsights: {
      title: 'Campnet',
      url: `${baseUrl}/th-th/pages/jobsdb-campnet`
    },
    profile: {
      title: 'ดูโปรไฟล์',
      url: `${baseUrl}/th/th/MyJobsDB/profile`
    },
    invitation: {
      title: 'คำเชิญให้สมัครงาน',
      url: `${baseUrl}/th/th/Invitations/InvitationList`
    },
    logout: {
      title: 'ออกจากระบบ',
      url: `${baseUrl}/th/th/login/jobseekerlogoff`
    },
    signUp: {
      title: 'ลงทะเบียน',
      url: `${baseUrl}/th/th/jobseeker/registration`
    },
    login: {
      title: 'เข้าสู่ระบบ',
      url: `${baseUrl}/th/th/login/jobseekerlogin?from=header`
    },
    employer: {
      title: 'สำหรับผู้ประกอบการ',
      url: `${baseUrl}/th/th/home/employerindex`
    },
    homeTitle: 'หน้าหลัก',
    homeUrlText: 'jobsDB.com',
    homeUrl: '/th/th',
    downloadApp: 'Download Our App',
    seperatorOr: 'หรือ',
    searchUrl: '/TH/TH/Search/FindJobs?JSRV=1&page=1'
  },
  menu: {
    jobSeekerHeader: 'ผู้หางาน',
    jobSeekerProfile: 'โปรไฟล์',
    settingsHeader: 'การตั้งค่า',
    more: 'More',
    moreHeader: 'MORE',
    countryAndLanguage: 'ประเทศ และ ภาษา',
    backToMenu: 'กลับสู่หน้าเมนู',
    countryList: [ {
      title: 'ฮ่องกง (English)',
      ItemIcon: FlagHKIcon,
      url: '',
      language: 'en',
      country: 'hk',
      languageDisplay: 'English'
    }, {
      title: 'อินโดนีเซีย (English)',
      ItemIcon: FlagIDIcon,
      url: '',
      language: 'en',
      country: 'id',
      languageDisplay: 'English'
    }, {
      title: 'อินโดนีเซีย (Bahasa)',
      ItemIcon: FlagIDIcon,
      url: '',
      language: 'id',
      country: 'id',
      languageDisplay: 'Bahasa'
    }, {
      title: 'สิงคโปร์ (English)',
      ItemIcon: FlagSGIcon,
      url: '',
      language: 'en',
      country: 'sg',
      languageDisplay: 'English'
    }, {
      title: 'ไทย (English)',
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
    copyright: 'สงวนลิขสิทธิ์ 1998-{year} jobsDB',
    rightReserved: '',
    cmsLink: '/th-th',
    cfsLink: '/th/th',
    siteMap: {
      title: 'แผนที่เว็บไซต์',
      url: `${baseUrlWithLanguage}/sitemap`
    },
    terms: {
      title: 'ข้อกำหนดและเงื่อนไข',
      url: `${wpUrlWithLanguage}/pages/terms/terms-conditions`
    },
    privacy: {
      title: 'คำชี้แจงสิทธิส่วนบุคคล',
      url: `${wpUrlWithLanguage}/pages/terms/privacy-policy`
    },
    legal: {
      title: 'ข้อกำหนดทางกฎหมาย',
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
