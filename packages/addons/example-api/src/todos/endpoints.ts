import { exampleApiSlice } from '../exampleApiSlice'
import { todosTransformer } from './utils'
import { ITodo } from '@profilur/types'

export const exampleApiTodosSlice = exampleApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => ({
        url: 'todos',
        responseHandler: todosTransformer,
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  getRunningOperationPromises: getRunningNavigationOperationPromises2,
} = exampleApiTodosSlice.util

export const { useGetTodosQuery } = exampleApiTodosSlice

// export endpoints for use in SSR
export const { getTodos } = exampleApiTodosSlice.endpoints
