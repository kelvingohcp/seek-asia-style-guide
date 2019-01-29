import React from 'react';
import PropTypes from 'prop-types';
import { JobCard, PageBlock, Constants } from 'seek-asia-style-guide/react';
import { BOOKMARKED, NOT_BOOKMARKED } from './jobCardHelper.js';

const { JOBADTYPE_JOBSDB_DEFAULT, JOBADTYPE_JOBSDB_BRANDED, JOBADTYPE_JOBSTREET_DEFAULT, JOBADTYPE_JOBSTREET_STANDOUT } = Constants;

const JobCardContainer = ({ component: DemoComponent, componentProps }) => {
  return (
    <PageBlock style={{ width: '100%' }}>
      <DemoComponent {...componentProps} />
    </PageBlock>
  );
};

JobCardContainer.propTypes = {
  component: PropTypes.func,
  componentProps: PropTypes.object
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
    items: [{
      name: 'Accounting / Audit / Tax Services',
      link: '/jobCard',
      title: 'Limit result to Accounting / Audit / Tax Services'
    }]
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
      company: {
        name: 'SEEK Asia',
        link: '/jobCard',
        title: 'Jobs at SEEK Asia'
      },
      jobTitle: 'Senior Software Engineer (6 months Contract)',
      jobUrl: 'https://www.jobstreet.com.my/en/job/senior-software-engineer-3565614?fr=21',
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
      description: 'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...',
      companyLogoUrl: 'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png',
      companyPictureUrl: 'https://siva.jsstatic.com/my/94463/images/photo/94463_photo_0_621506.jpg',
      postingDuration: '1 hour ago',
      salary: 'RM99999 - RM999999',
      sellingPoints: [
        'We practice a vibrant & energetic office culture',
        'Our company supports a fun yet balanced working environment',
        'We support a safe environment for our employees'
      ],
      isExpired: false,
      qualification: 'Qualification Not Specified',
      careerLevel: 'Entry Level',
      workExperience: '3 Years of Experience',
      employmentTerm: 'Full Time'
    },
    jobAdType: JOBADTYPE_JOBSDB_DEFAULT,
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
          label: 'Variation',
          transformProps: ({ className, ...props }) => ({
            ...props,
            isVariation: true
          })
        },
        {
          label: 'Split View',
          transformProps: ({ className, ...props }) => ({
            ...props,
            isSplitView: true
          })
        },
        {
          label: 'Applied',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job
            },
            applied: true
          })
        },
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
          label: 'Visited',
          transformProps: ({ className, ...props }) => ({
            ...props,
            viewed: true
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
          label: 'Company Confidential',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              company: {},
              confidentialLabel: 'Company Confidential'
            }
          })
        },
        {
          label: 'Classified',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
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
        {
          label: 'Hide Salary',
          transformProps: ({ className, ...props }) => ({
            ...props,
            hideSalary: true
          })
        },
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
              return (
                <span {...restProps}>
                  {children}
                </span>
              );
            }
          })
        },
        {
          label: 'Selected',
          transformProps: ({ className, ...props }) => ({
            ...props,
            isSelected: true
          })
        },
        {
          label: 'Shortened Location',
          transformProps: ({ className, ...props }) => ({
            ...props,
            showShortenedLocation: true
          })
        },
        {
          label: 'Borderless Root',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job
            },
            borderlessRoot: true
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
            bookmarked: BOOKMARKED
          })
        },
        {
          label: 'Not bookmarked',
          transformProps: props => ({
            ...props,
            bookmarked: NOT_BOOKMARKED
          })
        }
      ]
    },
    {
      label: 'JobAd Type',
      type: 'radio',
      states: [
        {
          label: 'jobsDB standard',
          transformProps: props => ({
            ...props,
            jobAdType: JOBADTYPE_JOBSDB_DEFAULT
          })
        },
        {
          label: 'jobsDB Branded',
          transformProps: props => ({
            ...props,
            jobAdType: JOBADTYPE_JOBSDB_BRANDED
          })
        },
        {
          label: 'jobStreet Default',
          transformProps: props => ({
            ...props,
            jobAdType: JOBADTYPE_JOBSTREET_DEFAULT
          })
        },
        {
          label: 'jobStreet Standout',
          transformProps: props => ({
            ...props,
            jobAdType: JOBADTYPE_JOBSTREET_STANDOUT
          })
        }
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
              companyLogoUrl: 'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png'
            }
          })
        },
        {
          label: 'Very long',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyLogoUrl: 'https://content.jobsdbcdn.com/Content/CmsContent/Logo/HK/JobsDBFiles/CompanyLogo/logo-l/23401l.png'
            }
          })
        },
        {
          label: 'Vertical',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyLogoUrl: 'https://content.jobsdbcdn.com/Content/CmsContent/Logo/HK/JobsDBFiles/CompanyLogo/logo-l/1689l.jpg'
            }
          })
        },
        {
          label: 'Square',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyLogoUrl: 'https://content.jobsdbcdn.com/Content/CmsContent/Logo/HK/JobsDBFiles/CompanyLogo/logo-l/28842l.png'
            }
          })
        }
      ]
    },
    {
      label: 'Company Pic',
      type: 'radio',
      states: [
        {
          label: 'Company Pic Size -- Normal',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyPictureUrl: 'https://siva.jsstatic.com/my/94463/images/photo/94463_photo_0_621506.jpg'
            }
          })
        },
        {
          label: 'Very long',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyPictureUrl: 'https://siva.jsstatic.com/my/56932/images/photo/56932_photo_0_213672.jpg'
            }
          })
        },
        {
          label: 'Vertical',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyPictureUrl: 'https://siva.jsstatic.com/my/86688/images/photo/86688_photo_0_400935.jpg'
            }
          })
        },
        {
          label: 'Square',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyPictureUrl: 'https://siva.jsstatic.com/my/119697/images/photo/119697_photo_0_738574.jpg'
            }
          })
        }
      ]
    }
  ]
};
