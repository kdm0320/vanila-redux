import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";
// import { actionCreators } from "../store";
//{ text, onBtnClick, id }
function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onBtnClick = () => dispatch(remove(id));
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
    // onBtnClick: () =>
    //   dispatch(actionCreatorsactionCreators.deleteToDo(ownProps.id)),
  };
}

export default ToDo;
// export default connect(null, mapDispatchToProps)(ToDo);
