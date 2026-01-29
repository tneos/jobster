import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import customFetch from "../../utils/axios";
import {getUserFromLocalStorage} from "../../utils/localStorage";
import {logoutUser} from "../user/userSlice";
import {showLoading, hideLoading, getAllJobs} from "../allJobs/allJobsSlice";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export const createJob = createAsyncThunk("job/createJob", async (job, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());

    return response.data;
  } catch (error) {
    // Authentication error
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());

      return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
    }

    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

export const deleteJob = createAsyncThunk("job/deleteJob", async (jobId, thunkAPI) => {
  // Dispatch action that sets loading to true(Displayed in JobsContainer)
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    // Get updated data(action imported from all jobs slice)
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, {payload: {name, value}}) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createJob.pending, state => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, state => {
        state.isLoading = false;
        toast.success("Job created");
      })
      .addCase(createJob.rejected, (state, {payload}) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteJob.fulfilled, state => {
        state.isLoading = false;
        toast.success("Job successfully deleted");
      })
      .addCase(deleteJob.rejected, state => {
        toast.error("There was an error deleting the job");
      });
  },
});

export const {handleChange, clearValues} = jobSlice.actions;

export default jobSlice.reducer;
