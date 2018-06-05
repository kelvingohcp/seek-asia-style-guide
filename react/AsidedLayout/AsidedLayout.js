import styles from './AsidedLayout.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const defaultRenderAside = () => null;

const conditionallyRenderAside = (condition, renderAside, classNameAside, disableOnMobile, size) => (
  condition ?
    <div
      className={classnames({
        [classNameAside]: classNameAside,
        [styles.disableOnMobile]: disableOnMobile,
        [styles.aside]: true
      })}
      style={{ flexBasis: size }}>
      {renderAside()}
    </div> :
    null
);

export default function AsidedLayout({ className, children, renderAside = defaultRenderAside, classNameAside, size, reverse, disableOnMobile, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.reverse]: reverse
      })}>
      { conditionallyRenderAside(reverse, renderAside, classNameAside, disableOnMobile, size) }
      <div className={styles.content}>
        {children}
      </div>
      { conditionallyRenderAside(!reverse, renderAside, classNameAside, disableOnMobile, size) }
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
  reverse: PropTypes.bool
};
