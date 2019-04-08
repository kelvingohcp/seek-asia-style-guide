const baseUrl = 'https://jobstreet.vn';
const baseUrlWithLanguage = `${baseUrl}/en`;

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
      url: `${baseUrlWithLanguage}/companies/762582-jobstreet-company-limited-vn`
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
      url: 'https://myjobstreet.jobstreet.vn/home/feedback.php?site=vn&sub=feedback'
    }
  }
};
