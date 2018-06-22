import styles from './AsidedLayout.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const defaultRenderAside = () => null;

const conditionallyRenderAside = ({
  condition,
  renderAside,
  classNameAside,
  disableOnMobile,
  disableGapInBetween,
  size
}) =>
  condition ? (
    <div
      className={classnames({
        [classNameAside]: classNameAside,
        [styles.disableOnMobile]: disableOnMobile,
        [styles.aside]: true,
        [styles.gap]: !disableGapInBetween
      })}
      style={{ flexBasis: size }}
    >
      {renderAside()}
    </div>
  ) : null;

export default function AsidedLayout({
  className,
  children,
  renderAside = defaultRenderAside,
  classNameAside,
  size,
  reverse,
  disableOnMobile,
  disableGapInBetween,
  ...restProps
}) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.reverse]: reverse
      })}
    >
      {conditionallyRenderAside({
        condition: reverse,
        renderAside,
        classNameAside,
        disableOnMobile,
        disableGapInBetween,
        size
      })}
      <div className={styles.content}>{children}</div>
      {conditionallyRenderAside({
        condition: !reverse,
        renderAside,
        classNameAside,
        disableOnMobile,
        disableGapInBetween,
        size
      })}
    </div>
  );
}

AsidedLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  renderAside: PropTypes.func,
  classNameAside: PropTypes.string,
  size: PropTypes.string,
  disableOnMobile: PropTypes.bool,
  disableGapInBetween: PropTypes.bool,
  reverse: PropTypes.bool
};

conditionallyRenderAside.propTypes = {
  condition: PropTypes.bool,
  renderAside: PropTypes.func,
  classNameAside: PropTypes.string,
  size: PropTypes.string,
  disableOnMobile: PropTypes.bool,
  disableGapInBetween: PropTypes.bool,
  reverse: PropTypes.bool
};
