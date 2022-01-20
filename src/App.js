import React, { Component } from "react";
import { CONTACTS } from "./Components/contacts";
import ListContacts from "./Components/ListContacts";
import SearchContacts from "./Components/SearchContacts";
class App extends Component {
  state = {
    contacts: CONTACTS,
  };
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id),
    }));
  };
  render() {
    return (
      <>
        <SearchContacts
          contacts={this.state.contacts}
          ResultDisplay={this.searchedContacts}
        ></SearchContacts>
        <ListContacts
          contacts={this.state.contacts}
          remove={this.removeContact}
        ></ListContacts>
      </>
    );
  }
}
export default App;
