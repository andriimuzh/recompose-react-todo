import { compose, withStateHandlers, lifecycle } from "recompose";
import { todoCreator } from "./utils/todoCreator.js";
import {
  loadFromStorage,
  rewriteTheStorage,
} from "./utils/localStorageHandler.js";
import App from "./App";

const enhance = compose(
  withStateHandlers(
    { tasks: [], taskText: "" },
    {
      handleInputChange: () => ({ target: { value } }) => {
        return { taskText: value };
      },
      addTask: ({ taskText, tasks }) => (event) => {
        event.preventDefault();
        if (taskText.search(/[a-zA-Zа-яА-Я]/) !== -1) {
          const newTodo = todoCreator(taskText.trim());
          return {
            taskText: "",
            tasks: [newTodo].concat(tasks),
          };
        } else {
          return;
        }
      },
      removeTask: ({ tasks }) => (id) => {
        const newTasks = tasks.filter((el) => el.id !== id);
        rewriteTheStorage(newTasks);
        return { tasks: newTasks };
      },
      completeTask: ({ tasks }) => (id) => {
        const newTasks = tasks.map((el) => {
          if (el.id === id) {
            el.completed = !el.completed;
          }
          return el;
        });
        rewriteTheStorage(newTasks);
        return { tasks: newTasks };
      },
      loadTasksFromStorage: () => () => {
        const tasks = loadFromStorage();
        if (tasks) {
          return { tasks };
        }
      },
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadTasksFromStorage();
    },
  }),
);

const EnhancedApp = enhance(App);
export default EnhancedApp;
