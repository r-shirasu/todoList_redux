import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { postAllClear, postDeleted, postChecked } from "./postsSlice";

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  return (
    <div className="tasksBoard">
      <ul id="todo-list">
        {posts.map((todo, index) => (
          <li key={`${todo}${index}`}>
            <span
              onClick={() =>
                dispatch(
                  postDeleted({
                    index,
                  })
                )
              }
            >
              ×
            </span>

            <label name={index} className={todo.isChecked ? "checked" : ""}>
              <input
                type="checkbox"
                checked={todo.isChecked}
                name="check"
                onChange={() =>
                  dispatch(
                    postChecked({
                      index,
                    })
                  )
                }
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <p onClick={() => dispatch(postAllClear(posts))}>Clear</p>
    </div>
  );
};
