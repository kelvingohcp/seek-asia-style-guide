import Tabs from './Tabs';
import * as sketch from './Tabs.sketch';
import React from 'react';
import PropTypes from 'prop-types';
import JobCard from '../JobCard/JobCard';
import PageBlock from '../PageBlock/PageBlock';

const TabsContainer = ({ component: DemoComponent, componentProps }) => {
  return (
    <PageBlock style={{ width: '100%' }}>
      <DemoComponent {...componentProps} />
    </PageBlock>
  );
};

TabsContainer.propTypes = {
  component: PropTypes.func,
  componentProps: PropTypes.object
};

export default {
  route: '/tabs',
  title: 'Tabs',
  component: Tabs,
  sketch,
  container: TabsContainer,
  initialProps: {
    items: [
      {
        title: 'Job Details',
        content: (
          <JobCard
            job={{
              company: {
                name: 'SEEK Asia'
              },
              isExpired: false,
              jobUrl: 'https://www-dev.jobstreet.com.my/en/job/20171002-3-senior-front-end-developer-update-x-2-6100835/origin/dev/sources/3?fr=J',
              jobTitle: 'Senior Software Engineer (6 months Contract)',
              locations: [
                {
                  link: '/jobCard',
                  name: 'Pahang'
                },
                {
                  child: {
                    child: {
                      name: 'Near Leisure Mall'
                    },
                    link: '/jobCard',
                    name: 'Cheras'
                  },
                  link: '/jobCard',
                  name: 'Selangor'
                }
              ],
              postingDuration: '1 hour ago',
              salary: 'RM99999 - RM999999',
              sellingPoints: [
                'We practice a vibrant & energetic office culture',
                'Our company supports a fun yet balanced working environment',
                'We support a safe environment for our employees'
              ]
            }}
            jobAdType="jobsdbDefault"
          />
        )
      },
      {
        title: 'Company Info',
        content: <div>Company info</div>
      }
    ]
  },
  options: []
};
