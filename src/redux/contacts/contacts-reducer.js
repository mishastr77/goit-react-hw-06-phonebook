import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
import initialContacts from "../../Data/initialContacts.json";

const items = createReducer(initialContacts, {
  [actions.contactAdd]: (state, { payload }) => [payload, ...state],
  [actions.contactDelete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.filterChange]: (_, { payload }) => payload,
});

/* const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
}; */

/* const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER_CHANGE:
      return payload;

    default:
      return state;
  }
}; */

export default combineReducers({
  items,
  filter,
});
