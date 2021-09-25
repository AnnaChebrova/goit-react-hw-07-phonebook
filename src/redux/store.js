import { configureStore } from '@reduxjs/toolkit'

import contactsReducer from './contactsSlice'


export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  }
})

// import { connect }  from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
 
// const rootReducer = combineReducers({
//     contacts: reducer,
// });


// const store = createStore(rootReducer, composeWithDevTools());

// export default store;