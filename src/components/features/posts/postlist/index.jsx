import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { postAllClear, postDeleted, postChecked } from "../postsSlice";

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  return (
    <div className="tasksBoard">
      <ul>
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

            <label className={todo.isChecked ? "checked" : ""}>
              <input
                type="checkbox"
                checked={todo.isChecked}
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
