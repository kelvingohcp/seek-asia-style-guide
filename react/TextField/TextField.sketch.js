import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';

const Container = ({ children }) => (
  <div style={{ maxWidth: '520px' }}>
    { children }
  </div>
);
Container.propTypes = {
  children: PropTypes.node.isRequired
};

function noop() {}

export const symbols = {
  'TextField/Standard': (
    <Container>
      <TextField id="textfield1" label="Label" value="" onChange={noop} message={false} />
    </Container>
  ),
  'TextField/With Help Text': (
    <Container>
      <TextField id="firstName2" label="Label" value="" onChange={noop} message="Help text" />
    </Container>
  ),
  'TextField/With Critical Text': (
    <Container>
      <TextField id="firstName3" label="Label" value="" onChange={noop} message="Critical text" valid={false} />
    </Container>
  ),
  'TextField/With Positive Text': (
    <Container>
      <TextField id="firstName4" label="Label" value="" onChange={noop} message="Positive text" valid={true} />
    </Container>
  )
};
