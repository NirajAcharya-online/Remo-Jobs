import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import data from "../../utils/config";
export const jobsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: data.BASE_URL,
  }),
  endpoints: (builder) => ({
    getRemoteJobs: builder.query({
      query: (category) =>
        category
          ? `${data.REMOTE_JOBS}?category=${category}`
          : data.REMOTE_JOBS,
    }),
    searchJobs: builder.query({
      query: (keyword) => `${data.REMOTE_JOBS}?search=${keyword}`,
    }),
  }),
});

export const { useGetRemoteJobsQuery, useSearchJobsQuery } = jobsApi;
