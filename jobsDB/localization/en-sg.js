import FlagSGIcon from '../../react/FlagSGIcon/FlagSGIcon';
import partners from './partners';

const domain = 'www.jobstreet.com.sg';
const baseUrl = `https://${domain}`;
const baseUrlWithLanguage = `${baseUrl}/en`;
const aboutUrl = `${baseUrlWithLanguage}/about-us`;
const companiesUrl = `${baseUrlWithLanguage }/companies`;
const employersUrl = `${baseUrl}/employers`;

export default {
  menu: {
    countryList: [{
      title: 'Singapore (English)',
      ItemIcon: FlagSGIcon,
      url: '',
      language: 'en',
      country: 'sg',
      languageDisplay: 'English'
    }]
  },
  footer: {
    copyright: 'Copyright ©, jobStreet.com.',
    rightReserved: 'All Rights Reserved.',
    siteMap: {
      title: 'Site Map',
      url: `${baseUrl}/sitemap.htm`
    },
    terms: {
      title: 'Terms & Conditions',
      url: `${aboutUrl}/terms-of-use`
    },
    privacy: {
      title: 'Privacy Statement',
      url: `${aboutUrl}/privacy-policy`
    },
    about: {
      title: 'About JobStreet',
      about: {
        title: 'About Us',
        url: `${aboutUrl}/`
      },
      career: {
        title: 'Career @ JobStreet',
        url: `${companiesUrl}/491262-jobstreet`
      },
      contact: {
        title: 'Contact Us',
        url: `${aboutUrl}/contact-us-singapore`
      },
      news: {
        title: 'News & Events',
        url: `${baseUrl}/aboutus/press_releases.htm`
      },
      help: {
        title: 'FAQ',
        url: `${baseUrlWithLanguage}/user/`
      },
      feedback: {
        title: 'Send Feedback',
        url: 'https://myjobstreet.jobstreet.com.sg/home/feedback.php?site=sg&sub=feedback'
      }
    },
    jobSeeker: {
      title: 'Job Seekers',
      jobsBySpecialisation: {
        title: 'Jobs by Specialisation',
        url: `${baseUrlWithLanguage}/job-search/find-specialization?sal=1` // Do we need it??
      },
      jobsByCompany: {
        title: 'Jobs by Company Name',
        url: `${baseUrlWithLanguage}/job-search/find-company?c=a` // Do we need it??
      },
      safeJobSearch: {
        title: 'Safe Job Search Guide',
        url: `${aboutUrl}/safe-job-search-guide/`
      },
      careerResources: {
        title: 'Career Resources',
        url: `${baseUrl}/career-resources`
      },
      testimonials: {
        title: 'Testimonials',
        url: `${aboutUrl}/testimonials`
      }
    },
    employers: {
      title: 'Employers',
      postJob: {
        title: 'Post a Job Ad',
        url: `${baseUrl}/employers`
      },
      postClassified: {
        title: 'Post a Classified Ad',
        url: `${employersUrl}/jobstreet-com-classifieds`
      },
      searchCandidates: {
        title: 'Search for Resumes',
        url: `${employersUrl}/jobstreet-resume-search`
      },
      advertise: {
        title: 'Advertise With Us',
        url: `${employersUrl}/jobstreet-com-products-services`
      },
      companies: {
        title: 'Company Profiles',
        url: companiesUrl
      }
    },
    connect: {
      title: 'Connect',
      facebook: {
        title: 'Facebook',
        url: 'https://www.facebook.com/JobStreetSingapore',
        icon: 'facebook'
      },
      twitter: {
        title: 'Twitter',
        url: 'https://twitter.com/JobStreetSG',
        icon: 'twitter'
      },
      appStore: {
        title: 'JobStreet @ App Store',
        url: 'https://itunes.apple.com/sg/app/jobstreet/id367294492',
        icon: 'apple'
      },
      playStore: {
        title: 'JobStreet @ Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.jobstreet.jobstreet&hl=en',
        icon: 'android'
      }
    },
    partners
  }
};
