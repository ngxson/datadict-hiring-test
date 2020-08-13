import React from 'react';
import Storage from 'storage/Storage';

function withStorage(WrappedComponent) {
  return class StorageHOC extends React.Component {
    constructor(props) {
      super(props);

      // since addTodoListListener and removeTodoListListener
      // require the same reference for callback function,
      // the function must be binded in advance
      this.handleTodoListChangeBinded = this.handleTodoListChange.bind(this);
    }

    state = {
      todoList: [],
    };

    async componentDidMount() {
      this.setState({
        todoList: await Storage.getTodoList(),
      });
      Storage.addTodoListListener(this.handleTodoListChangeBinded);
    }

    componentWillUnmount() {
      Storage.removeTodoListListener(this.handleTodoListChangeBinded);
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