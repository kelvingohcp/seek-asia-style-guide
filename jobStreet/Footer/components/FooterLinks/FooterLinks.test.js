import React from 'react';
import { shallow } from 'enzyme';
import FooterLinks from './FooterLinks';

const baseUrl = 'https://jobstreet.com.my';
const baseUrlWithLanguage = `${baseUrl}/en`;

const footerMessages = {
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
};

describe('FooterLinks component', () => {
  it('should render supplied messages', () => {
    const wrapper = shallow(<FooterLinks footerMessages={footerMessages} />);
    expect(wrapper).toMatchSnapshot();
  });
});
