import { actionTypes } from '../constants/counter'

export const actions = {
  decrement: () => ({
    type: actionTypes.COUNTER_DECREMENT
  }),

  increment: () => ({
    type: actionTypes.COUNTER_INCREMENT
  })
}
