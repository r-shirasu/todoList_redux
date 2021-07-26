import "./style.scss";

export const PostList = ({ todos, handleCheck, clearAction, deleteAction }) => {
  return (
    <div className="tasksBoard">
      <ul id="todo-list">
        {todos.map((todo, index) => (
          <li key={`${todo}${index}`}>
            <span onClick={() => deleteAction(index)}>×</span>

            <label name={index} className={todo.isChecked ? "checked" : ""}>
              <input
                type="checkbox"
                checked={todo.isChecked}
                name="check"
                onChange={() => handleCheck(index)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <p onClick={clearAction}>Clear</p>
    </div>
  );
};
