import React from 'react'
import Login from './Components/Login';
import Body from './Components/Body';
import {Provider} from 'react-redux';
import appStore from './Utils/AppStore';

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
      <Body/>
      </Provider>
    </div>
  )
}

export default App
