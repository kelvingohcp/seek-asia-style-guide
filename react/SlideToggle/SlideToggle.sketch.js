import React from 'react';
import SlideToggle from './SlideToggle';

const noop = () => {};

export const symbols = {
  'Slide Toggle/Unchecked': <SlideToggle id="1" label="Slide toggle" onChange={noop} checked={false} />,
  'Slide Toggle/Checked': <SlideToggle id="2" label="Slide toggle" onChange={noop} checked={true} />
};
