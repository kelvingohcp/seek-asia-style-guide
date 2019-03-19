import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

jest.mock('../StyleGuideProvider/StyleGuideProvider');

describe('Button:', () => {
  describe('color variants:', () => {
    it('should render callToAction button', () => {
      const wrapper = shallow(<Button color="callToAction">SEEK</Button>).dive();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render JobsDB callToAction button', () => {
      const wrapper = shallow(
        <Button isJobsDB color="callToAction">
          SEEK
        </Button>
      ).dive();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render JobStreet callToAction button', () => {
      const wrapper = shallow(
        <Button isJobStreet color="callToAction">
          SEEK
        </Button>
      ).dive();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render hyperlink color button', () => {
      const wrapper = shallow(<Button color="hyperlink">SEEK</Button>).dive();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render primary button', () => {
      const wrapper = shallow(<Button color="primary">SEEK</Button>).dive();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render secondary button', () => {
      const wrapper = shallow(<Button color="secondary">SEEK</Button>).dive();
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render with node', () => {
    const wrapper = shallow(
      <Button color="callToAction">
        <h5>SEEK</h5>
      </Button>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with array of nodes', () => {
    const wrapper = shallow(
      <Button color="callToAction">
        <span>SEEK</span>
        <span>AU</span>
      </Button>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as an anchor with href="https://www.seek.com.au"', () => {
    const wrapper = shallow(
      <Button color="hyperlink" component="a" href="https://www.seek.com.au">
        SEEK
      </Button>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = shallow(
      <Button color="callToAction" className="foo">
        SEEK
      </Button>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render compact font size', () => {
    const wrapper = shallow(
      <Button color="callToAction" compact>
        SEEK
      </Button>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom component based on it’s reference', () => {
    const CustomComponent = props => <a {...props} someProp="kraken" />;
    const wrapper = shallow(
      <Button color="callToAction" component={CustomComponent}>
        SEEK
      </Button>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render disabled', () => {
    const wrapper = shallow(
      <Button color="callToAction" disabled>
        SEEK
      </Button>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as div', () => {
    const wrapper = shallow(
      <Button component="div" color="callToAction">
        SEEK
      </Button>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with isSelected style', () => {
    const wrapper = shallow(
      <Button color="callToAction" isSelected>
        SEEK
      </Button>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
