import React from 'react';
import { shallow } from 'enzyme';
import headerMessage from '../../mock/headerMessage';
import menuMessage from '../../mock/menuMessage';

import Menu from './Menu';

describe('Menu', () => {
  const FakeIcon = () => {
    return (<div>I'm an icon!</div>);
  };

  const defaultProps = {
    brandStyles: {
      employerLink: 'employerLink'
    },
    linkUrl: '/test',
    messages: {
      'header.employerSiteUrl': 'http://brand.seekasia.com',
      'header.employerSiteTitle': 'Awesome employers click here',
      'menu.backToMenu': 'Get back!',
      'menu.jobSeekerHeader': 'JOB SEEKER',
      'menu.settingsHeader': 'SETTINGS',
      'menu.more': 'More',
      'menu.moreHeader': 'MORE',
      'menu.countryAndLanguage': 'Country & Language',
      'header.loginUrl': '/hk/en/login/jobseekerlogin',
      'header.signupUrl': '/hk/en/jobseeker/registration',
      'header.profileTitle': 'Header Profile Title',
      'header.invitationTitle': 'Header Invitation Title',
      'header.logoutTitle': 'Header Logout Title',
      'header.loginTitle': 'Header Login Title',
      'header.signupTitle': 'Header Signup Title'
    },
    locales: [{
      title: 'Hong Kong (English)',
      ItemIcon: FakeIcon,
      url: 'https://hk.jobsdb.com/hk',
      language: 'en',
      country: 'hk'
    }, {
      title: 'Indonesia (English)',
      ItemIcon: FakeIcon,
      url: 'https://id.jobsdb.com/id',
      language: 'en',
      country: 'id'
    }],
    authenticationStatus: 'unauthenticated',
    userName: 'Olivia',
    baseUrl: 'http://seekasia.com',
    menuMessage,
    headerMessage,
    pageType: 'home'
  };

  const mockLinks = [
    { title: 'Home', url: 'http://seekasia.com/home', ItemIcon: FakeIcon },
    { title: 'MyPortal', url: 'http://seekasia.com/myPortal', ItemIcon: FakeIcon },
    { title: 'Resources', url: 'http://seekasia.com/resources', ItemIcon: FakeIcon },
    { title: 'CareerInsights', url: 'http://seekasia.com/career-insights', ItemIcon: FakeIcon }
  ];

  it('should render with default props', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with links list', () => {
    const testProps = {
      ...defaultProps,
      links: mockLinks
    };
    const wrapper = shallow(<Menu {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with more links', () => {
    const testProps = {
      ...defaultProps,
      links: mockLinks,
      more: [
        { title: 'Overseas Jobs', url: 'http://seekasia.com/overseas-jobs', ItemIcon: FakeIcon },
        { title: 'Fresh Grad Jobs', url: 'http://seekasia.com/fresh-grad-jobs', ItemIcon: FakeIcon },
        { title: 'Classified Jobs', url: 'http://seekasia.com/classified-jobs', ItemIcon: FakeIcon }
      ]
    };
    const wrapper = shallow(<Menu {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with sub links', () => {
    const testProps = {
      ...defaultProps,
      links: [{ title: 'Title', url: 'http://seekasia.com/any', ItemIcon: FakeIcon, children: mockLinks }]
    };
    const wrapper = shallow(<Menu {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with menu open', () => {
    const testProps = {
      ...defaultProps,
      shouldShowMenu: true
    };
    const wrapper = shallow(<Menu {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render when authenticated', () => {
    const testProps = {
      ...defaultProps,
      authenticationStatus: 'authenticated',
      userName: 'Olivia'
    };
    const wrapper = shallow(<Menu {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render when unauthenticated', () => {
    const testProps = {
      ...defaultProps,
      authenticationStatus: 'unauthenticated'
    };
    expect(testProps).toMatchSnapshot();
  });

  it('should render with menu open with extra space', () => {
    const testProps = {
      ...defaultProps,
      shouldShowMenu: true,
      shouldShowMenuWithSpace: true
    };
    const wrapper = shallow(<Menu {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render with menu open even allow extra space', () => {
    const testProps = {
      ...defaultProps,
      shouldShowMenu: false,
      shouldShowMenuWithSpace: true
    };
    const wrapper = shallow(<Menu {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with menu without extra space', () => {
    const testProps = {
      ...defaultProps,
      shouldShowMenu: true,
      shouldShowMenuWithSpace: false
    };
    const wrapper = shallow(<Menu {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render login url based on pagetype', () => {
    const jobListingProps = {
      ...defaultProps,
      loginAvailable: true,
      pageType: 'jobListing'
    };
    expect(shallow(<Menu {...jobListingProps} />)).toMatchSnapshot();

    const jobAdProps = {
      ...defaultProps,
      loginAvailable: true,
      pageType: 'jobAd'
    };
    expect(shallow(<Menu {...jobAdProps} />)).toMatchSnapshot();
  });
});

