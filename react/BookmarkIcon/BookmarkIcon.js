import svgMarkup from './BookmarkIcon.svg';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../private/Icon/Icon';
import classnames from 'classnames';
import styles from './BookmarkIcon.less';

function BookmarkIcon({ isBookmarked, svgClassName, ...restProps }) {
  const svgMarkupWithClassName = svgMarkup
    .replace('<svg ', `<svg class="${svgClassName}" `);

  return (
    <Icon
      markup={svgMarkupWithClassName}
      className={classnames(styles.bookmarkIcon, {
        [styles.filled]: isBookmarked
      })}
      {...restProps}
    />
  );
}

BookmarkIcon.displayName = 'BookmarkIcon';

BookmarkIcon.propTypes = {
  isBookmarked: PropTypes.bool,
  svgClassName: PropTypes.string
};

export default BookmarkIcon;
