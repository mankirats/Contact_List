import React from "react";

function ListContacts(props) {
  return (
    <>
      <ul>
        {props.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}
            <button onClick={() => props.remove(contact)}>REMove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListContacts;
