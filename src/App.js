import React, { Component } from 'react'
import {CONTACTS} from './Components/contacts';
import ListContacts from './Components/ListContacts';

class App extends Component {
    state = {
        contacts:CONTACTS,
    }
    removeContact(contact){
        this.setState({
            contacts: this.state.contacts.filter(c=>c.id!=contact.id)
        })
    }
    render() {
        return (
            <>
                <ListContacts contacts = {this.state.contacts} remove={this.removeContact}></ListContacts>
            </>
        )
    }
}
export default App;