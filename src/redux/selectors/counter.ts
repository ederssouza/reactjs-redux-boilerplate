import { RootStateOrAny } from 'react-redux'

export const selectors = {
  getCounter: (state: RootStateOrAny) => state.counterReducers.counter
}
