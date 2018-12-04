import React from 'react';
import { shallow } from 'enzyme';

import ErrorPage from './ErrorPage';

describe('JobsDB Error Page', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('should render correctly, with customeButton props', () => {
    it('onClick', () => {
      const wrapper = shallow(<ErrorPage customeButton={{ onClick: () => ({ abc: 'a' }) }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('text', () => {
      const wrapper = shallow(<ErrorPage customeButton={{ text: 'Search Again' }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('onClick and text', () => {
      const wrapper = shallow(<ErrorPage customeButton={{ onClick: () => ({ abc: 'a' }), text: 'Search Again' }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should render correctly, with customeText props', () => {
    it('headline', () => {
      const wrapper = shallow(<ErrorPage customeText={{ headline: 'keep calm' }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('subline', () => {
      const wrapper = shallow(<ErrorPage customeText={{ subline: 'keep calm' }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('headline and subline', () => {
      const wrapper = shallow(<ErrorPage customeText={{ headline: 'keep calm', subline: 'try again' }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
