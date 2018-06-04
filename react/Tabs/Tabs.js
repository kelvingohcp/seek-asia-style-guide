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
  for (let i = 0; items && i < items.length; i++) {
    if (items[i].title) {
      tabsTitles.push(
        <ReactTab className={styles.tab} selectedClassName={styles.selectedTab}>
          <Text shouting strong>
            {items[i].title}
          </Text>
        </ReactTab>
      );
    }
    if (items[i].content) {
      tabsContent.push(<ReactTabPanel>{items[i].content}</ReactTabPanel>);
    }
  }
  return (
    <ReactTabs className={classnames(styles.root, className)}>
      <ReactTabList className={styles.tabList}>{tabsTitles}</ReactTabList>
      {tabsContent}
    </ReactTabs>
  );
}

Tabs.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string
};
