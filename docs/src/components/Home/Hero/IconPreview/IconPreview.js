import styles from './IconPreview.less';

import React from 'react';
import {
  Icon
} from 'seek-asia-style-guide/react';

export default function IconPreview() {
  return (
    <div className={styles.root}>
      <Icon type="education" size="large" />
      <Icon type="experience" size="large" />
      <Icon type="resume" size="large" />
      <Icon type="jobAd" size="large" />
      <Icon type="company" size="large" />
      <Icon type="search" size="large" />
      <Icon type="employer" size="large" />
      <Icon type="home" size="large" />
      <Icon type="bookmark" size="large" />
      <Icon type="alert" size="large" />
      <Icon type="negative" size="large" />
      <Icon type="positive" size="large" />
      <Icon type="mail" size="large" />
    </div>
  );
}
