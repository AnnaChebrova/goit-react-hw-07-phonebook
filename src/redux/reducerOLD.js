import { combineReducers } from 'redux';
import types from './contacts-types'


// {
//     contacts: {},
//     filter: ""
// }

const INITIAL_STATE = {
    contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
          ],
          error: '',
        }

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD:
            // if (state.contacts.name === action.payload.name) {
            //     return {
            //         ...state,
            //      error: 'This contact is already exists in contacts',
            // };
            // } else {
        return {
            ...state, 
        
            contacts: [
                 action.payload
            ],
        };
    
       

        default:
        return state; 
}
};

export default reducer;

// const filter = (state = '', action) => {
//     return state; 
// } 

// export default combineReducers({
//     contacts,
//     filter
// })

// defaultContacts
// const initialState = {
//     defaultContacts: [
//        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//      ]
//      };

// const addContactReducer = (state = initialState, action) => {
//    switch (action.type) {
//        case 'addContact':
//            return {
//                ...state,
//                defaultContacts: state.defaultContacts };
   
       
  