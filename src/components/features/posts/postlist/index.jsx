import "./style.scss";
import { useSelector } from "react-redux";

export const PostList = () => {
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
      <p>Clear</p>
    </div>
  );
};
