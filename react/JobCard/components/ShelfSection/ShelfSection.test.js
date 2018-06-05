import React from 'react';
import { shallow } from 'enzyme';

import ShelfSection from './ShelfSection';

const defaultShelf = {
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
  ],
  tagLinks: [
    {
      name: 'keyword 1',
      link: '/jobCard',
      title: 'Limit result to Keyword 1'
    },
    {
      name: 'keyword 2',
      link: '/jobCard',
      title: 'Limit result to Keyword 2'
    }
  ]
};

/* eslint-disable react/prop-types */
const customLink = ({ link, children, ...restProps }) => (
  <span {...restProps}>{children}</span>
);

describe('JobCard - ShelfSection', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ShelfSection shelf={defaultShelf} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom link', () => {
    const wrapper = shallow(<ShelfSection shelf={defaultShelf} LinkComponent={customLink} />);
    expect(wrapper).toMatchSnapshot();
  });
});
