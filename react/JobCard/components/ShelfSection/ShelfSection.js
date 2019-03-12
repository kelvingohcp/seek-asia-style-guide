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

  const renderLink = trackOmniture => linkObject => (
    <LinkComponent
      {...linkObject}
      key={`${linkObject.title}-${linkObject.name}`}
      className={styles.shelfLink}
      onClick={trackOmniture}>
      {linkObject.name}
    </LinkComponent>
  );

  return (
    <Section className={classnames(styles.root, { [styles.showShelfSection]: showShelfSection })}>
      <div className={styles.shelfDivider} />
      {shelfLinks && shelfLinks.length && (
        <Text whispering className={styles.shelfLinksContainer}>
          {shelfLinks.map(shelfLink => {
            
            const trackOmniture = () => trackLinkClicked(shelfLink.searchMethod);
            const renderLinkWithOmnitureTracking = renderLink(trackOmniture);

            if (shelfLink && shelfLink.items && shelfLink.items.length) {
              return (
                <div key={shelfLink.label}>
                  {`${shelfLink.label}: `}
                  {
                    shelfLink.items
                      .map(item => {
                        const renderedLink = renderLinkWithOmnitureTracking(item);
                        const renderedLinks = [renderedLink];

                        if (item.children && item.children.length) {
                          const childLinks = item.children
                            .map(renderLinkWithOmnitureTracking)
                            .reduce((prev, curr) => [prev, ' | ', curr]);
                          
                            renderedLinks.push(' > ');
                            renderedLinks.push(childLinks);
                        }
                        return renderedLinks;
                      })
                      .reduce((prev, curr) => [prev, ', ', curr])
                  }
                </div>);
            }
            return null;
          })}
        </Text >
      )}
      {tagLinks &&
        <ButtonGroup className={styles.tagLinksContainer}>
          {tagLinks.map((item) => (
            <Button
              color="primary"
              compact
              component="a"
              href={item.link}
              className={styles.tagLink}
              key={`${item.title}-${item.name}`}
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
