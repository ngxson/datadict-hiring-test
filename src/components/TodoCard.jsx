import React from 'react';
import { Card, CardHeader } from 'components/basic/Card';
import Button from 'components/basic/Button';

const TodoCard = function (props) {
  return (
    <Card>
      <CardHeader>{props.todo.title}</CardHeader>
      <p>{props.todo.content}</p>
      <Button>Edit</Button>
      <Button color="red">Delete</Button>
    </Card>
  );
}

export default TodoCard;