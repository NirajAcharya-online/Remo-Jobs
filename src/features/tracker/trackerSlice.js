import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { database } from "../../firebase/firebase";

export const fetchSavedJobs = createAsyncThunk(
  "tracker/fetchSavedJobs",
  async (user, { rejectWithValue }) => {
    try {
      const snap = await getDocs(
        collection(database, "user", String(user.uid), "savedJobs")
      );

      const docs = [];
      snap.forEach((d) => docs.push({ id: d.id, ...d.data() }));

      return docs;
    } catch (err) {
      return rejectWithValue(err.message || "fetch failed");
    }
  }
);

export const updateSavedJobs = createAsyncThunk(
  "tracker/updateSavedJobs",
  async ({ user, job }, { rejectWithValue }) => {
    try {
      if (!job?.id) throw new Error("job.id missing");

      await setDoc(
        doc(database, "user", String(user.uid), "savedJobs", String(job.id)),
        job
      );

      return job;
    } catch (err) {
      return rejectWithValue(err.message || "save failed");
    }
  }
);

export const deleteSavedJob = createAsyncThunk(
  "tracker/deleteSavedJob",
  async ({ user, id }, { rejectWithValue }) => {
    try {
      await deleteDoc(
        doc(database, "user", String(user.uid), "savedJobs", String(id))
      );
      return id;
    } catch (err) {
      return rejectWithValue(err.message || "delete failed");
    }
  }
);

const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    savedJobs: [],
    error: null,
    loading: false,
  },
  reducers: {
    clearStore: (state, action) => {
      state.savedJobs = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchSavedJobs.fulfilled, (state, action) => {
        state.savedJobs = action.payload;
        state.error = null;
      })
      .addCase(fetchSavedJobs.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(updateSavedJobs.fulfilled, (state, action) => {
        const job = action.payload;
        const i = state.savedJobs.findIndex((j) => j.id === job.id);

        if (i >= 0) state.savedJobs[i] = job;
        else state.savedJobs.push(job);

        state.error = null;
      })
      .addCase(updateSavedJobs.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(deleteSavedJob.fulfilled, (state, action) => {
        state.savedJobs = state.savedJobs.filter(
          (job) => job.id !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteSavedJob.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default trackerSlice.reducer;
export const { clearStore } = trackerSlice.actions;
