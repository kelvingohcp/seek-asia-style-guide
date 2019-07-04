import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const Container = ({ children }) => <div>{children}</div>;
Container.propTypes = {
  children: PropTypes.node.isRequired
};

const noop = () => {};

export const symbols = {
  'Checkbox/Standard/Checked': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" checked={true} onChange={noop} />
    </Container>
  ),
  'Checkbox/Standard/Unchecked': (
    <Container>
      <Checkbox id="checkbox1" label="Checkbox" onChange={noop} />
    </Container>
  ),
  'Checkbox/Standard/Long label': (
    <Container>
      <Checkbox id="checkbox1" label="Nullam sodales quis velit nec accumsan. Vivamus quis ex euismod." onChange={noop} />
    </Container>
  ),
  'Checkbox/Standard/Checkbox at the end': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" rtl={true} onChange={noop} />
    </Container>
  ),
  'Checkbox/Standard/Uncheck and disabled': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" disabled onChange={noop} />
    </Container>
  ),
  'Checkbox/Standard/Checked and disabled': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" checked disabled onChange={noop} />
    </Container>
  ),
  'Checkbox/Standard/Full width': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" fullWidth onChange={noop} />
    </Container>
  ),
  'Checkbox/Standard/Full width and checkbox at the end': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" fullWidth rtl={true} onChange={noop} />
    </Container>
  ),
  'Checkbox/Compact/Checked': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" compact checked={true} onChange={noop} />
    </Container>
  ),
  'Checkbox/Compact/Unchecked': (
    <Container>
      <Checkbox id="checkbox1" label="Checkbox" compact onChange={noop} />
    </Container>
  )
};
