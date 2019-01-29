import React from 'react';
import Section from '../../../Section/Section';
import Text from '../../../Text/Text';
import Button from '../../../Button/Button';
import ButtonGroup from '../../../ButtonGroup/ButtonGroup';
import defaultLink from '../Link/Link';
import styles from './ShelfSection.less';
import classnames from 'classnames';
import { hasShelfLinks } from '../../jobCardHelper.js';
import { ShelfSectionPropTypes } from './ShelfSectionPropTypes';

const ShelfSection = ({ shelf = {}, LinkComponent = defaultLink, showShelfSection = false, trackLinkClicked = () => {} }) => {
  const { shelfLinks, tagLinks } = shelf;
  if (!shelfLinks && !tagLinks || !hasShelfLinks(shelf.shelfLinks)) {
    return null;
  }

  const rednerLink = (linkObject, trackOmniture) => (
    <LinkComponent
      key={linkObject.name}
      {...linkObject}
      className={styles.shelfLink}
      onClick={trackOmniture}>
      {linkObject.name}
    </LinkComponent>
  );

  return (
    <Section className={classnames(styles.root, { [styles.showShelfSection]: showShelfSection })}>
      <div className={styles.shelfDivider} />
      {shelfLinks && shelfLinks.length &&
      <Text whispering className={styles.shelfLinksContainer}>
        {shelfLinks.map(shelfItem => {
          const trackOmniture = () => trackLinkClicked(shelfItem.searchMethod);

          if (shelfItem && shelfItem.items && shelfItem.items.length) {
            return (
              <div key={shelfItem.label}>
                {`${shelfItem.label}: `}
                {
                  shelfItem.items.map(item => {
                    if (item.children && item.children.length) {
                      return [
                        rednerLink(item, trackOmniture),
                        ' > ',
                        item.children
                          .map(child => rednerLink(child, trackOmniture))
                          .reduce((prev, curr) => [prev, ' | ', curr])
                      ];
                    }
                    return [rednerLink(item, trackOmniture)];
                  }).reduce((prev, curr) => [prev, ', ', curr])
                }
              </div>);
          }
          return null;
        })}
      </Text >
      }
      {tagLinks &&
        <ButtonGroup className={styles.tagLinksContainer}>
          {tagLinks.map(item => (
            <Button
              color="primary"
              compact
              component="a"
              href={item.link}
              className={styles.tagLink}
              key={item.title}
              title={item.title}>
              {item.name}
            </Button>
          ))}
        </ButtonGroup>
      }
    </Section>
  );
};

ShelfSection.propTypes = ShelfSectionPropTypes;

export default ShelfSection;
