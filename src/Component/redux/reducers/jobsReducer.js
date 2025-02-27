import { FETCH_JOBS_FAILURE, FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, REMOVE_JOB } from "../actions";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { ...state, jobs: action.payload, loading: true, error: null };
    case FETCH_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case FETCH_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case REMOVE_JOB:
      return { ...state, jobs: state.jobs.filter((job) => job._id !== action.payload) };
    default:
      return state;
  }
};

export default jobsReducer;
