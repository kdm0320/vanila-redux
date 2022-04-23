import { createAction } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
