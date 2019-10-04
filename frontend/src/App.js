import React from 'react';
import './App.css';
import { Provider } from 'react-redux'

import Operations from './components/Operations/Operations'
import OperationForm from './components/OperationForm/OperationForm'

import store from './store'

const App = () => {
  return (
    <Provider store={store}>

      <div className="App">
        <header className="App-header">
          <h1 style={{textAlign: 'center'}}>Bunkey Test</h1>
        </header>
        <OperationForm />
        <hr/>
        <Operations />
      </div>

    </Provider>
  );
}

export default App;
