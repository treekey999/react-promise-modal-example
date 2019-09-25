import React, { Component } from 'react'
import './App.scss'

import { confirmBox, formBox } from './promiseModal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <button
          type='button'
          className='btn-example form-input'
          onClick={async () => {
            // formBox example
            const { result, form } = await formBox({
              color: 'orange',
              title: 'Modal with Input',
              description: 'Custom form component of promise modal',
              confirmText: 'Confirm',
              initForm: { name: 'Treekey' },
              renderForm: (f, onChangeForm) => (
                <input
                  type='text'
                  name='name'
                  value={f.name}
                  onChange={(e) => {
                    const val = e.target.value
                    onChangeForm({...form, name: val })
                  }}
                />
              ),
            })

            if (result) {
              console.log(
                `%c Click FormBox!, input value is：${form.name}`,
                'color: red'
              )
            }
          }}
        >
          Modal with Input
        </button>

        <button
          type='button'
          className='btn-example logout'
          onClick={async () => {
            // async、await syntax, normal case
            const { result } = await confirmBox({
              color: 'primary',
              title: 'Logout',
              description: 'Are you sure to logout?',
            })

            if (result) {
              console.log('%c Click Confirm!, prepare to logout ...', 'color: blue')
            } else {
              console.log('%c Click Cancel!, nothing happened ...', 'color: black')
            }
          }}
        >
          Logout
        </button>

        <button
          type='button'
          className='btn-example submit'
          onClick={() => {
            // promise chain syntax
            confirmBox({
              color: 'info',
              title: 'Submit Form',
              description: 'Are you sure to submit form?',
              confirmText: 'Submit',
            }).then(({ result }) => {
              if (result) {
                console.log('%c Click Confirm!, prepare to fetch data to backend api ...', 'color: green')
              } else {
                console.log('%c Click Cancel!, nothing happened ...', 'color: black')
              }
            }) 
          }}
        >
          Submit
        </button>

        <button
          type='button'
          className='btn-example delete'
          onClick={async () => {
            // async、await syntax with try catch

            try {
              const { result } = await confirmBox({
                color: 'danger',
                title: 'Delete Product',
                description: 'Are you sure to delete this product?',
                confirmText: 'Delete',
              })

              if (result) {
                console.log('%c Click Confirm!, prepare to fetch data to delete product ...', 'color: red')
              } else {
                console.log('%c Click Cancel!, nothing happened ...', 'color: black')
              }
            } catch (e) {
              console.warn('something went wrong!', e)
            }
          }}
        >
          Destroy
        </button>
      </div>
    );
  }
}

export default App;
