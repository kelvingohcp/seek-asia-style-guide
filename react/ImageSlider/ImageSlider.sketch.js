import React from 'react';
import mapKeys from 'lodash/mapKeys';
import ImageSlider from './ImageSlider';
// import { IconEducation } from 'seek-asia-style-guide/react';

const itemList = [];
itemList.push({ url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="120" height="72" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company A</text></g></svg>', title: 'Company1', imageWidth: '160', imageHeight: '80', imageTypeId: '0' });
itemList.push({ url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="120" height="72" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company B</text></g></svg>', title: 'company2', imageWidth: '160', imageHeight: '80', imageTypeId: '0' });
itemList.push({ url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="120" height="72" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company C</text></g></svg>', title: 'company3', imageWidth: '160', imageHeight: '80', imageTypeId: '0' });
itemList.push({ url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="120" height="72" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company D</text></g></svg>', title: 'company4', imageWidth: '160', imageHeight: '80', imageTypeId: '0' });
itemList.push({ url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="120" height="72" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company E</text></g></svg>', title: 'company5', imageWidth: '160', imageHeight: '80', imageTypeId: '0' });
itemList.push({ url: 'https://hk.jobsdb.com/hk/en/search/Findjobs?JSRV=1&AccNums=1', imagePath: 'data:image/svg+xml;utf,<svg width="120" height="72" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M-1-1h122v74H-1z"/><g><path fill="#999" d="M0 0h160v80H0z"/><text x="24" y="40">Company F</text></g></svg>', title: 'company6', imageWidth: '160', imageHeight: '80', imageTypeId: '0' });

export const imgSlider = {
  'ImageSlider': <ImageSlider items={itemList} />
};

export const symbols = mapKeys(imgSlider, (value, key) => `ImageSlider/${key}`);
