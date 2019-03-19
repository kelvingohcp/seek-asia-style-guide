import Constants from '../Constants/Constants';
const { JOBSTREET, JOBSDB } = Constants;
export default tenant => ({
  isJobStreet: tenant === JOBSTREET,
  isJobsDB: tenant === JOBSDB
});
