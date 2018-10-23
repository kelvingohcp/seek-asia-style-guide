import styles from './ButtonsPreview.less';
import buttonStyles from 'seek-asia-style-guide/react/Button/Button.less';

import React from 'react';
import classnames from 'classnames';
import { Button } from 'seek-asia-style-guide/react';

export default function ButtonsPreview() {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <Button color="secondary" className={styles.button}>Normal</Button>
        <Button color="secondary" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button color="secondary" className={classnames(styles.button, buttonStyles.rootActive)}>Pressed</Button>
      </div>
      <div className={styles.group}>
        <Button color="primary" className={styles.button}>Normal</Button>
        <Button color="primary" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button color="primary" className={classnames(styles.button, buttonStyles.rootActive)}>Pressed</Button>
      </div>
    </div>
  );
}
