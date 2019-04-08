import React from 'react';
import PropTypes from 'prop-types';
import styles from './UpperFooter.less';
import { Columns } from 'seek-asia-style-guide/react';
import FooterSection from '../FooterSection/FooterSection';
import _get from 'lodash/get';

const UpperFooter = ({ footerMessages, linkRenderer }) => {
  return (
    <Columns>
      <div className={styles.columnGroup}>
        <FooterSection
          sessionClass={styles.firstCategory}
          sessionMessage={_get(footerMessages, 'aboutJobsDB')}
          subSessionMessage={_get(footerMessages, 'partners')}
          hideInMobile={['aboutJobsDB', 'faq']}
          linkRenderer={linkRenderer}
        />
        <FooterSection
          sessionClass={styles.category}
          sessionMessage={_get(footerMessages, 'jobSeeker')}
          hideInMobile={['resumes', 'jobAlerts']}
          linkRenderer={linkRenderer}
        />
      </div>
      <div className={styles.columnGroup}>
        <FooterSection
          sessionClass={styles.category}
          sessionMessage={_get(footerMessages, 'employers')}
          linkRenderer={linkRenderer}
        />
        <FooterSection
          sessionClass={styles.category}
          sessionMessage={_get(footerMessages, 'connect')}
          linkRenderer={linkRenderer}
        />
      </div>
    </Columns>
  );
};

UpperFooter.propTypes = {
  footerMessages: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func.isRequired
};

export default UpperFooter;
