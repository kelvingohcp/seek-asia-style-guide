import React from 'react';
import Header from './Header';

export const blockSymbols = {
  'JobsDB/Header/Logged out': <Header country="hk" language="en" user={{}} />,
  'JobsDB/Header/Logged in': (
    <Header country="hk" language="en" user={{ candidate: { id: 1, username: 'Rey' } }} />
  ),
  'JobsDB/Header without country and language': (
    <Header user={{ candidate: { id: 1, username: 'Rey' } }} />
  )
};
