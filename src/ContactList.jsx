// eslint-disable-next-line no-unused-vars
import React from "react";
import ContactItem from "./ContactItem";

// eslint-disable-next-line react/prop-types
function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          // eslint-disable-next-line no-undef
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
}

export default ContactList;
