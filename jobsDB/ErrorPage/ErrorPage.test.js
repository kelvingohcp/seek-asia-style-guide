import React from 'react';
import { shallow } from 'enzyme';

import ErrorPage from './ErrorPage';

describe('JobsDB Error Page', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('should render correctly, with button props', () => {
    it('onClick', () => {
      const wrapper = shallow(<ErrorPage button={{ onClick: () => ({ abc: 'a' }) }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('text', () => {
      const wrapper = shallow(<ErrorPage button={{ text: 'Search Again' }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('onClick and text', () => {
      const wrapper = shallow(<ErrorPage button={{ onClick: () => ({ abc: 'a' }), text: 'Search Again' }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should render correctly, with texts props', () => {
    it('headline', () => {
      const wrapper = shallow(<ErrorPage texts={{ headline: 'keep calm' }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('subline', () => {
      const wrapper = shallow(<ErrorPage texts={{ subline: 'keep calm' }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('headline and subline', () => {
      const wrapper = shallow(<ErrorPage texts={{ headline: 'keep calm', subline: 'try again' }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
