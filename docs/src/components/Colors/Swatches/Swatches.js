import React from 'react';
import PropTypes from 'prop-types';

import styles from './Swatches.less';

import {
  Text
} from 'seek-asia-style-guide/react';

const Swatches = ({ theme }) => {
  return (
    <div className={styles.colorGrid}>
      {theme.map(function(item, index) {
        const bypassBlock = {
          display: 'contents'
        };
        return (
          <div key={index} style={bypassBlock}>
            <div className={styles.colorGridType}>
              <Text baseline={false} waving>
                {item.label}
              </Text>
            </div>
            <div className={styles.colorGridText}>
              <Text baseline={false} className={item.textClass}>
                {item.cssVar}
              </Text>
            </div>
            <div className={styles.colorGridBackground}>
              <Text baseline={false} className={item.bgClass}>
                {item.cssVar}
              </Text>
            </div>
          </div>
        );
      })};
    </div>
  );
};

Swatches.propTypes = {
  theme: PropTypes.array.isRequired
};

export default Swatches;
