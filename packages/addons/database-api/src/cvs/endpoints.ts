import { databaseApiSlice } from '../databaseApiSlice'
import { Cv } from '@profilur/database'

export const databaseApiCvsSlice = databaseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCvs: builder.query<Cv[], void>({
      query: () => ({
        url: 'cvs',
      }),
    }),
  }),
})

export const { useGetCvsQuery } = databaseApiCvsSlice

// export endpoints for use in SSR
export const { getCvs } = databaseApiCvsSlice.endpoints
