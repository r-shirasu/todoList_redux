import React, { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { postAdded } from "../postsSlice";

export const AddPostForm = ({ setIsShowMessage }) => {
  const [task, setTask] = useState("");

  const addTask = (e) => setTask(e.target.value);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    if (task === "") {
      setIsShowMessage(true);
      return;
    }
    dispatch(
      postAdded({
        task,
        isChecked: false,
      })
    );

    setTask("");
    setIsShowMessage(false);
  };

  return (
    <form onSubmit={handleClick} id="add">
      <input
        type="text"
        placeholder="new task"
        value={task}
        onChange={addTask}
      />
      <input type="submit" value="ADD" />
    </form>
  );
};
