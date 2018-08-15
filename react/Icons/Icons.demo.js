import React from 'react';
import Icons from './Icons';
import IconPack from './Icons.path';
import PropTypes from 'prop-types';
import { PageBlock } from 'seek-asia-style-guide/react';

const IconContainer = ({ component: DemoComponent, componentProps }) => {
  return (
    <PageBlock style={{ width: '100%' }}>
      <DemoComponent {...componentProps} />
    </PageBlock>
  );
};

IconContainer.propTypes = {
  component: PropTypes.func,
  componentProps: PropTypes.object
};

const getSvgPaths = IconPack.map(obj => {
  const rObj = {
    label: obj.name,
    transformProps: props => ({
      ...props,
      iconName: obj.name
    })
  };
  return rObj;
});
export default {
  route: '/icons',
  title: 'Icons',
  component: Icons,
  initialProps: {
    iconName: 'birthdate'
  },
  options: [
    {
      label: 'Type',
      type: 'radio',
      states: getSvgPaths
    }
  ]
};
