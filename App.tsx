import React from 'react'
import { Provider } from 'react-redux'
import store from './app/redux/Store'
import Root from './app/navigator/Root'

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App