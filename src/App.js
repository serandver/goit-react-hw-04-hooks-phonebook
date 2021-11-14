import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import { v4 as uuidv4 } from 'uuid';
import Contact from './Contact';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsString = localStorage.getItem('contacts');
    const contacts = JSON.parse(contactsString);
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const id = uuidv4();
    const newContact = new Contact(id, name, number);
    if (contacts.find(contact => newContact.equals(contact))) {
      alert(`${newContact.name} already exists in contacts`);
      return;
    }
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = idContact => {
    setContacts(...contacts.filter(contact => contact.id !== idContact));
  };

  const changeFilter = event => {
    const filterValue = event.currentTarget.value;
    setFilter(filterValue);
  };

  const getFilteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    } else {
      return contacts;
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <h2>Phonebook</h2>
      <Form onSubmit={handleAddContact()} />
      {filteredContacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact()}
          />
        </div>
      )}
    </>
  );
}
