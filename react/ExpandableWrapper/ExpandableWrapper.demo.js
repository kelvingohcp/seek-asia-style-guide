import React from 'react';
import ExpandableWrapper from './ExpandableWrapper';
import { Card, Section, Text } from 'seek-asia-style-guide/react';

import * as sketch from './ExpandableWrapper.sketch';
export default {
  route: '/expandableWrapper',
  title: 'ExpandableWrapper',
  component: ExpandableWrapper,
  sketch,
  initialProps: {
    component: (
      <Card>
        <Section>
          <Text shouting>
            At jobsDB, we believe in an open and inclusive world for all.
          </Text>
          <Text>
            Here, opportunities and possibilities are plenty: A fresh start. A
            new career.<br />
            A welcome change. These are just a few of the things we help people
            explore.<br />
            As a leading job portal with substantial positions across China,
            Hong Kong, Indonesia, Philippines, Singapore and Thailand, we are
            Asia’s preferred destination for job seekers.<br />With a team of
            1,000 talented individuals, we’ve a strong local presence in every
            country we’re in.<br />
            With our understanding and insights on each market, as well our
            passion for technology, we provide job seekers the best
            opportunities and deliver exceptional value to employers.<br /> By
            really understanding our job seekers and employers, we ensure they
            find what’s right for them.<br /> After all, we’re not just about
            filling vacancies but fulfilling true potential.<br />
            e became part of the Australian Stock Exchange-listed SEEK Limited –
            the world’s largest job portal by market capitalisation.<br /> As
            part of the SEEK family, we leverage world-class products to match
            talented job seekers with reputable employers across the region. Of
            course, there’s always more to do.<br /> That’s why we continue to
            explore new frontiers across all online channels.<br /> So we can
            have the right person for the right job. There’s better out there.
            Here’s where you find it.<br />
          </Text>
        </Section>
      </Card>
    ),
    shrinkHeight: 100,
    maxHeight: 1000,
    label: 'Show more'
  },
  options: [
    {
      label: 'Min-height',
      type: 'radio',
      states: [
        {
          label: '100',
          transformProps: props => ({
            ...props,
            shrinkHeight: 100,
            maxHeight: 1000
          })
        },
        {
          label: '300',
          transformProps: props => ({
            ...props,
            shrinkHeight: 300,
            maxHeight: 1000
          })
        }
      ]
    }
  ]
};
