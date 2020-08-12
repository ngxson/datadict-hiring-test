import React from 'react';
import Storage from 'storage/Storage';

function withStorage(WrappedComponent) {
  return class StorageHOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoList: Storage.getTodoList(),
      };
    }

    componentDidMount() {
      Storage.addTodoListListener(this.handleTodoListChange.bind(this));
    }

    componentWillUnmount() {
      Storage.addTodoListListener(this.handleTodoListChange.bind(this));
    }

    handleTodoListChange(todoList) {
      this.setState({ todoList });
    }

    render() {
      return <WrappedComponent
        doAction={Storage.doAction}
        todoList={this.state.todoList}
        {...this.props}
      />;
    }
  }
}

export default withStorage;