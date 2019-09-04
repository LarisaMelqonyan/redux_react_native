import { connect } from "react-redux";
import TaskList from "../components/TaskList";

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch({ type: "TOGGLE_TASK", id }),
  editTask: (taskId, newText) =>
    dispatch({ type: "EDIT_TASK", taskId, newText })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
