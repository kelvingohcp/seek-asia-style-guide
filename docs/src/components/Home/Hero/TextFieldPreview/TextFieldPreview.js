import styles from './TextFieldPreview.less';

import React from 'react';
import { TextField } from 'seek-asia-style-guide/react';

function noop() {}

export default function TextFieldPreview() {
  return (
    <div className={styles.root}>
      <TextField id="1" value="" onChange={noop} message={false} label="Text Field label" />
      <TextField id="2" value="" onChange={noop} valid={false} message="Something went wrong" />
    </div>
  );
}
