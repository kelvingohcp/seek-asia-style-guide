import React from 'react';
import PropTypes from 'prop-types';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import Button from '../Button/Button';
import classnames from 'classnames';
import styles from './BookmarkButton.less';
export default class BookmarkButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { onBookmarkClick } = this.props;
    e.preventDefault();
    e.stopPropagation();
    onBookmarkClick();
  }

  render() {
    const { isBookmarked, className, ...restProps } = this.props;
    return (
      <Button color="hyperlink" className={classnames(styles.button, className, { [styles.bookmarkFilled]: isBookmarked })} onClick={this.handleClick} >
        <BookmarkIcon isBookmarked={isBookmarked} {...restProps} />
      </Button>
    );
  }
}

BookmarkButton.displayName = 'BookmarkButton';

BookmarkButton.propTypes = {
  onBookmarkClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool,
  className: PropTypes.string
};
