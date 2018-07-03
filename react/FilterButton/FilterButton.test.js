import React from 'react';
import { shallow } from 'enzyme';
import FilterButton from './FilterButton';

describe('FilterButton:', () => {
  describe('color variants:', () => {
    it('should render primary FilterButton', () => {
      const wrapper = shallow(<FilterButton color="primary">SEEK</FilterButton>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render secondary FilterButton', () => {
      const wrapper = shallow(<FilterButton color="secondary">SEEK</FilterButton>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render with node', () => {
    const wrapper = shallow(
      <FilterButton color="primary">
        <h5>SEEK</h5>
      </FilterButton>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with array of nodes', () => {
    const wrapper = shallow(
      <FilterButton color="primary">
        <span>SEEK</span>
        <span>AU</span>
      </FilterButton>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = shallow(
      <FilterButton color="primary" className="foo">
        SEEK
      </FilterButton>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with active state', () => {
    const wrapper = shallow(
      <FilterButton color="primary" isActive className="foo">
        SEEK
      </FilterButton>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
