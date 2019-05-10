import React from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { Switch, Route } from "react-router-dom";

export default function App(props) {
  const {
    taskText,
    tasks,
    handleInputChange,
    removeTask,
    completeTask,
    addTask,
  } = props;
  return (
    <div className="app">
      <Header
        addTask={addTask}
        handleInputChange={handleInputChange}
        taskText={taskText}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <TodoList
              tasks={tasks}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          )}
        />
        <Route
          exact
          path="/new"
          render={() => (
            <TodoList
              tasks={tasks.filter((el) => !el.completed)}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              tasks={tasks.filter((el) => el.completed)}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          )}
        />
      </Switch>
      <Nav />
    </div>
  );
}
