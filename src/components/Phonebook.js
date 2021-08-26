import { useEffect, useState } from 'react';

import styles from './phonebook.module.css'
import React from 'react';
import ContactForm from './ContactForm';
import shortid from 'shortid';
import Filter from './Filter';
import ContactList from './ContactList'


const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


    export default function App() {
        const [contacts, setContacts] = useState(()=>{
          return JSON.parse(window.localStorage.getItem('contacts', defaultContacts)) ?? []
        })
      
        const [filter, setFilter] = useState('');
      
       useEffect(()=>{
          window.localStorage.setItem('contacts',JSON.stringify(contacts))
        },[contacts])
      

    const addContact = (name, number) => {
       
    const contact = {
          id: shortid.generate(),
          name,
          number,
        };
        console.log(contact);
        setContacts((prev) => { return [...prev, contact] });
      };

    const deleteContact = (contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId))
      });

    const changeFilter = e => {
        setFilter(e.currentTarget.value);
      };

      // const visibleContacts = () => {

      //   const normalizedFilter = filter.toLowerCase();
    
      //   return contacts.filter(contact =>
      //     contact.name.toLowerCase().includes(normalizedFilter)
      //   );
          
        
      // };

      return (
        <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))} deleteContact={deleteContact} />
      </div>
    )}
        

