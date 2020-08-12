import React from 'react';
import TodoCard from 'components/TodoCard';
import withStorage from 'storage/StorageHOC';

class TodoList extends React.Component {
  render() {
    return (
      <>
        {this.props.todoList.length === 0 && (
          <p>
            Let's add something 👀
          </p>
        )}
        {this.props.todoList.map(todo => (
          <TodoCard
            key={todo.id}
            todo={todo}
          />
        ))}
      </>
    );
  }
}

export default withStorage(TodoList);
