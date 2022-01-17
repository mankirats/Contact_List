import React from "react";

function ListContacts(props) {
  return (
    <>
      <ul>
        <li>{props.contactItem}</li>
      </ul>
    </>
  );
}

export default ListContacts;
