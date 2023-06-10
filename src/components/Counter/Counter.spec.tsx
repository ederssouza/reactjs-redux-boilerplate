import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { Counter } from '.'
import { store } from '../../redux/store'

const wrapper = () => render(
  <Provider store={store}>
    <Counter />
  </Provider>
)

describe('Counter component', () => {
  it('should render with success', () => {
    wrapper()

    const counterValue = screen.getByTestId('counter-value')

    expect(counterValue.textContent).toEqual('0')
  })

  describe('when on click decrement button', () => {
    it('should decrement -1 on counter', () => {
      wrapper()

      const counterValue = screen.getByTestId('counter-value')
      const decrementButton = screen.getByRole('button', { name: 'Decrement' })

      fireEvent.click(decrementButton)
      fireEvent.click(decrementButton)

      expect(counterValue.textContent).toEqual('-2')
    })
  })

  describe('when on click increment button', () => {
    it('should increment +1 on counter', () => {
      wrapper()

      const counterValue = screen.getByTestId('counter-value')
      const incrementButton = screen.getByRole('button', { name: 'Increment' })

      fireEvent.click(incrementButton)
      fireEvent.click(incrementButton)

      expect(counterValue.textContent).toEqual('0')
    })
  })
})
