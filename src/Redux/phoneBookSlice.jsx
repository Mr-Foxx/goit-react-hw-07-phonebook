import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: initialContacts,
  },
  reducers: {
    addNewContact(state, actions) {
      const name = actions.payload.name;
      const number = actions.payload.number;
      const checkContact = state.contacts.find(item => item.name === name);

      if (checkContact !== undefined) {
        toast.success(`${name} is already in contacts.`);
      } else {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        state.contacts = [newContact, ...state.contacts];
      }
    },

    deleteContact(state, action) {
      const contactId = action.payload;

      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },
  },
});

export const { addNewContact, deleteContact } = phoneBookSlice.actions;

export default phoneBookSlice.reducer;
