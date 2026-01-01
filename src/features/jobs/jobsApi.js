import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import data from "../../utils/config";
export const jobsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: data.BASE_URL,
  }),
  endpoints: (builder) => ({
    getRemoteJobs: builder.query({
      query: () => data.REMOTE_JOBS,
    }),
  }),
});

export const { useGetRemoteJobsQuery } = jobsApi;
