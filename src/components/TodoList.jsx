import React from 'react';
import { Card, CardHeader } from 'components/basic/Card';
import Button from 'components/basic/Button';
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
          <Card key={todo.id}>
            <CardHeader>{todo.title}</CardHeader>
            <p>{todo.content}</p>
            <Button>Edit</Button>
            <Button color="red">Delete</Button>
          </Card>
        ))}
      </>
    );
  }
}

export default withStorage(TodoList);
