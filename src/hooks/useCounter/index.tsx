import { useSelector, useDispatch } from 'react-redux'

import { actions } from '../../redux/actions/counter'
import { selectors } from '../../redux/selectors/counter'

interface IUseCounter {
  counter: number
  handleDecrement: () => void
  handleIncrement: () => void
}

export function useCounter (): IUseCounter {
  const counter = useSelector(selectors.getCounter)
  const dispatch = useDispatch()

  const handleDecrement = () => dispatch(actions.decrement())
  const handleIncrement = () => dispatch(actions.increment())

  return { counter, handleDecrement, handleIncrement }
}
