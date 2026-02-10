import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCAL_STORAGE_KEY } from "../const/localstorate";

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3031',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (token) {
        headers.set('authorized', token);
      }
      return headers;
    },
  }),
  endpoints: () => ({ }),
})
