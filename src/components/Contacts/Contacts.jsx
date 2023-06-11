import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/phoneBookSlice';
import { ContactList, ItemsContact, DeleteBtn } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const query = useSelector(state => state.filter.filter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredContacts = filterContacts();

  return (
    <ContactList>
      {filteredContacts.map(contact => (
        <ItemsContact key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteBtn>
        </ItemsContact>
      ))}
    </ContactList>
  );
};
