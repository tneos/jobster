import {showLoading, hideLoading, getAllJobs} from "../allJobs/allJobsSlice";
import customFetch, {checkForUnauthorizedResponse} from "../../utils/axios";
import {clearValues} from "./jobSlice";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs", job);
    thunkAPI.dispatch(clearValues());

    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  // Dispatch action that sets loading to true(Displayed in JobsContainer)
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`);
    // Get updated data(action imported from all jobs slice)
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const editJobThunk = async ({jobId, job}, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
