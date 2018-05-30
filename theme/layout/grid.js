import lessToJs from 'less-vars-to-js';
import gridLess from './grid.less!raw-loader';

const grid = lessToJs(gridLess); // eslint-disable-line no-sync

export default grid;
