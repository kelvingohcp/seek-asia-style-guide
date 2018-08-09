import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageSliderWrapper.less';
import ImageSlot from '../ImageSliderSlot/ImageSliderSlot';

export default function ImageSliderWrapper({ items,
  direction,
  sliding,
  statePosition }) {
  const getOrder = function(itemIndex, currentPosition, itemLength) {
    const numItems = itemLength || 1;
    if (itemIndex - currentPosition < 0) {
      return numItems - Math.abs(itemIndex - currentPosition);
    }
    return itemIndex - currentPosition;
  };

  const wrapperStyles = function(hasSliding, slideDirection) {
    if (!hasSliding) {
      return styles.wrapperDiv;
    }
    if (slideDirection === 'prev') {
      return styles.wrapperDivSlidingPrev;
    }
    return styles.wrapperDivSliding;
  };

  const imagesList = [];
  if (items !== null) {
    items.map((item, index) => {
      const OrderID = getOrder(index, statePosition, items.length);
      imagesList.push(
        <ImageSlot
          orderID={OrderID}
          urlPath={item.url}
          imagePath={item.imagePath}
          companyTitle={item.title} indexID={index}
        />
      );
      if (OrderID === 0) {
        const prevIndexID = index - 1 < 0 ? items.length - 1 : index - 1;
        imagesList.push(
          <ImageSlot
            orderID={-1} urlPath={items[prevIndexID].url}
            imagePath={items[prevIndexID].imagePath}
            companyTitle={items[prevIndexID].title} indexID={-1}
          />
        );
      }
      if (OrderID === items.length - 1) {
        const nextIndexID = index + 1 >= items.length ? 0 : index + 1;
        imagesList.push(
          <ImageSlot
            orderID={items.length} urlPath={items[nextIndexID].url}
            imagePath={items[nextIndexID].imagePath}
            companyTitle={items[nextIndexID].title} indexID={items.length}
          />
        );
      }
    });
  }
  return (
    <div className={wrapperStyles(sliding, direction)}>
      {imagesList}
    </div>
  );
}

ImageSliderWrapper.propTypes = {
  items: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired,
  sliding: PropTypes.bool.isRequired,
  statePosition: PropTypes.number.isRequired
};
