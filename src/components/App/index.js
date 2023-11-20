// == Import
import Form from "../Form";
import Counter from "../Counter";
import List from "../List";

import "../../styles/index.scss";

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Counter />
    <List />
  </div>
);

// == Export
export default App;
