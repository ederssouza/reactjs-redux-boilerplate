import { combineReducers } from 'redux'

import { counterReducers } from './counter'

export const reducers = combineReducers({ counterReducers })
