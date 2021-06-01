import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTask} from "../Redux/Actions/index"

const AddTask = ({ filter, handleFilter }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    text
      ? dispatch(addTask({ id: Math.random(), description: text, isDone: false }))
      : alert("fill the description plz!!!");
    setText("");
  };
  return (
    <div className="title">
      <h1> To Do List App </h1>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="   please enter a new task......"
          onChange={handleChange}
        />
        <button style={{marginLeft:"30px"}}  type="submit">Add</button>
      </form>
      <br></br>
      <button style={{marginTop:"30px", marginBottom:"20px"}}  onClick={handleFilter}> {filter ? "Done": "All"} </button>
    </div>
  );
};

export default AddTask;
