import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
items: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
filteredItems: [], 
error: '',
      }

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    contactsAdd: (state, action) => {
      if (state.items.some((c) => c.name === action.payload.name)) {
             state.error = 'This contact is already exists in contacts'
            } else {
               state.items.push(action.payload);
            }  },
          
    contactsDelete: (state, action) => {
      state.items = state.items.filter((c) => {
        return c.id !== action.payload;
      } ) ;
    },

    findContact: (state, action) => {
      state.filteredItems = state.items.filter((c) =>
       c.name.includes(action.payload))
      
    },
      } 
  },
)

export const { contactsAdd, contactsDelete, findContact } = contactsSlice.actions;

export default contactsSlice.reducer;