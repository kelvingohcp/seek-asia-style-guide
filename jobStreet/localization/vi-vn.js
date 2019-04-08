const baseUrl = 'https://jobstreet.vn';
const baseUrlWithLanguage = `${baseUrl}/vi`;

export default {
  footer: {
    copyright: 'Copyright © {year} JobStreet.com',
    link: {
      title: 'JobStreet Quốc Tế',
      url: 'https://www.jobstreet.com'
    },
    siteMap: {
      title: 'Site Map',
      url: `${baseUrl}/sitemap.htm`
    },
    about: {
      title: 'Về JobStreet',
      url: `${baseUrlWithLanguage}/about-us/`
    },
    profile: {
      title: 'Cơ Hội Nghề Nghiệp',
      url: `${baseUrl}/companies/762582-jobstreet-company-limited-vn`
    },
    terms: {
      title: 'Điều Khoản Sử Dụng',
      url: `${baseUrlWithLanguage}/about-us/chinh-sach-bao-mat/`
    },
    privacy: {
      title: 'Chính Sách Bảo Mật',
      url: `${baseUrlWithLanguage}/about-us/kebijakan-privasi/`
    },
    safe: {
      title: 'Mẹo Tìm Việc An Toàn',
      url: `${baseUrlWithLanguage}/about-us/huong-dan-va-bi-quyet-tim-viec-truc-tuyen-an-toan/`
    },
    help: {
      title: 'Trợ Giúp',
      url: `${baseUrlWithLanguage}/user/`
    },
    feedback: {
      title: 'Gửi Phản Hồi',
      url: 'https://myjobstreet.jobstreet.vn/home/feedback.php?site=vn&sub=feedback'
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
