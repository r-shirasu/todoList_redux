import React from "react";
import { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./features/posts/postlist/postsSlice";

import { PostList } from "./features/posts/postlist/index.jsx";
import { AddPostForm } from "./features/posts/addpostform/index.jsx";

export const App = () => {
  const [task, setTask] = useState("");
  const [isShowAlertMessage, setIsShowMessage] = useState(false);

  const dispatch = useDispatch();

  const addTask = (e) => {
    setTask(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (task === "") {
      setIsShowMessage(true);
      return;
    }
    dispatch(
      postAdded({
        id: nanoid(),
        task,
        isChecked: false,
      })
    );

    setTask("");
    setIsShowMessage(false);
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
