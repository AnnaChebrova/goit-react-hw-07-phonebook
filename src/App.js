import React from 'react';
import { useEffect, useState } from 'react';

import styles from './components/phonebook.module.css'
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';

import shortid from 'shortid';
import Filter from './components/Filter';
// import ContactList from './components/ContactList'
// import { connect }  from 'react-redux';
// import actions from './redux/contacts-types'
import { contactsAdd, contactsDelete } from './redux/contactsSlice'
import { useDispatch }  from 'react-redux';

  
  function App () {
  //   const [contacts, setContacts] = useState(()=>{
  //           return JSON.parse(window.localStorage.getItem('contacts', defaultContacts)) ?? []
  //         })
        
  //         const [filter, setFilter] = useState('');
        
  //        useEffect(()=>{
  //           window.localStorage.setItem('contacts',JSON.stringify(contacts))
  //         },[contacts])
        
  //       
//  }}
  
      // const changeFilter = e => {
      //     setFilter(e.currentTarget.value);
      //   }

        return (
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <Contacts />

          {/* <ContactList /> */}
        </div>
      )
        }
  export default App;

// const mapStateToProps = state => {
//     return {
//         defaultContacts: state.defaultContacts,
//     };
// };

const mapDispatchToProps = dispatch => ({
    onSubmit: number => dispatch (contactsAdd(number)),
    deleteContact: id => dispatch(contactsDelete(id)),

    });

//  mapDispatchToProps, mergeProps, options)(Component)


//   export default connect(null, mapDispatchToProps)(App)
