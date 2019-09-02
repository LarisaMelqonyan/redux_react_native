import { connect } from "react-redux";
import TaskList from "../components/TaskList";

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch({ type: "TOGGLE_TASK", id }),
  editTask: text => dispatch({ type: "EDIT_TASK", text })
  // updateTask: text => dispatch({ type: 'UPDATE', text })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
