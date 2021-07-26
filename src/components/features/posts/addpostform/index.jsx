import "./style.scss";

export const AddPostForm = ({ handleClick, task, addTask }) => {
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
