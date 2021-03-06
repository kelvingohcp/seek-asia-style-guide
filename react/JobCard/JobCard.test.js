import React from 'react';
import { shallow } from 'enzyme';
import { JobCardForTest as JobCard } from './JobCard';
import { Text } from 'seek-asia-style-guide/react';
import omit from 'lodash/omit';

const defaultJob = {
  companyMeta: {
    name: 'SEEK Asia',
    link: '/jobCard',
    logoUrl: 'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png'
  },
  jobTitle: 'Senior Software Engineer (6 months Contract)',
  jobUrl:
    'https://www-dev.jobstreet.com.my/en/job/20171002-3-senior-front-end-developer-update-x-2-6100835/origin/dev/sources/3?fr=J',
  isExpired: false,
  locations: [
    {
      name: 'Pahang',
      link: '/jobCard'
    },
    {
      name: 'Selangor',
      link: '/jobCard',
      child: {
        name: 'Cheras',
        link: '/jobCard',
        child: {
          name: 'Near Leisure Mall'
        }
      }
    }
  ],
  description:
    'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...',
  postingDuration: '1 hour ago',
  qualificationName: 'Qualification Not Specified',
  careerLevelName: 'Entry Level',
  workExperienceName: '3 Years of Experience',
  employmentTermName: 'Full Time',
  salary: 'RM99999 - RM999999',
  bannerUrl: 'https://content.jobsdbcdn.com/Content/CmsContent/Logo/HK/JobsDBFiles/CompanyLogo/banner-m/34999m.png',
  shelf: {
    shelfLinks: [
      {
        label: 'Job function',
        items: [
          {
            name: 'Accountant',
            link: '/jobCard'
          }
        ]
      },
      {
        label: 'Industry',
        items: [
          {
            name: 'Accounting / Audit / Tax Services',
            link: '/jobCard'
          }
        ]
      }
    ]
  }
};

const defaultProps = {
  job: defaultJob,
  showCompanyLogo: false,
  showSellingPoint: true,
  showDescription: false,
  enableBrandedAd: false,
  tenant: 'jobsdb'
};

const sellingPoints = [
  'We practice a vibrant & energetic office culture',
  'Our company supports a fun yet balanced working environment',
  'We support a safe environment for our employees'
];

describe('JobCard', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<JobCard {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with missing qualification', () => {
    const wrapper = shallow(
      <JobCard
        {...{
          ...defaultProps,
          job: omit(defaultProps.job, ['qualificationName'])
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with company confidential in grey label', () => {
    const descriptionJob = {
      ...defaultJob,
      companyMeta: {
        name: 'Company Confidential',
        isPrivate: true
      }
    };

    const wrapper = shallow(<JobCard {...defaultProps} job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with Classified in grey label', () => {
    const descriptionJob = {
      ...defaultJob,
      classifiedLabel: 'Classified'
    };

    const wrapper = shallow(<JobCard {...defaultProps} job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with selling points props', () => {
    const descriptionJob = {
      ...defaultJob,
      sellingPoints
    };

    const wrapper = shallow(<JobCard {...defaultProps} job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render job title with bold keyword', () => {
    const descriptionJob = {
      ...defaultJob
    };
    const keyword = 'Seek Senior Engineer';
    const wrapper = shallow(<JobCard {...defaultProps} job={descriptionJob} keyword={keyword} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render company with bold keyword', () => {
    const descriptionJob = {
      ...defaultJob
    };
    const keyword = 'Seek';
    const wrapper = shallow(<JobCard {...defaultProps} job={descriptionJob} keyword={keyword} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render jobsDB default style', () => {
    const wrapper = shallow(
      <JobCard
        {...defaultProps}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render jobStreet standout style', () => {
    const wrapper = shallow(
      <JobCard
        {...defaultProps}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render plain company label', () => {
    const descriptionJob = {
      ...defaultJob,
      companyMeta: {
        name: 'Seek Asia'
      }
    };
    const wrapper = shallow(<JobCard {...defaultProps} job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render tag links', () => {
    const descriptionJob = {
      ...defaultJob,
      shelf: {
        ...defaultJob.shelf,
        tagLinks: [
          {
            child: 'keyword 1',
            link: '/jobCard'
          },
          {
            child: 'keyword 2',
            link: '/jobCard'
          }
        ]
      }
    };
    const wrapper = shallow(<JobCard {...defaultProps} job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render shelf section', () => {
    const descriptionJob = {
      ...defaultJob,
      shelf: null
    };
    const wrapper = shallow(<JobCard {...defaultProps} job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render shelf section when none of the shelf links has substantial items', () => {
    const descriptionJob = {
      ...defaultJob,
      shelf: {
        shelfLinks: [
          { label: 'Job Details', items: [] },
          { label: 'Industry', items: [] }
        ]
      }
    };
    const wrapper = shallow(<JobCard {...defaultProps} job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render job title component', () => {
    const wrapper = shallow(
      <JobCard
        {...defaultProps}
        job={defaultJob}
        TitleLinkComponent={() => (
          <Text waving semiStrong>
            Job Title
          </Text>
        )}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass through viewed prop', () => {
    const wrapper = shallow(
      <JobCard
        {...defaultProps}
        job={defaultJob}
        viewed
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with bookmark when job is saved', () => {
    const wrapper = shallow(<JobCard {...defaultProps} job={{ ...defaultJob, isSaved: true }} showSavedStatus onBookmarkClick={() => {}} />);
    expect(wrapper.find('[className="bookmarkButton"]')).toHaveLength(1);
    expect(wrapper.find('[type="bookmark"]').props().className).toBe('bookmarked');
  });

  it('should render with bookmark when job is not saved', () => {
    const wrapper = shallow(<JobCard {...defaultProps} job={{ ...defaultJob, isSaved: false }} showSavedStatus onBookmarkClick={() => {}} />);
    expect(wrapper.find('[className="bookmarkButton"]')).toHaveLength(1);
    expect(wrapper.find('[type="bookmark"]').props().className).not.toBe('bookmarked');
  });

  it('should not show bookmark if job is saved, but showSavedStatus is disabled', () => {
    const wrapper = shallow(<JobCard {...defaultProps} job={{ ...defaultJob, isSaved: false }} showSavedStatus={false} onBookmarkClick={() => {}} />);
    expect(wrapper.find('[className="bookmarkButton"]')).toHaveLength(0);
  });

  it('should render with applied badge', () => {
    const wrapper = shallow(<JobCard {...defaultProps} job={defaultJob} applied />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with expired badge', () => {
    const jobThatsExpired = {
      ...defaultJob,
      isExpired: true
    };
    const wrapper = shallow(<JobCard {...defaultProps} job={jobThatsExpired} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with viewed badge', () => {
    const wrapper = shallow(<JobCard {...defaultProps} job={defaultJob} viewed viewedDate='1 hour ago' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render the viewed badge if viewed date is undefined', () => {
    const wrapper = shallow(<JobCard {...defaultProps} job={defaultJob} viewed />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render only applied badge, when both applied and expired states are active', () => {
    const jobThatsExpired = {
      ...defaultJob,
      isExpired: true
    };
    const wrapper = shallow(<JobCard {...defaultProps} job={jobThatsExpired} applied />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without border', () => {
    const wrapper = shallow(<JobCard {...defaultProps} job={defaultJob} borderlessRoot={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with trackLinkClicked', () => {
    const spy = jest.fn();
    const wrapper = shallow(<JobCard {...defaultProps} job={defaultJob} trackLinkClicked={spy} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render branded ad', () => {
    const wrapper = shallow(<JobCard {...defaultProps} job={defaultJob} enableBrandedAd />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with selling points', () => {
    const wrapper = shallow(<JobCard {...defaultProps} job={defaultJob} sellingPoints={sellingPoints} />);

    expect(wrapper).toMatchSnapshot();
  });
});
