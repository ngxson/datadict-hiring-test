const getLocal = () => {
  const data = localStorage.getItem('todo_list');
  return data ? JSON.parse(data) : [];
}

const TODO_LIST = getLocal();
const TODO_LIST_LISTENERS = [];

const saveLocal = () => {
  localStorage.setItem('todo_list', JSON.stringify(TODO_LIST));
  for (const callback of TODO_LIST_LISTENERS) {
    callback(TODO_LIST);
  }
}

const ACTIONS = {
  'ADD_TODO': async (data) => {
    TODO_LIST.push({
      id: Date.now(),
      title: data.title,
      content: data.content,
    });
    saveLocal();
  },
  'EDIT_TODO': async ({ id, data }) => {
    for (const todo of TODO_LIST) {
      if (todo.id === id) {
        todo.title = data.title;
        todo.content = data.content;
        break;
      }
    }
    saveLocal();
  },
  'DELETE_TODO': async (id) => {
    for (const i in TODO_LIST) {
      if (TODO_LIST[i].id === id) {
        TODO_LIST.splice(i, 1);
        break;
      }
    }
    saveLocal();
  }
};

const addTodoListListener = (callback) => {
  TODO_LIST_LISTENERS.push(callback);
};

const removeTodoListListener = (callback) => {
  for (const i in TODO_LIST_LISTENERS) {
    if (TODO_LIST_LISTENERS[i] === callback) {
      TODO_LIST_LISTENERS.splice(i, 1);
    }
  }
};

const doAction = (tag, data) => {
  ACTIONS[tag](data);
}

const getTodoList = async () => {
  return TODO_LIST;
}

const Storage = {
  getTodoList,
  doAction,
  addTodoListListener,
  removeTodoListListener,
};

export default Storage;
