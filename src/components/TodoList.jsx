import React from 'react';
import PropTypes from 'prop-types';
import TodoCard from 'components/TodoCard';
import TodoEditor from 'components/TodoEditor';
import withStorage from 'storage/StorageHOC';

class TodoList extends React.Component {
  state = {
    indexForEdit: null,
  };

  static propTypes = {
    todoList: PropTypes.array.isRequired,
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
            {'Let\'s add something 👀'}
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
