import { actionTypes } from '../constants/counter'

type Action = {
  type: 'COUNTER_DECREMENT' | 'COUNTER_INCREMENT'
}

const INITIAL_STATE = {
  counter: 0
}

export const counterReducers = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case actionTypes.COUNTER_DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }

    case actionTypes.COUNTER_INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }

    default:
      return state
  }
}
