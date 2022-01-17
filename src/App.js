import React, { Component } from 'react'
import ListContacts from './Components/ListContacts';
import {CONTACTS} from './Components/contacts';
class App extends Component {
    state = {
        contacts:CONTACTS,
    }
    render() {
        return (
            <>
                {this.state.contacts.map(contact=><ListContacts key = {contact.id} contactItem={contact.name}/> )}
            </>
        )
    }
}
export default App;