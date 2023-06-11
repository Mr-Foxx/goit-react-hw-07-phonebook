import { Countainer } from './Styles/Countainer';
import { TitleContact, TitlePhone } from './Styles/Titles';
import { Contacts } from './Contacts/Contacts';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <Countainer>
      <ToastContainer autoClose={1000} />

      <TitlePhone>Phonebook</TitlePhone>

      <Form />

      <TitleContact>Contacts</TitleContact>

      <Filter title="Find contacts by name" />

      <Contacts />
    </Countainer>
  );
}
