import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../Redux/Actions/index";
import EditForm from "./EditForm";

const Task = ({ tasks }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.map((el) => (
        <div className="card">
          <h1 style={{ textDecoration: el.isDone ? "line-through" : "none" }} id={el.isDone ? "done" : ""}> {el.description} </h1>
          <button style={{marginLeft:"30px"}}  onClick={() => dispatch(completeTask(el.id))}>
            {" "}
            {el.isDone ? "Done" : "Complete"}{" "}
          </button>
          <EditForm el={el} />
          <button style={{marginLeft:"30px"}}  id="del" onClick={() => dispatch(deleteTask(el.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task;
