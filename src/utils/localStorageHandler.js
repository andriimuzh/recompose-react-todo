export function loadFromStorage() {
  let storageValue
  try{
  storageValue = JSON.parse(localStorage.getItem("tasks"))
  } catch(err) {
    storageValue = null
  }
  return storageValue
}

export function saveToStorage(task) {
  try{
    if (localStorage.getItem("tasks") === null) {
      let tasks = [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  } catch(err) {
    console.error(err)
  }
  }

export function rewriteTheStorage(tasks){
  try{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch(err) {
    console.error(err)
  }
  
}