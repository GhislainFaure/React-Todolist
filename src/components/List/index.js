import "../../styles/index.scss";

function List() {
  return (
    <ul class="list">
      <li>
        <label for="task-id" className="list-item list-item--done">
          <input id="task-id" type="checkbox" checked />
          Ketchup
        </label>
      </li>
      <li>
        <label for="task-id" className="list-item">
          <input id="task-id" type="checkbox" />
          Pâtes
        </label>
      </li>
      <li>
        <label for="task-id" className="list-item">
          <input id="task-id" type="checkbox" />
          Salade
        </label>
      </li>
    </ul>
  );
}
export default List;
