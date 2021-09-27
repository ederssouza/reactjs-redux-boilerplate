<p align="center">
  <h1 align="center">Redux boilerplate to React JS apps</h1>
</p>

<p align="center">
  <a href="https://app.travis-ci.com/ederssouza/reactjs-redux-boilerplate">
    <img src="https://app.travis-ci.com/ederssouza/reactjs-redux-boilerplate.svg?branch=master" alt="Build Status" />
  </a>

  <a href='https://coveralls.io/github/ederssouza/reactjs-redux-boilerplate?branch=master'>
    <img src='https://coveralls.io/repos/github/ederssouza/reactjs-redux-boilerplate/badge.svg?branch=master' alt='Coverage Status' />
  </a>

  <a href="https://github.com/ederssouza/reactjs-redux-boilerplate/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat" alt="Coverage Status" />
  </a>
</p>

## About

A basic project structure to build React JS apps using Redux.

## Built using

- [React JS](https://reactjs.org): JavaScript library
- [Redux](https://redux.js.org/): A Predictable State Container for JS Apps
- [TypeScript](https://www.typescriptlang.org): JavaScript With Syntax For Types.
- [Jest](https://jestjs.io): JavaScript Testing Framework
- [React Testing Library](https://testing-library.com): Testing utilities

## Project structure

```bash
src
├── components
│   └── Counter
├── hooks
│   └── useCounter
├── redux
│   ├── actions
│   ├── constants
│   ├── reducers
│   ├── selectors
│   └── store
└── tests
    └── mocks
```

## Getting started

### Prerequisites

You need to install on your machine [Node.js](https://nodejs.org) or [Yarn](https://yarnpkg.com).

### Installing dependencies

```bash
npm install
# or
yarn install
```

## Project setup

### Compiles and hot-reloads for development

```bash
# start app open development mode
yarn start
# or
npm run start
```

### Compiles and minifies for production

```bash
yarn build
# or
npm run build
```

### Lints and fixes files
```bash
# show errors
yarn lint
# or
npm run lint

# fix errors
yarn lint:fix
# or
npm run lint:fix
```

### Run your unit tests

```bash
# run tests
yarn test
# or
npm run test

# run tests on watch mode
yarn test:watch
# or
npm run test:watch

# run tests on coverage mode
yarn test:coverage
# or
npm run test:coverage

# run tests on coverage with watch mode
yarn test:coverage:watch
# or
npm run test:coverage:watch
```

## How to create a reducer?

As an example, let's implement a counter component reducer. Files are also available in the repository. 
Follow the steps below to implement your first reducer.

1. Create action types constants, in the `constants` directory:

```js
// src/redux/constants/counter.ts 

export const actionTypes = {
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',
  COUNTER_INCREMENT: 'COUNTER_INCREMENT'
}
```

2. Create reducer, in the `reducers` directory:

```js
// src/redux/reducers/counter.ts 

import { actionTypes } from '../constants/counter'

interface IAction {
  type: 'COUNTER_DECREMENT' | 'COUNTER_INCREMENT'
}

const INITIAL_STATE = {
  counter: 0
}

export const counterReducers = (state = INITIAL_STATE, action: IAction) => {
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
```

3. Import reducer on reducers main file:

```js
// src/redux/reducers/index.ts

import { counterReducers } from './counter'

export const reducers = combineReducers({ 
  // ...
  counterReducers 
})
```

4. Create action types methods, in the `actions` directory:

```js
// src/redux/actions/counter.ts 

import { actionTypes } from '../constants/counter'

export const actions = {
  decrement: () => ({
    type: actionTypes.COUNTER_DECREMENT
  }),

  increment: () => ({
    type: actionTypes.COUNTER_INCREMENT
  })
}
```

5. Create selectors, in the `selectors` directory:

```js
// src/redux/selectors/counter.ts 
import { RootStateOrAny } from 'react-redux'

export const selectors = {
  getCounter: (state: RootStateOrAny) => state.counterReducers.counter
}
```

6. Create a custom hook, in the `hooks` directory:

```js
// src/hooks/useCounter/index.tsx

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
```

7. Import custom hook in the component:

```js
// src/components/Counter/index.tsx 

import { useCounter } from '../../hooks/useCounter'

export function Counter () {
  const { counter, handleDecrement, handleIncrement } = useCounter()

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={handleDecrement}>
        Decrement
      </button>

      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  )
}
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ederssouza/reactjs-redux-boilerplate/tags).

## Authors

See also the list of [contributors](https://github.com/ederssouza/reactjs-redux-boilerplate/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

----

Develop by Eder Sampaio 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/ederssouza).
