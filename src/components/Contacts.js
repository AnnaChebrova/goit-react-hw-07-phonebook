import { useDispatch, useSelector }  from 'react-redux';
import {contactsDelete} from '../redux/contactsSlice'

function Contacts() {
    const items = useSelector((state) => state.contacts.items);
    
    const dispatch = useDispatch();

    const deleteContact = id => {
        dispatch(contactsDelete(id))
    }

    return (
        <div>
            <h2>Список контактов</h2>
             {items.map((item) => (
            <p key={item.id}>{item.name}: {item.number}
            <button type="button" onClick={() => deleteContact(item.id)}>
                 delete contact
            </button>
            </p>
            
             ))}

            
        </div>
    )}


export default Contacts;