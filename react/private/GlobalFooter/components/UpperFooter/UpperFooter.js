import React from 'react';
import PropTypes from 'prop-types';
import styles from './UpperFooter.less';
import FooterSection from '../FooterSection/FooterSection';
import _get from 'lodash/get';

const UpperFooter = ({ footerMessages, linkRenderer }) => {
  return (
    <div className={styles.footerGrid}>
      <FooterSection
        sessionClass={styles.footerGridItem}
        sessionMessage={_get(footerMessages, 'about')}
        subSessionMessage={_get(footerMessages, 'partners')}
        hideInMobile={['about', 'faq']}
        linkRenderer={linkRenderer}
      />
      <FooterSection
        sessionClass={styles.footerGridItem}
        sessionMessage={_get(footerMessages, 'jobSeeker')}
        hideInMobile={['resumes', 'jobAlerts']}
        linkRenderer={linkRenderer}
      />
      <FooterSection
        sessionClass={styles.footerGridItem}
        sessionMessage={_get(footerMessages, 'employers')}
        linkRenderer={linkRenderer}
      />
      <FooterSection
        sessionClass={styles.footerGridItem}
        sessionMessage={_get(footerMessages, 'connect')}
        linkRenderer={linkRenderer}
      />
    </div>
  );
};

UpperFooter.propTypes = {
  footerMessages: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func.isRequired
};

export default UpperFooter;
