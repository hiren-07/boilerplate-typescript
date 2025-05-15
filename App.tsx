import React from 'react';
import { Provider } from 'react-redux';
import Root from './app/Navigator/Root';
import { store } from './app/Redux/Store/Store';


const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
