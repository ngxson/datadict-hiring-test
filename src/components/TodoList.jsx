import React from 'react';
import TodoCard from 'components/TodoCard';
import withStorage from 'storage/StorageHOC';
import TodoEditor from './TodoEditor';

class TodoList extends React.Component {
  state = {
    indexForEdit: null,
  };

  toggleEdit(index, isShow) {
    this.setState({
      indexForEdit: isShow ? index : null,
    });
  }

  render() {
    return (
      <>
        {this.props.todoList.length === 0 && (
          <p>
            Let's add something 👀
          </p>
        )}
        {this.props.todoList.map((todo, index) => (
          this.state.indexForEdit === index
            ? <TodoEditor
              key={todo.id}
              todo={todo}
              toggleEdit={this.toggleEdit.bind(this, index)}
            />
            : <TodoCard
              key={todo.id}
              todo={todo}
              toggleEdit={this.toggleEdit.bind(this, index)}
            />
        ))}
      </>
    );
  }
}

export default withStorage(TodoList);
