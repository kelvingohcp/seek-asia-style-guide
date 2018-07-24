import React from 'react';
import PropTypes from 'prop-types';
import CardLoader from './CardLoader';
import CardLoadingBar from '../CardLoadingBar/CardLoadingBar';
import PageBlock from '../PageBlock/PageBlock';

const cardLoadingBars = [
  (<div style={{ display: 'flex' }} key={1}>
    <div style={{ width: '30%' }}>
      <CardLoadingBar width={'80%'} height={5} />
    </div>
    <div style={{ width: '35%' }}>
      <CardLoadingBar width={40} />
      <CardLoadingBar />
      <CardLoadingBar width={'30%'} />
      <CardLoadingBar />
      <CardLoadingBar width={'30%'} />
    </div>
    <div style={{ width: '35%' }}>
      <CardLoadingBar width={40} inverse />
      <CardLoadingBar />
      <CardLoadingBar width={'30%'} inverse />
      <CardLoadingBar />
      <CardLoadingBar width={20} inverse />
    </div>
  </div>),
  (<CardLoadingBar key={2} />),
  (<CardLoadingBar width={'100%'} key={3} />)
];

const CardLoaderContainer = ({ component: DemoComponent, componentProps }) => {
  return (
    <PageBlock style={{ width: '100%' }}>
      <DemoComponent {...componentProps} >
        {cardLoadingBars}
      </DemoComponent>
    </PageBlock>
  );
};

CardLoaderContainer.propTypes = {
  component: PropTypes.element,
  componentProps: PropTypes.object
};

export default {
  route: '/CardLoader',
  title: 'Card Loader',
  component: CardLoader,
  container: CardLoaderContainer,
  initialProps: {
    children: cardLoadingBars
  },
  options: []
};
