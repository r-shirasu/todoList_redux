import React from "react";
import { useState } from "react";
import "./style.scss";

import { PostList } from "./features/posts/postlist/index.jsx";
import { AddPostForm } from "./features/posts/addpostform/index.jsx";

export const App = () => {
  const [isShowAlertMessage, setIsShowMessage] = useState(false);

  return (
    <div className="main">
      <h1>TO-DO LIST</h1>
      <AddPostForm setIsShowMessage={setIsShowMessage} />
      {isShowAlertMessage && (
        <div className="alertMessage">Todoを入力してください</div>
      )}
      <PostList />
    </div>
  );
};
