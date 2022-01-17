
import React, { Component } from 'react'
import ListContact from './Components/ListContact';
class App extends Component {
    contacts = [
        {
          id: 'ryan',
          name: 'Ryan Florence',
          email: 'ryan@reacttraining.com',
        //   avatarURL: config.origin + '/ryan.jpg'
        },
        {
          id: 'michael',
          name: 'Michael Jackson',
          email: 'michael@reacttraining.com',
        //   avatarURL: config.origin + '/michael.jpg'
        },
        {
          id: 'tyler',
          name: 'Tyler McGinnis',
          email: 'tyler@reacttraining.com',
        //   avatarURL: config.origin + '/tyler.jpg'
        }
      ]
    render() {
        return (
            <>
                {this.contacts.map(contact=><ListContact key = {contact.id} contactItem={contact.name}></ListContact> )}
            </>
        )
    }
}
export default App;