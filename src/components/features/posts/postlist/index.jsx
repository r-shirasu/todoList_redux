import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { postAllClear } from "./postsSlice";

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  return (
    <div className="tasksBoard">
      <ul id="todo-list">
        {posts.map((todo, index) => (
          <li key={`${todo}${index}`}>
            <span>×</span>

            <label name={index} className={todo.isChecked ? "checked" : ""}>
              {/* <input type="checkbox" checked={todo.isChecked} name="check" /> */}
              <input type="checkbox" name="check" />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <p onClick={() => dispatch(postAllClear(posts))}>Clear</p>
    </div>
  );
};
