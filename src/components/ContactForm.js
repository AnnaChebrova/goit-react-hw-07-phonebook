import { useState } from 'react';
import React from 'react';
import { connect }  from 'react-redux';
import { useDispatch, useSelector }  from 'react-redux';
import { contactsAdd, contactsDelete } from '../redux/contactsSlice'
import shortid from 'shortid';

import styles from './phonebook.module.css'

const ContactForm = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const items = useSelector((state) => state.contacts.items);
  const error = useSelector((state) => state.contacts.error);

//   useEffect(()=>{
//     window.localStorage.setItem('contacts',JSON.stringify(contacts))
//   },[contacts])



  const handleInputChange = (e) => {
      const { name, value } = e.currentTarget;

      switch (name) {
          case 'name':
              setName(value);
              break;
          case 'number':
              setNumber(value);
              break;
          default:
              return;
      }
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      const newContact = {
        id: shortid.generate(),
        name: name,
        number: number,
      };
           
    dispatch(contactsAdd(newContact))
        
    setName('');
    setNumber('');
  }

  
    //   if (existsContact(name.toLowerCase())) {
    //    return
    //   };

   
//   const deleteContact = (id) => dispatch(contactsDelete(id));

  return (
      <div>
      <form
          className={styles.form} onSubmit={handleSubmit} >
          <>
          <label> Name
          <input type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  className={styles.inputName}
                  value={name}
                  onChange={handleInputChange}
                  required />
          </label>    
              
              <label>Tel
                  <input type="tel" name="number" 
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Номер телефона должен состоять цифр может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  className={styles.inputTel} value={number} onChange={handleInputChange} required />
              </label>    
              
          <button  type="submit"
              className={styles.btn} >
              Add contact
              </button>
          </>    
      </form>
      {error && <p>{error}</p>}

 
 </div>
  )
}

export default ContactForm;


// const mapDispatchToProps = dispatch => ({
//     onSubmit: value => dispatch (onAddContact.addContact(value)),
//     });


//   export default connect(null, mapDispatchToProps)(ContactForm)
