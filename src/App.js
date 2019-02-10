import React, { Component } from 'react'
import './App.scss'

import { ConfirmBox } from './promiseModal'

class App extends Component {
  render() {
    return (
      <div className="App">

        <ConfirmBox />

        <button
          type='button'
          className='btn-example logout'
        >
          Logout
        </button>

        <button
          type='button'
          className='btn-example submit'
        >
          Submit
        </button>

        <button
          type='button'
          className='btn-example delete'
        >
          Destroy
        </button>
      </div>
    );
  }
}

export default App;
