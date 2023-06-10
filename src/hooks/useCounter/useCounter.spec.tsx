import { useCounter } from '.'
import { actions } from '../../redux/actions/counter'
import { selectors } from '../../redux/selectors/counter'

type Props = {
  counter: number
}

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}))

const setup = ({ counter }: Props) => {
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

  describe('when call `handleDecrement` method', () => {
    it('should dispatch `actions.decrement`', () => {
      setup({ counter: 0 })

      const { handleDecrement } = useCounter()

      handleDecrement()

      expect(actions.decrement).toHaveBeenCalledTimes(1)
    })
  })

  describe('when call `handleIncrement` method', () => {
    it('should dispatch `actions.increment`', () => {
      const { handleIncrement } = useCounter()

      handleIncrement()

      expect(actions.increment).toHaveBeenCalledTimes(1)
    })
  })
})
