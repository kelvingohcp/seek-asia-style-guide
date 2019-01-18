import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../Section/Section';
import Text from '../../../Text/Text';
import Button from '../../../Button/Button';
import ButtonGroup from '../../../ButtonGroup/ButtonGroup';
import defaultLink from '../Link/Link';
import styles from './ShelfSection.less';
import classnames from 'classnames';
import { hasShelfLinks, ShelfSectionPropTypes } from '../../jobCardHelper.js';

const ShelfSection = ({ shelf = {}, LinkComponent = defaultLink, showShelfSection = false }) => {
  const { shelfLinks, tagLinks } = shelf;
  if (!shelfLinks && !tagLinks || !hasShelfLinks(shelf.shelfLinks)) {
    return null;
  }
  return (<Section className={classnames(styles.root, { [styles.showShelfSection]: showShelfSection })}>
    <div className={styles.shelfDivider} />
    {shelfLinks && shelfLinks.length &&
    <Text whispering className={styles.shelfLinksContainer}>
      {shelfLinks.map((shelfItem, i) => {
        if (shelfItem && shelfItem.items && shelfItem.items.length) {
          return (
            <div key={i}>
              {`${shelfItem.label}: `}
              {
                shelfItem.items.map((item, j) => {
                  const link = (<LinkComponent
                    link={item.link}
                    className={styles.shelfLink}
                    key={j}
                    title={item.title}>
                    {item.name}
                  </LinkComponent>);
                  if (item.children && item.children.length) {
                    return [
                      link,
                      ' > ',
                      item.children.map((child, k) => (
                        <LinkComponent
                          link={child.link}
                          className={styles.shelfLink}
                          key={`${j}${k}`}
                          title={child.title}>
                          {child.name}
                        </LinkComponent>
                      )).reduce((prev, curr) => [prev, ' | ', curr])
                    ];
                  }
                  return [link];
                }).reduce((prev, curr) => [prev, ', ', curr])
              }
            </div>);
        }
        return null;
      })}
    </Text>
    }

    {tagLinks &&
      <ButtonGroup className={styles.tagLinksContainer}>
        {tagLinks.map((item, i) => (
          <Button color="primary" compact component="a" href={item.link} className={styles.tagLink} key={i} title={item.title}>
            {item.name}
          </Button>
        ))}
      </ButtonGroup>
    }
  </Section>);
};

export default ShelfSection;
ShelfSection.propTypes = {
  shelf: ShelfSectionPropTypes,
  LinkComponent: PropTypes.func,
  showShelfSection: PropTypes.bool
};
