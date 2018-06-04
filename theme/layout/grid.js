import lessToJs from 'less-vars-to-js';
import grid from '!!raw-loader!./grid.less';

const gridValues = lessToJs(grid);
export default gridValues;
