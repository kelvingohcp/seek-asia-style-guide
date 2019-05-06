import React from 'react';
import SlideToggle from './SlideToggle';

const noop = () => {};

export const symbols = {
  'Slide Toggle/Unchecked': <SlideToggle id="1" label="Slide toggle" onChange={noop} checked={false} />,
  'Slide Toggle/Checked': <SlideToggle id="2" label="Slide toggle" onChange={noop} checked={true} />,
  'Slide Toggle/Unchecked, right to left': <SlideToggle id="3" label="Slide toggle" onChange={noop} checked={false} toggleAfterLabel />,
  'Slide Toggle/Checked, right to left': <SlideToggle id="4" label="Slide toggle" onChange={noop} checked={true} toggleAfterLabel />,
  'Slide Toggle/No label': <SlideToggle id="5" label="Slide toggle" onChange={noop} hideLabel />
};
