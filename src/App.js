import React from 'react';
import styles from './components/phonebook.module.css'
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
  
  function App () {
 
        return (
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
         <Contacts />

          <Filter />
        </div>
      )
        }
  export default App;
