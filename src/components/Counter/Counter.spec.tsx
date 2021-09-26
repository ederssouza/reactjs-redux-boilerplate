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

    const $counterValue = screen.getByTestId('counter-value')

    expect($counterValue.textContent).toEqual('0')
  })

  it('should decrement -1 on counter when on click decrement button', () => {
    wrapper()

    const $counterValue = screen.getByTestId('counter-value')
    const $decrementButton = screen.getByTestId('decrement-button')

    fireEvent.click($decrementButton)
    fireEvent.click($decrementButton)

    expect($counterValue.textContent).toEqual('-2')
  })

  it('should increment +1 on counter when on click increment button', () => {
    wrapper()

    const $counterValue = screen.getByTestId('counter-value')
    const $incrementButton = screen.getByTestId('increment-button')

    fireEvent.click($incrementButton)
    fireEvent.click($incrementButton)

    expect($counterValue.textContent).toEqual('0')
  })
})
