let nextId = 0;
const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: nextId++,
          text: action.text,
          completed: false,
          editing: false
        }
      ];

    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );

    case "EDIT_TASK":
      let tasks = [...state];
      let indexOfUpdate = tasks.findIndex(task => {
        return task.id == action.taskId;
      });
      tasks[indexOfUpdate].text = action.newText;
      return tasks;

    case "UPDATE":
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            editing: !task.editing
          };
        } else return task;
      });
      break;
    default:
      return state;
  }
};

export default tasks;
