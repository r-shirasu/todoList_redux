import "./style.scss";

export const PostList = ({ todos }) => {
  return (
    <div className="tasksBoard">
      <ul id="todo-list">
        {todos.map((todo, index) => (
          <li key={`${todo}${index}`}>
            <span>×</span>

            <label name={index} className={todo.isChecked ? "checked" : ""}>
              <input type="checkbox" checked={todo.isChecked} name="check" />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <p>Clear</p>
    </div>
  );
};
