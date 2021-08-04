import React from 'react';
import styles from './phonebook.module.css'

class ContactForm extends React.Component {

    state = {
        name: '',
        number: '',
    };

    handleInputChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value, });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addContact(this.state.name, this.state.number);

        this.reset();
    };

    reset = () => {
this.setState({
    name: '',
    number: ''
})
    };
    
        render() {

            return (

<form onSubmit={this.handleSubmit} className={styles.form}>
                <label> Name
                    <input className={styles.inputName}
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                     />
                </label>

                <label> Tel
                    <input className={styles.inputTel}
                    value={this.state.number}
                    onChange={this.handleInputChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    />
                </label>

                <button type="submit" className={styles.btn}>Add contact</button>
                </form>
            );
        }
    }

export default ContactForm;
