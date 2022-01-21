import React, { useState } from "react";
import propTypes from "prop-types";

import escapeStringRegexp from "escape-string-regexp";

function ListContacts(props) {
  // const [contactSearch, setContactSearch] = useState(props.contacts);
  // const propTriggerResult = (searchResult) => {
  //   let match = new RegExp(escapeStringRegexp(searchResult, "i"));
  //   setContactSearch({
  //     contactSearch: props.contacts.filter((c) => match.test(c.name)),
  //   });
  // };
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
