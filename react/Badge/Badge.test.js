import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

describe('Badge:', () => {
  it('should render Subtle Default', () => {
    const wrapper = shallow(<Badge label='default' color='default' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Subtle Progressing', () => {
    const wrapper = shallow(<Badge label='Progressing' color='progressing' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Subtle Declined', () => {
    const wrapper = shallow(<Badge label='Declined' color='declined' />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Subtle Expired', () => {
    const wrapper = shallow(<Badge label='Expired' color='expired' />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Subtle New', () => {
    const wrapper = shallow(<Badge label='New' color='new' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Bold Default', () => {
    const wrapper = shallow(<Badge label='default' color='default' isBold />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Bold Progressing', () => {
    const wrapper = shallow(<Badge label='Progressing' color='progressing' isBold />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Bold Declined', () => {
    const wrapper = shallow(<Badge label='Declined' color='declined' isBold />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Bold Expired', () => {
    const wrapper = shallow(<Badge label='Expired' color='expired' isBold />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Bold New', () => {
    const wrapper = shallow(<Badge label='New' color='new' isBold />);
    expect(wrapper).toMatchSnapshot();
  });
});

