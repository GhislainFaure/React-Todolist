import "../../styles/index.scss";

function Counter({ nbOfOnGoingTasks }) {
  return <p className="counter">{nbOfOnGoingTasks} tâche(s) en cours</p>;
}

export default Counter;
