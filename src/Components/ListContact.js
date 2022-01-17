import React from "react";

function ListContact(props) {
  return (
    <>
      <ul>
        <li>{props.contactItem}</li>
      </ul>
    </>
  );
}

export default ListContact;
