// import React from 'react';
import ImageSlider from './ImageSlider';
import * as sketch from './ImageSlider.sketch';

export default {
  route: '/ImageSlider',
  title: 'Image Slider',
  component: ImageSlider,
  sketch,
  initialProps: {
    autoSlide: true,
    timerDuration: 5000,
    items: [{ url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="120" height="72" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company A</text></g></svg>', title: 'Company1', imageWidth: '160', imageHeight: '80', imageTypeId: '0' },
      { url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="160" height="80" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company B</text></g></svg>', title: 'company2', imageWidth: '160', imageHeight: '80', imageTypeId: '0' },
      { url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="160" height="80" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company C</text></g></svg>', title: 'company3', imageWidth: '160', imageHeight: '80', imageTypeId: '0' },
      { url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="160" height="80" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company D</text></g></svg>', title: 'company4', imageWidth: '160', imageHeight: '80', imageTypeId: '0' },
      { url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="160" height="80" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company E</text></g></svg>', title: 'company5', imageWidth: '160', imageHeight: '80', imageTypeId: '0' },
      { url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="160" height="80" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company F</text></g></svg>', title: 'company6', imageWidth: '160', imageHeight: '80', imageTypeId: '0' }]
  },
  options: []
};
