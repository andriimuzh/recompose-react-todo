import uuidv4 from "uuid";
import {saveToStorage} from "./localStorageHandler"

export function todoCreator(value) {
  let taskText;
  if (value.search(/[a-zA-Zа-яА-Я]/) === 0) {
    taskText = value[0].toUpperCase() + value.slice(1);
  } else {
    taskText = value;
  }
  const newTodo = {
    id: uuidv4(),
    task: taskText,
    completed: false,
  };
  saveToStorage(newTodo);
  return newTodo;
}


