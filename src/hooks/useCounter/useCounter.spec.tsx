import { useCounter } from '.'
import { actions } from '../../redux/actions/counter'
import { selectors } from '../../redux/selectors/counter'

interface ISetupProps {
  counter: number
}

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}))

const setup = ({ counter }: ISetupProps) => {
  jest.spyOn(selectors, 'getCounter').mockReturnValue(counter)
  jest.spyOn(actions, 'decrement')
  jest.spyOn(actions, 'increment')
}

describe('useCounter hook', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('should dispatch `actions.decrement` when call `handleDecrement` method', () => {
    setup({ counter: 0 })

    const { handleDecrement } = useCounter()

    handleDecrement()

    expect(actions.decrement).toHaveBeenCalledTimes(1)
  })

  it('should dispatch `actions.increment` when call `handleIncrement` method', () => {
    const { handleIncrement } = useCounter()

    handleIncrement()

    expect(actions.increment).toHaveBeenCalledTimes(1)
  })
})
