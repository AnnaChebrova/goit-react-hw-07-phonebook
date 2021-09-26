import React, {useCallback, useState} from 'react';
import {findContact} from '../redux/contactsSlice'
import { useSelector, useDispatch } from "react-redux";
import styles from './phonebook.module.css'

function Filter() {
const dispatch = useDispatch();
const filteredItems = useSelector((state) => state.contacts.filteredItems);

const [query, setQuery] = useState('');

const handleChange = useCallback((e) => {
    setQuery(e.target.value);
})

const handleSearch = useCallback(() => {
        dispatch(findContact(query));
}, [dispatch, query]);

    return ( 
   <div>
    <label>
        Find contacts by name
        <input type="text" value={query} 
        onChange={handleChange} className={styles.inputFilter}/>
        <button onClick={handleSearch} className={styles.btnFilter}>Найти контакт</button>
      </label>
       {filteredItems.map((item) => (
        <p key={item.id}>{item.name}: {item.number}
        </p>
         ))}
    </div>
 );
};

export default Filter;