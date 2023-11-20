import "../../styles/index.scss";

function Form({ onChangeInput, taskInput }) {
  return (
    <form className="form">
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={taskInput}
        onChange={onChangeInput}
      />
    </form>
  );
}
export default Form;
