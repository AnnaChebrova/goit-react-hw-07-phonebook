
import styles from './phonebook.module.css'
import React from 'react';
import ContactForm from './ContactForm';
import shortid from 'shortid';
import Filter from './Filter';
import ContactList from './ContactList'


class Phonebook extends React.Component {

    state = {
        contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
        filter: ''
      };


      addContact = (name, number) => {
          if (this.state.contacts.find((contact) => name.toLowerCase()
           === contact.name.toLocaleLowerCase())) {
               alert(`${name} is already in list`);
               return;
           }
           else if (name && number) {
               const contact = {
                   id: shortid.generate(), name, number};
               this.setState(prevState => ({
                   contacts: [contact, ... prevState.contacts],
               }));
           }
      };

      deleteContact = (contactId => {
          this.setState(prevState => ({
              contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
      });

      changeFilter = e => {
          this.setState({filter: e.currentTarget.value})
      }

    render() {

        return (
            <div className={styles.container}>
            <h1>Phonebook</h1>
            <ContactForm contacts={this.state.contacts} addContact={this.addContact} onSubmit={this.formSubmit}/>

            <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactList contacts={this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))} deleteContact={this.deleteContact} />
          </div>
        )}
        }



export default Phonebook;
