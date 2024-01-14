import React from "react";
import "./style.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { onChangeInput, newTaskText, onSubmitForm } = this.props;
    return (
      <form className="form" onSubmit={onSubmitForm}>
        <input
          ref={this.inputRef}
          type="text"
          className="form-item"
          placeholder="Ajouter une tâche"
          value={newTaskText}
          onChange={onChangeInput}
        />
      </form>
    );
  }
}

export default Form;
