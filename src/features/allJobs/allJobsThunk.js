import customFetch, {checkForUnauthorizedResponse} from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
  const {page, search, searchStatus, searchType, sort} = thunkAPI.getState().allJobs;

  // Add dynamic values to query string
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  // Add search value if one exists
  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const response = await customFetch(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const res = await customFetch.get("/jobs/stats");
    console.log(res.data);
    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
