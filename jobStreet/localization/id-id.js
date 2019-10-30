const baseUrl = 'https://jobstreet.co.id';
const baseUrlWithLanguage = `${baseUrl}/id`;
const accountBaseUrl = 'https://myjobstreet.jobstreet.co.id';

export default {
  footer: {
    copyright: 'Hak Cipta © {year} JobStreet.com',
    link: {
      title: 'JobStreet International',
      url: 'https://www.jobstreet.com'
    },
    siteMap: {
      title: 'Site Map',
      url: `${baseUrl}/sitemap.htm`
    },
    about: {
      title: 'Tentang Kami',
      url: `${baseUrlWithLanguage}/about-us/`
    },
    profile: {
      title: 'Berkarier bersama Kami',
      url: `${baseUrl}/en/companies/778589-jobstreet`
    },
    terms: {
      title: 'Ketentuan Penggunaan',
      url: `${baseUrlWithLanguage}/about-us/ketentuan-penggunaan/`
    },
    privacy: {
      title: 'Kebijakan Kerahasiaan',
      url: `${baseUrlWithLanguage}/about-us/kebijakan-privasi/`
    },
    safe: {
      title: 'Panduan Mencari Kerja Secara Aman',
      url: `${baseUrlWithLanguage}/about-us/panduan-dan-tips-mencari-kerja-online-secara-aman/`
    },
    help: {
      title: 'Bantuan',
      url: `${baseUrlWithLanguage}/user/`
    },
    feedback: {
      title: 'Kirim Saran',
      url: 'https://myjobstreet.jobstreet.co.id/home/feedback.php?site=id&sub=feedback'
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
      url: {
        home: 'https://myjobstreet.jobstreet.co.id/home/login.php?site=id&language_code=7',
        jobListing: 'https://myjobstreet.jobstreet.co.id/home/login.php?site=id&language_code=7&go=JOB-LISTING&nrfr=1',
        jobAd: 'https://myjobstreet.jobstreet.com.id/home/login.php?site=id&language_code=7&go=JOB-ADS&nrfr=1'
      }
    },
    mobileLogoutUrl: `${accountBaseUrl}/home/logout.php`,
    mobileLoginUrl: {
      home: 'https://myjobstreet.jobstreet.co.id/home/login.php?site=id&language_code=7',
      jobListing: 'https://myjobstreet.jobstreet.co.id/home/login.php?site=id&language_code=7&go=JOB-LISTING&nrfr=1',
      jobAd: 'https://myjobstreet.jobstreet.co.id/home/login.php?site=id&language_code=7&go=JOB-ADS&nrfr=1'
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
