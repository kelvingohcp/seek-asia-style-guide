import React from 'react';
import { shallow, render } from 'enzyme';

import Menu from './Menu';
import { Text } from 'seek-asia-style-guide/react';

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
      'header.signupUrl': '/hk/en/jobseeker/registration'
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
    baseUrl: 'http://seekasia.com'
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

  it('should render with menu open', () => {
    const testProps = {
      ...defaultProps,
      shouldShowMenu: true
    };
    const wrapper = shallow(<Menu {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render when authenticated', () => {
    const renderTitle = props => render(<Text {...props} />);
    expect(renderTitle({ authenticationStatus: 'authenticated', userName: 'Olivia' })).toMatchSnapshot();
  });

  it('should render when unauthenticated', () => {
    const renderTitle = props => render(<Text {...props} />);
    expect(renderTitle({ authenticationStatus: 'unauthenticated' })).toMatchSnapshot();
  });
});

