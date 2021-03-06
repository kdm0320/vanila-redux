import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});
const store = configureStore({ reducer: toDos.reducer });
export const { add, remove } = toDos.actions;

// const store = configureStore({ reducer });
// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((todo) => todo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export default store;
