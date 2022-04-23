import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const id = useParams().id;
  const toDos = useSelector((state) => state);
  const toDoText = toDos.find((toDo) => toDo.id === parseInt(id));
  return (
    <>
      <h1>Detail</h1>
      <h2>{toDoText.text}</h2>
      <h4>Created at : {toDoText.id}</h4>
    </>
  );
}
function mapStateToProps(state) {
  return { toDos: state };
}
// export default connect(mapStateToProps)(Detail);
export default Detail;
