import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { JobCard, PageBlock } from 'seek-asia-style-guide/react';
import omit from 'lodash/omit';
import { StyleGuideProvider, Constants } from 'seek-asia-style-guide/react';

const booleanProps = [
  {
    label: 'Show selling points',
    prop: 'showSellingPoint'
  },
  {
    label: 'Show description',
    prop: 'showDescription'
  },
  {
    label: 'Enable branded Ad',
    prop: 'enableBrandedAd'
  },
  {
    label: 'Hide Salary',
    prop: 'hideSalary'
  },
  {
    label: 'Visited',
    prop: 'viewed'
  },
  {
    label: 'Split View',
    prop: 'isSplitView'
  },
  {
    label: 'Shortened Location',
    prop: 'showShortenedLocation'
  },
  {
    label: 'Applied',
    prop: 'applied'
  },
  {
    label: 'Borderless Root',
    prop: 'borderlessRoot'
  },
  { label: 'New Job', prop: 'isNewJob' }
];

const renderBooleanProp = item => ({
  label: item.label,
  transformProps: ({ className, ...props }) => ({
    ...props,
    [item.prop]: true
  })
});

const JobCardContainer = ({ component: DemoComponent, componentProps }) => {
  const tenant = componentProps.tenant || Constants.JOBSDB;
  const [isActive, updateIsActive] = useState(false);
  const updateHighlight = () => {
    updateIsActive(!isActive);
  };

  return (
    <PageBlock style={{ width: '100%' }} onClick={updateHighlight}>
      <StyleGuideProvider fullScreen={true} enableWebFont={true} tenant={tenant}>
        <div style={{ width: '100%', backgroundColor: isActive ? '#ddf1fa' : 'white' }}>
          <DemoComponent {...componentProps} />
        </div>
      </StyleGuideProvider>
    </PageBlock>
  );
};

JobCardContainer.propTypes = {
  component: PropTypes.func,
  componentProps: PropTypes.object,
  tenant: PropTypes.string
};

const shelfLinks = [
  {
    label: 'Job function',
    searchMethod: 'Browse Job Function - SRP',
    items: [
      {
        name: 'Accounting',
        link: '/jobCard',
        title: 'Limit result to Accounting',
        children: [
          {
            name: 'Accountant',
            link: '/jobCard',
            title: 'Limit result to Accountant in Accounting'
          },
          {
            name: 'Audit',
            link: '/jobCard',
            title: 'Limit result to Audit in Accounting'
          },
          {
            name: 'Others',
            link: '/jobCard',
            title: 'Limit result to Others in Accounting'
          }
        ]
      },
      {
        name: 'Admin & HR',
        link: '/jobCard',
        title: 'Limit result to Admin & HR',
        children: [
          {
            name: 'Receptionist',
            link: '/jobCard',
            title: 'Limit result to Receptionist in Admin & HR'
          }
        ]
      }
    ]
  },
  {
    label: 'Industry',
    searchMethod: 'Browse Job Industry - SRP',
    items: [
      {
        name: 'Accounting / Audit / Tax Services',
        link: '/jobCard',
        title: 'Limit result to Accounting / Audit / Tax Services'
      }
    ]
  }
];

/* eslint-disable react/prop-types */
export default {
  route: '/jobCard',
  title: 'Job Card',
  component: JobCard,
  container: JobCardContainer,
  initialProps: {
    job: {
      companyMeta: {
        name: 'SEEK Asia',
        link: '/jobCard',
        title: 'Jobs at SEEK Asia',
        logoUrl:
          'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png'
      },
      jobTitle: 'Senior Software Engineer (6 months Contract)',
      jobUrl:
        'https://www.jobstreet.com.my/en/job/senior-software-engineer-3565614?fr=21',
      locations: [
        {
          name: 'Pahang',
          link: '/jobCard',
          title: 'Limit result to Pahang'
        },
        {
          name: 'Selangor',
          link: '/jobCard',
          title: 'Limit result to Selangor',
          child: {
            name: 'Cheras',
            link: '/jobCard',
            title: 'Limit result to Cheras in Selangor',
            child: {
              name: 'Near Leisure Mall'
            }
          }
        }
      ],
      description:
        'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...',
      postingDuration: '1 hour ago',
      salary: 'RM99999 - RM999999',
      sellingPoints: [
        'We practice a vibrant & energetic office culture',
        'Our company supports a fun yet balanced working environment',
        'We support a safe environment for our employees'
      ],
      isExpired: false,
      qualificationName: 'Degree',
      careerLevelName: 'Entry Level',
      workExperienceName: '3 Years of Experience',
      employmentTermName: 'Full Time',
      bannerUrl:
        'https://content.jobsdbcdn.com/Content/CmsContent/Logo/HK/JobsDBFiles/CompanyLogo/banner-m/34999m.png'
    },
    showCompanyLogo: false,
    showSellingPoint: false,
    showDescription: false,
    enableBrandedAd: false,
    viewedDate: '1 hour ago',
    onBookmarkClick: () => {
      alert('bookmark clicked'); // eslint-disable-line no-alert
    },
    trackLinkClicked: args => {
      console.log(`send '${args}' to omniture`); // eslint-disable-line no-alert
    }
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'AppliedDate',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              appliedDate: 'Applied on 20-Jul-2018'
            }
          })
        },
        {
          label: 'Featured',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              featuredLabel: 'Featured'
            }
          })
        },
        {
          label: 'Private advertiser',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              companyMeta: {
                name: 'Company Confidential',
                isPrivate: true
              }
            }
          })
        },
        {
          label: 'Classified',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...omit(props.job, [
                'qualificationName',
                'employmentTermName',
                'workExperienceName',
                'careerLevelName'
              ]),
              classifiedLabel: 'Classified'
            }
          })
        },
        {
          label: 'No Salary',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              salary: null
            }
          })
        },
        ...booleanProps.map(renderBooleanProp),
        {
          label: 'Highlight Keyword',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job
            },
            keyword: 'seek senior engineer'
          })
        },
        {
          label: 'Shelf links',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              shelf: {
                ...props.job.shelf,
                shelfLinks
              }
            }
          })
        },
        {
          label: 'Tag links',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              shelf: {
                ...props.job.shelf,
                tagLinks: [
                  {
                    name: 'keyword 1',
                    link: '/jobCard',
                    title: 'Limit result to Keyword 1'
                  },
                  {
                    name: 'keyword 2',
                    link: '/jobCard',
                    title: 'Limit result to Keyword 2'
                  }
                ]
              }
            }
          })
        },
        {
          label: 'Custom Link (e.g. text only)',
          transformProps: ({ className, ...props }) => ({
            ...props,
            LinkComponent: ({ link, children, ...restProps }) => (
              <span {...restProps}>{children}</span>
            )
          })
        },
        {
          label: 'Job Title Component',
          transformProps: ({ className, ...props }) => ({
            ...props,
            trackLinkClicked: console.log,
            TitleLinkComponent: ({ link, children, ...restProps }) => {
              return <span {...restProps}>{children}</span>;
            }
          })
        }
      ]
    },
    {
      label: 'Bookmark',
      type: 'radio',
      states: [
        {
          label: 'No Bookmark',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'Bookmarked',
          transformProps: props => ({
            ...props,
            showSavedStatus: true,
            job: {
              ...props.job,
              isSaved: true
            }
          })
        },
        {
          label: 'Not bookmarked',
          transformProps: props => ({
            ...props,
            showSavedStatus: true,
            job: {
              ...props.job,
              isSaved: false
            }
          })
        }
      ]
    },
    {
      label: 'States',
      type: 'checklist',
      states: [
        renderBooleanProp({
          label: 'Show company logo',
          prop: 'showCompanyLogo'
        })
      ]
    },
    {
      label: 'Company Logo',
      type: 'radio',
      states: [
        {
          label: 'Company Logo Size -- Normal',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyMeta: {
                ...props.job.companyMeta,
                logoUrl:
                  'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png'
              }
            }
          })
        },
        {
          label: 'Very long',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyMeta: {
                ...props.job.companyMeta,
                logoUrl:
                  'https://content.jobsdbcdn.com/Content/CmsContent/Logo/HK/JobsDBFiles/CompanyLogo/logo-l/23401l.png'
              }
            }
          })
        },
        {
          label: 'Vertical',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyMeta: {
                ...props.job.companyMeta,
                logoUrl:
                  'https://content.jobsdbcdn.com/Content/CmsContent/Logo/HK/JobsDBFiles/CompanyLogo/logo-l/1689l.jpg'
              }
            }
          })
        },
        {
          label: 'Square',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyMeta: {
                ...props.job.companyMeta,
                logoUrl:
                  'https://content.jobsdbcdn.com/Content/CmsContent/Logo/HK/JobsDBFiles/CompanyLogo/logo-l/28842l.png'
              }
            }
          })
        }
      ]
    },
    {
      label: 'Tenant',
      type: 'radio',
      states: [
        {
          label: Constants.JOBSDB,
          transformProps: props => ({
            ...props,
            tenant: Constants.JOBSDB
          })
        },
        {
          label: Constants.JOBSTREET,
          transformProps: props => ({
            ...props,
            tenant: Constants.JOBSTREET
          })
        }
      ]
    }
  ]
};
