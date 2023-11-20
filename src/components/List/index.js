import "../../data/tasks";
import "../../styles/index.scss";

function List({ tasksList }) {
  return (
    <ul className="list">
      {tasksList.map((task) => {
        return (
          <li key={task.id}>
            <label
              for="`task-${task.id}`"
              className="list-item list-item--done"
            >
              <input id="`task-${task.id}`" type="checkbox" checked />
              {task.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
export default List;
