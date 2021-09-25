import React, {useCallback, useState} from 'react';
import {findContact} from '../redux/contactsSlice'
import { useSelector, useDispatch } from "react-redux";

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
        onChange={handleChange} />
        <button onClick={handleSearch}>Найти контакт</button>
      </label>

       {filteredItems.map((item) => (
        <p key={item.id}>{item.name}: {item.number}

        </p>
        
         ))}
    </div>

 );
};

// const Filter = () => {
//     const value = useSelector(((state) => state.contacts.items));
//     const dispatch = useDispatch();
//     const onChange = (e) =>
//       dispatch(filter(e.target.value));
//     return (
//       <label>
//         Find contacts by name
//         <input type="text" value={value} onChange={onChange} />
//       </label>
//     );
//   };

// const value = (e) => e.currentTarget;

// const Filter = ({ payload, onChange }) => (
//     <label> Find contact by name
// <input type="text" value={payload} onChange={onChange}/>
//     </label>
// );

export default Filter;