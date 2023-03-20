import { exampleApiSlice } from '@profilur/example-api'
import { databaseApiSlice } from '@profilur/database-api'
import exampleSlice from './example/exampleSlice'

/**
 * Add all reducers here
 */
export const reducers = {
  example: exampleSlice.reducer,

  //-----------------------------------------------------------
  // Add all api slices
  //-----------------------------------------------------------
  [exampleApiSlice.reducerPath]: exampleApiSlice.reducer,
  [databaseApiSlice.reducerPath]: databaseApiSlice.reducer,
}

//-----------------------------------------------------------
// add all api middlewares here
//-----------------------------------------------------------
export const extra_midlewares = [
  exampleApiSlice.middleware,
  databaseApiSlice.middleware,
]
