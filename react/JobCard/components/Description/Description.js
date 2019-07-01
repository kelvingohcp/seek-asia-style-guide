import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.less';
import classnames from 'classnames';
import Text from '../../../Text/Text';

const Description = ({ description, showDescription }) => {
  if (!(showDescription && description)) {
    return null;
  }

  return (
    <div className={classnames(styles.desktopOnly, styles.description)}>
      <Text
        whispering
        baseline={false}
        className={styles.text}>
        {description}
      </Text>
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string,
  showDescription: PropTypes.bool
};

export default Description;
