// based on grid.less
const gridValues = {
  '@grid-base': '4px',
  '@grid-row-height': '4px',
  '@grid-gutter-width': '@grid-base * 4',
  '@grid-column-width': '60px',
  '@grid-container-width': '1168px',
  '@gutter-width': '20px'
};
export default gridValues;

export const GRID_BASE = parseInt(gridValues['@grid-base'], 10);
export const getMultipliedGridLength = (multiplier = 1) => {
  return `${(GRID_BASE * multiplier)}px`;
};
