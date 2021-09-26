import { useSelector, useDispatch } from 'react-redux'

import { actions } from '../../actions/counter'
import { selectors } from '../../selectors/counter'

export function Counter () {
  const counter = useSelector(selectors.getCounter)
  const dispatch = useDispatch()

  const handleDecrement = () => dispatch(actions.decrement())
  const handleIncrement = () => dispatch(actions.increment())

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}
