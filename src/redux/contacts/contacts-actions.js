import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const contactAdd = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

/* const contactAdd = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}); */

const contactDelete = createAction("contacts/delete");

/* const contactDelete = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
}); */

const filterChange = createAction("contacts/filterChange");

/* const filterChange = (value) => ({
  type: types.FILTER_CHANGE,
  payload: value,
}); */
const contactsAction = { contactAdd, contactDelete, filterChange };

export default contactsAction;
