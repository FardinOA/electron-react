import { apiSlice } from '../apiSlice'

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (obj) => ({
        url: 'login',
        method: 'POST',
        body: obj
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
        } catch (error) {}
      }
    })
  })
})

export const { useLoginMutation } = userApi
