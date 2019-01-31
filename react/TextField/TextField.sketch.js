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
  ),
  'TextField/With Date Input Masking': (
    <Container>
      <TextField
        id="startDate"
        label="Start date"
        value=""
        onChange={noop}
        mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
        inputProps={{
          placeholder: 'mm/yyyy',
          keepCharPositions: true
        }}
      />
    </Container>
  ),
  'TextField/Email': (
    <Container>
      <TextField id="email1" label="Email" value="someone@somewhere.net" onChange={noop} />
    </Container>
  ),
  'TextField/Tel': (
    <Container>
      <TextField id="tel1" label="Mobile" value="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={noop} />
    </Container>
  )
};
