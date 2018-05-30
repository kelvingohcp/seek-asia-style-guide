import lessToJs from 'less-vars-to-js';
import gridLess from 'raw-loader!./grid.less';

console.log('=====>', gridLess);
const grid = lessToJs(gridLess); // eslint-disable-line no-sync

export default grid;
