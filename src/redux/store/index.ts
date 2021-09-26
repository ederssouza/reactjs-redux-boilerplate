import { createStore } from 'redux'

import { reducers } from '../reducers'

export const store = createStore(reducers)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
