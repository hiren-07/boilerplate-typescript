import React from 'react'
import { Provider } from 'react-redux'
import Root from './app/navigator/Root'
import store from './app/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App