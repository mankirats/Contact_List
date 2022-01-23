import React, { useState } from "react";
import propTypes from "prop-types";
import SearchContacts from "./SearchContacts";
import escapeStringRegexp from "escape-string-regexp";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 1rem;
`;

const ContactList = styled.ul`
  padding: 0;
`;

const ContactItems = styled.li`
  position: relative;
  border: 0.1px solid #474747;
  border-radius: 4px;
  list-style-type: none;
  width: 100%;
  padding: 0.5rem 1.5rem;
  margin-top: 5px;
  font-size: 1.05rem;
`;

const RemoveContactButton = styled.button`
  position: absolute;
  right: 6px;
  bottom: 4.5px;
  border-radius: 4px;
  background-color: #474747;
  color: white;
  border: transparent;
  outline: none;
  padding: 0.35rem;
  margin-right: auto;
`;

const ContactCounts = styled.div`
  padding: 1rem 0rem 0rem 0.5rem;
  text-align: center;
`;

function ListContacts(props) {
  let [contactSearch, setContactSearch] = useState("");

  const handlingSearch = (searchKey) => {
    setContactSearch((contactSearch = searchKey));
    console.log(contactSearch);
  };
  let showingContacts;
  if (contactSearch) {
    const match = new RegExp(escapeStringRegexp(contactSearch), "i");
    showingContacts = props.contacts.filter((c) => match.test(c.name));
  } else {
    showingContacts = props.contacts;
  }

  return (
    <PageContainer>
      <SearchContacts
        liftingSearchInput={(val) => handlingSearch(val)}
      ></SearchContacts>
      <ContactCounts>
        Now showing {showingContacts.length} of {props.contacts.length} Contacts
      </ContactCounts>
      <ContactList>
        {showingContacts.map((contact) => (
          <ContactItems key={contact.id}>
            {contact.name}
            <RemoveContactButton onClick={() => props.remove(contact)}>
              REMOVE
            </RemoveContactButton>
          </ContactItems>
        ))}
      </ContactList>
    </PageContainer>
  );
}

ListContacts.propTypes = {
  contacts: propTypes.array.isRequired,
  remove: propTypes.func.isRequired,
};

export default ListContacts;
