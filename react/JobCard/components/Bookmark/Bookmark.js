import React from 'react';
import PropTypes from 'prop-types';
import { BookmarkButton } from 'seek-asia-style-guide/react';
import styles from './Bookmark.less';

export const BOOKMARKED = 'bookmarked';
export const NOT_BOOKMARKED = 'notBookmarked';

const Bookmark = ({ bookmarked, onBookmarkClick, ...restProps }) => {
  if (bookmarked === BOOKMARKED || bookmarked === NOT_BOOKMARKED) {
    return (
      <BookmarkButton isBookmarked={bookmarked === BOOKMARKED} onBookmarkClick={onBookmarkClick} svgClassName={styles.bookmarkSvg} className={styles.bookmarkButton} {...restProps} />
    );
  }

  return null;
};

Bookmark.propTypes = {
  bookmarked: PropTypes.oneOf([BOOKMARKED, NOT_BOOKMARKED]),
  onBookmarkClick: PropTypes.func.isRequired
};

export default Bookmark;
