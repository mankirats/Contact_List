import React, { Component } from 'react'
import {CONTACTS} from './Components/contacts';
import ListContacts from './Components/ListContacts';

class App extends Component {
    state = {
        contacts:CONTACTS,
    }
    removeContact = this.removeContact.bind(this);
    removeContact(contact){
        this.setState((state)=>({
            contacts: state.contacts.filter(c=>c.id!==contact.id)
        }))
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