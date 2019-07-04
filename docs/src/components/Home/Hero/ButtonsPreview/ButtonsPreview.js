import styles from './ButtonsPreview.less';

import React from 'react';
import { Button } from 'seek-asia-style-guide/react';

export default function ButtonsPreview() {
  return (
    <div>
      <Button color="primary" className={styles.button}>Primary</Button>
      <Button color="secondary" className={styles.button}>Secondary</Button>
    </div>
  );
}
