import { useDispatch, useSelector }  from 'react-redux';
import {contactsDelete} from '../redux/contactsSlice'
import styles from './phonebook.module.css'

function Contacts() {
    const items = useSelector((state) => state.contacts.items);
    
    const dispatch = useDispatch();

    const deleteContact = id => {
        dispatch(contactsDelete(id))
    }

    return (
        <div className={styles.list}>
             {items.map((item) => (
            <p key={item.id} className={styles.contact}>{item.name}: {item.number}
            <button type="button" onClick={() => deleteContact(item.id)} className={styles.btnList}>
                 delete contact
            </button>
            </p>
             ))}
        </div>
    )}

export default Contacts;