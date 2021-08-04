import React from 'react';

const ContactList = ({contacts, deleteContact}) => (
    <ul>
        {contacts.map( ({id,name,number}) => (
             
            <li key={id}>
                <p>{name} : {number}</p>
                <button type="button" onClick={() => deleteContact(id)}>
                    delete contact
                </button>
            </li>
        )) }
             </ul>
        )
   

export default ContactList;