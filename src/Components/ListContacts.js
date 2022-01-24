import React, { useState } from "react";
import propTypes from "prop-types";
import SearchContacts from "./SearchContacts";
import escapeStringRegexp from "escape-string-regexp";
import styled from "styled-components";
import { device } from "../device";

const PageContainer = styled.div`
  padding: 1rem;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  @media ${device.laptop} {
    max-width: 50%;
  }
`;

const ContactList = styled.ul`
  padding: 0;
`;

const ShowAllButton = styled.a`
  color: #304ffe;
  font-weight: 500;
  cursor: pointer;
`;

const ContactItems = styled.li`
  background-color: #f7f7f8;
  position: relative;
  border: 0.1px solid #474747;
  border-radius: 4px;
  list-style-type: none;
  width: 100%;
  letter-spacing: 0.5px;
  padding: 0.5rem 2.5rem;
  margin-top: 5px;
  font-size: 1.05rem;
`;

const RemoveContactButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 3.5px;
  border-radius: 4px;
  background-color: transparent;
  color: #b00020;
  font-weight: 600;
  font-size: 0.9rem;
  border: transparent;
  outline: none;
  padding: 0.35rem;
  margin-right: auto;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactCounts = styled.div`
  padding: 1rem 0rem 0rem 0.5rem;
  text-align: center;
  font-weight: 500;
`;
const Avatar = styled.img`
  position: absolute;
  top: 3px;
  left: 4px;
  height: 1.9rem;
`;

function ListContacts(props) {
  let [contactSearch, setContactSearch] = useState("");

  const handlingSearch = (searchKey) => {
    setContactSearch((contactSearch = searchKey));
    console.log(contactSearch);
  };

  const showAllContacts = () => {
    setContactSearch((contactSearch = ""));
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
      {showingContacts.length < props.contacts.length ? (
        <ContactCounts>
          Now showing {showingContacts.length} of {props.contacts.length}{" "}
          Contacts{" "}
          <ShowAllButton onClick={() => showAllContacts()}>
            Show All
          </ShowAllButton>
        </ContactCounts>
      ) : (
        <></>
      )}
      <ContactList>
        {showingContacts.map((contact) => (
          <ContactItems key={contact.id}>
            <Avatar src={contact.avatar} alt="avatar" />
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
