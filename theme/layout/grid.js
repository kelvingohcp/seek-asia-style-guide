import lessToJs from 'less-vars-to-js';
import fs from 'fs';

const grid = lessToJs(fs.readFileSync('grid.js', 'utf-8')); // eslint-disable-line no-sync

export default grid;
