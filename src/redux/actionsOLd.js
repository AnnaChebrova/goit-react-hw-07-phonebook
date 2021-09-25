import shortid from 'shortid';



 function addContact({ name, number }) {
    return {
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number
    }
    };
}

function deleteContact (contactId) {
    return {
    type: types.DELETE,
    payload: {contactId},
    }
}

// function getContacts () {
//     return {
//     type: types.GET,
//     }
// }

  export default {addContact, deleteContact};




