import React from 'react'
import { Provider } from 'react-redux'
import store from './App/Redux/Store'
import Root from './App/Navigator/Root'

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App