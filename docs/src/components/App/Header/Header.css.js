import { saWhite, saGrey3, saGrey4 } from '../../../../../theme/palette/palette.js';

const headerBackgroundColor = saWhite;
const headerColor = saGrey3;
const headerBorderColor = saGrey4;

export default {
  '.headerBlock': {
    backgroundColor: headerBackgroundColor,
    borderBottomWidth: '1px',
    borderBottomColor: headerBorderColor,
    borderBottomStyle: 'solid'
  },
  '.title': {
    color: headerColor,
    width: '220px',
    textTransform: 'capitalize'
  },
  '.bar': {
    backgroundColor: headerColor
  },
  '.logoLink': {
    textDecoration: 'none'
  },
  '.logo': {
    width: 'auto'
  }
};
