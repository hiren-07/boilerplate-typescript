import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/Store'
import Root from './src/navigator/Root'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const App = () => {
  return (
     
         <SafeAreaProvider>
      <Provider store={store}>
        <Root />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App