import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const requiredProps = {
    id: 'testCheckbox',
    label: 'Still in role',
    checked: false,
    onChange: () => {}
  };

  it('should render with simple props', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as checked', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} checked={true} />);
    const inputChecked = wrapper.find('input').prop('checked');
    expect(inputChecked).toEqual(true);
  });

  it('should pass through the value', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} value="foo" checked={true} />);
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toEqual('foo');
  });

  it('should render with className', () => {
    const className = 'testClassname';
    const wrapper = shallow(<Checkbox {...requiredProps} className={className} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with standard checkbox style', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} type="standard" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with compact checkbox style', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} type="standard" compact />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with button style', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} type="button" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with checkbox put at the end of component', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} rtl={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render full width checkbox', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} fullWidth />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('inputProps', () => {
    it('should invoke the change handler', () => {
      const handleChange = jest.fn();
      const props = { ...requiredProps, inputProps: { onChange: handleChange, checked: false } };
      const checkedEvent = { target: { checked: true } };
      const wrapper = shallow(<Checkbox {...props} />);
      wrapper.find('input').simulate('change', checkedEvent);
      expect(handleChange).toBeCalledWith(checkedEvent);
    });

    it('should render as checked', () => {
      const wrapper = shallow(<Checkbox {...requiredProps} inputProps={{ checked: true }} />);
      const inputChecked = wrapper.find('input').prop('checked');
      expect(inputChecked).toEqual(true);
    });

    it('should pass through other props to the input', () => {
      const wrapper = shallow(<Checkbox {...requiredProps} inputProps={{ checked: false, 'data-automation': 'first-name-field' }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
