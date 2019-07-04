import styles from './Tabs.less';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Tab as ReactTab,
  Tabs as ReactTabs,
  TabList as ReactTabList,
  TabPanel as ReactTabPanel
} from 'react-tabs';
import Text from '../Text/Text';
import classnames from 'classnames';

export default function Tabs({ items, className }) {
  const tabsTitles = [];
  const tabsContent = [];
  items.forEach(function(item, index) {
    if (item.title) {
      tabsTitles.push(
        <ReactTab
          className={styles.tab}
          selectedClassName={styles.selectedTab}
          key={index}>
          <Text waving strong>
            {item.title}
          </Text>
        </ReactTab>
      );
      tabsContent.push(
        <ReactTabPanel key={index}>
          {item.content}
        </ReactTabPanel>
      );
    }
  });
  return (
    <ReactTabs className={classnames(styles.root, className)}>
      <ReactTabList className={styles.tabList}>{tabsTitles}</ReactTabList>
      {tabsContent}
    </ReactTabs>
  );
}

Tabs.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string
};
