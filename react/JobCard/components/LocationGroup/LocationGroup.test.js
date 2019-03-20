import React from 'react';
import { shallow } from 'enzyme';

import LocationGroup from './LocationGroup';

const defaultLocations = [
  {
    name: 'Pahang',
    link: '/jobCard',
    title: 'Limit result to Pahang'
  },
  {
    name: 'Selangor',
    link: '/jobCard',
    title: 'Limit result to Selangor',
    child: {
      name: 'Cheras',
      link: '/jobCard',
      title: 'Limit result to Cheras in Selangor',
      child: {
        name: 'Near Leisure Mall'
      }
    }
  }
];

describe('JobCard - LocationGroup', () => {
  it('should not error if locations is empty', () => {
    const wrapper = shallow(<LocationGroup locations={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<LocationGroup locations={defaultLocations} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with only last child location', () => {
    const wrapper = shallow(<LocationGroup locations={defaultLocations} showShortenedLocation={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
