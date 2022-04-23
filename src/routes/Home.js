import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import ToDo from "../components/ToDo";
// import { actionCreators } from "../store";
import { add } from "../store";
//    { toDos, addToDo }
function Home() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state);

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatch(add(text));
    // dispatch(actionCreators.addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// function mapStateToProps(state) {
//   return { toDos: state };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(actionCreators.addToDo(text)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
