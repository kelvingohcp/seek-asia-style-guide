import React from 'react';
import Icon from './Icon';
import Button from '../Button/Button';

export const symbols = {
  'Job Alert': <Icon type="jobAlert" />,
  'Chevron, 90 deg clockwise': <Icon rotation="90deg" type="chevron" />,
  'Job Ad, large': <Icon type="jobAd" size="large" />,
  'Bookmark, small': <Icon type="bookmark" size="small" />,
  'Bookmark icon wrapped with link': <a href="#"><Icon type="bookmark" /></a>,
  'Resume icon respects font color value from parent container': <div><Button color="callToAction" isJobStreet><Icon type="resume" size="small" /> Resume</Button> <Button color="callToAction" compact><Icon type="resume" size="small" /> Resume</Button></div>
};
