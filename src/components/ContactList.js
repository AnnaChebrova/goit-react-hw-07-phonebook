import React from 'react';
import { connect }  from 'react-redux';
import { contactsAdd, contactsDelete } from '../redux/contactsSlice'
// import { useDispatch }  from 'react-redux';

import { useSelector }  from 'react-redux';


function ContactList() {
    const items = useSelector((state) => state.contacts);
    return (
        <ul >
            {items && items.map(({ id, name, number }) => {
                return (
                    <li key={id}>
                        <span>{name}</span><span>{number}</span>
                        {/* <button
                            className={style.btn}
                            type="button"
                            id={id}
                            onClick={() => onDeleteContact(id)}
                        >
                            Delete</button> */}
                    </li>
                );
            })}
        </ul>

    );
    
            }
            
export default ContactList;

// const mapStateToProps = state => ({
//     contacts: state.contacts,
// });

// const mapDispatchToProps = dispatch => ({
//     deleteContact: id => dispatch(contactsActions.deleteContact(id)),
//     });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList)

