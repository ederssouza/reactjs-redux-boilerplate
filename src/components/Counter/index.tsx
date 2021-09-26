import { useCounter } from '../../hooks/useCounter'

export function Counter () {
  const { counter, handleDecrement, handleIncrement } = useCounter()

  return (
    <>
      <h1>
        Counter: <span data-testid="counter-value">{counter}</span>
      </h1>

      <button
        data-testid="decrement-button"
        onClick={handleDecrement}
      >
        Decrement
      </button>

      <button
        data-testid="increment-button"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </>
  )
}
