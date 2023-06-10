import { useCounter } from '../../hooks/useCounter'

export function Counter () {
  const { counter, handleDecrement, handleIncrement } = useCounter()

  return (
    <>
      <h1>
        Counter: <span data-testid="counter-value">{counter}</span>
      </h1>

      <button onClick={handleDecrement}>
        Decrement
      </button>

      <button onClick={handleIncrement}>
        Increment
      </button>
    </>
  )
}
