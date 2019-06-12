import React from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';

const Container = ({ children }) => <div>{children}</div>;
Container.propTypes = {
  children: PropTypes.node.isRequired
};

const noop = () => {};

export const symbols = {
  'Radio/Checked': (
    <Container>
      <Radio id="radio1" label="Radio" checked={true} onChange={noop} />
    </Container>
  ),
  'Radio/Unchecked': (
    <Container>
      <Radio id="radio2" label="Radio" checked={false} onChange={noop} />
    </Container>
  ),
  'Radio/Checked but disabled': (
    <Container>
      <Radio id="radio3" label="Radio" checked={true} disabled onChange={noop} />
    </Container>
  ),
  'Radio/Tick style': (
    <Container>
      <Radio id="radio3" label="Radio" checked={true} iconType="tick" onChange={noop} />
    </Container>
  ),
  'Radio/Checked in tick style but disabled': (
    <Container>
      <Radio id="radio3" label="Radio" checked={true} disabled iconType="tick" onChange={noop} />
    </Container>
  ),
  'Radio/Icon at back': (
    <Container>
      <Radio id="radio4" label="Radio" checked={true} rtl={true} onChange={noop} />
    </Container>
  ),
  'Radio/Full width with Icon at back': (
    <Container>
      <Radio id="radio4" label="Radio" checked={true} fullWidth rtl={true} onChange={noop} />
    </Container>
  ),
  'Radio/Full width with tick styled icon at back': (
    <Container>
      <Radio id="radio4" label="Radio" checked={true} fullWidth iconType="tick" rtl={true} onChange={noop} />
    </Container>
  )
};
