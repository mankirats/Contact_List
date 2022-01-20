import React from "react";
import propTypes from "prop-types";

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

ListContacts.propTypes = {
  contacts: propTypes.array.isRequired,
  remove: propTypes.func.isRequired,
};

export default ListContacts;
