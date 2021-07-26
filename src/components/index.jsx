import React from "react";
import { useState } from "react";
import "./style.scss";

import { PostList } from "./features/posts/postlist/index.jsx";
import { AddPostForm } from "./features/posts/addpostform/index.jsx";

export const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [isShowAlertMessage, setIsShowMessage] = useState(false);

  const addTask = (e) => {
    setTask(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (task === "") {
      setIsShowMessage(true);
      return;
    }

    setIsShowMessage(false);
    setTodos(todos.concat({ task: task, isChecked: false }));
    setTask("");
  };

  return (
    <div className="main">
      <h1>TO-DO LIST</h1>
      <AddPostForm handleClick={handleClick} addTask={addTask} />
      {isShowAlertMessage && (
        <div className="alertMessage">Todoを入力してください</div>
      )}
      <PostList />
    </div>
  );
};
