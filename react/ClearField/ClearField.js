import styles from './ClearField.less';

import React from 'react';
import { Icon } from 'seek-asia-style-guide/react';

export default function ClearField() {
  return (
    <div className={styles.root}>
      <Icon className={styles.clearRoot} size="small" type="negative" />
    </div>
  );
}
