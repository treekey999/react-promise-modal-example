import React, { Component } from 'react'
import './App.scss'

import { confirmBox } from './promiseModal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <button
          type='button'
          className='btn-example logout'
          onClick={() => {
            confirmBox({
              color: 'primary',
              title: 'Logout',
              description: 'Are you sure to logout?',
            }).then(() => {
              console.log('%c Click Confirm!, prepare to logout ...', 'color: blue')
            }).catch(() => {
              console.log('%c Click Cancel!, nothing happened ...', 'color: blue')
            }) 
          }}
        >
          Logout
        </button>

        <button
          type='button'
          className='btn-example submit'
          onClick={() => {
            confirmBox({
              color: 'info',
              title: 'Submit Form',
              description: 'Are you sure to submit form?',
              confirmText: 'Submit',
            }).then(() => {
              console.log('%c Click Confirm!, prepare to fetch data to backend api ...', 'color: green')
            }).catch(() => {
              console.log('%c Click Cancel!, nothing happened ...', 'color: green')
            }) 
          }}
        >
          Submit
        </button>

        <button
          type='button'
          className='btn-example delete'
          onClick={() => {
            confirmBox({
              color: 'danger',
              title: 'Delete Product',
              description: 'Are you sure to delete this product?',
              confirmText: 'Delete',
            }).then(() => {
              console.log('%c Click Confirm!, prepare to fetch data to delete product ...', 'color: red')
            }).catch(() => {
              console.log('%c Click Cancel!, nothing happened ...', 'color: red')
            }) 
          }}
        >
          Destroy
        </button>
      </div>
    );
  }
}

export default App;
