import React from 'react';
import { shallow } from 'enzyme';

import ShelfButton from './ShelfButton';

const defaultProps = {
  desktopOnly: false,
  mobileOnly: false,
  isOpen: false,
  job: {
    postingDuration: '1 hour ago'
  },
  onClick: () => {}
};

const shelf = {
  shelfLinks: [
    {
      label: 'Job function',
      items: [
        {
          name: 'Accounting',
          link: '/jobCard',
          title: 'Limit result to Accounting',
          children: [
            {
              name: 'Accountant',
              link: '/jobCard',
              title: 'Limit result to Accountant in Accounting'
            },
            {
              name: 'Audit',
              link: '/jobCard',
              title: 'Limit result to Audit in Accounting'
            },
            {
              name: 'Others',
              link: '/jobCard',
              title: 'Limit result to Others in Accounting'
            }
          ]
        },
        {
          name: 'Admin & HR',
          link: '/jobCard',
          title: 'Limit result to Admin & HR',
          children: [
            {
              name: 'Receptionist',
              link: '/jobCard',
              title: 'Limit result to Receptionist in Admin & HR'
            }
          ]
        }
      ]
    },
    {
      label: 'Industry',
      items: [{
        name: 'Accounting / Audit / Tax Services',
        link: '/jobCard',
        title: 'Limit result to Accounting / Audit / Tax Services'
      }]
    }
  ]
};

describe('Shelf Button', () => {
  it('should render default shelf button', () => {
    const wrapper = shallow((<ShelfButton {...defaultProps} />));
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Shelf Button', () => {
  it('should render shelf button with featured label', () => {
    const wrapper = shallow((<ShelfButton {...defaultProps} featuredLabel="Featured" />));
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Shelf Button', () => {
  it('should render shelf button with applied date', () => {
    const wrapper = shallow((<ShelfButton {...defaultProps} appliedDate="Applied on 20-Jul-2018" />));
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Shelf Button', () => {
  it('should render shelf button with shelf', () => {
    const wrapper = shallow((<ShelfButton {...defaultProps} job={{ ...defaultProps.job, shelf }} />));
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Shelf Button', () => {
  it('should render shelf button with shelf and openned style', () => {
    const wrapper = shallow((<ShelfButton {...defaultProps} job={{ ...defaultProps.job, shelf }} isOpen />));
    expect(wrapper).toMatchSnapshot();
  });
});
