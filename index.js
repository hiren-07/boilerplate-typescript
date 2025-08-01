/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/Store';
import Languages from './src/helper/language/Languages';


const Main = ()=>{
  
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => Main);
