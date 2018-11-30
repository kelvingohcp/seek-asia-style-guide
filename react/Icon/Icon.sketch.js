import React from 'react';
import styles from './Icon.sketch.less';

import Button from '../Button/Button';
import Icon from './Icon';
import Text from '../Text/Text';

export const symbols = {
  'Job Alert, set size as normal': <Icon type="jobAlert" size="normal" />,
  'Chevron, 90 deg clockwise': <Icon rotation="90deg" type="chevron" />,
  'Job Ad, large': <Icon type="jobAd" size="large" />,
  'Bookmark, small': <Icon type="bookmark" size="small" />,
  'Bookmark icon wrapped with link': <a href="#"><Icon type="bookmark" /></a>,
  'Icon in front of text': <div className={styles.demoInline}><Icon type="promotion" size="normal" lineHeight="shouting" /> <Text baseline={false}>Promotion</Text></div>,
  'Icon respects font color value from parent container': <div><Button color="callToAction" isJobStreet><Icon type="resume" size="small" lineHeight="conversational" /> Resume</Button> <Button color="callToAction" compact><Icon type="resume" size="small" lineHeight="conversational" /> Resume</Button></div>
};
