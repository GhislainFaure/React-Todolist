import "../../data/tasks";
import "../../styles/index.scss";

function List({ tasksList, onTaskStatusChange }) {
  return (
    <ul className="list">
      {tasksList.map((task) => {
        return (
          <li key={task.id}>
            <label
              htmlFor={`task-${task.id}`}
              className={task.done ? "list-item list-item--done" : "list-item"}
            >
              <input
                id={`task-${task.id}`}
                type="checkbox"
                checked={task.done}
                onChange={() => onTaskStatusChange(task.id)}
              />
              {task.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
export default List;
