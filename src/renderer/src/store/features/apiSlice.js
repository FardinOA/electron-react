import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pos-backend.1putym.easypanel.host/api`
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set('Access-Control-Allow-Origin', '*')
    //   headers.set('Content-type', 'application/json')
    //   return headers
    // }
  }),

  endpoints: (builder) => ({})
})
