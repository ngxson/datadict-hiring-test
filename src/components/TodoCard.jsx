import React from 'react';
import { Card, CardHeader } from 'components/basic/Card';
import Button from 'components/basic/Button';

const TodoCard = function (props) {
  const showEdit = () => {
    props.toggleEdit(true);
  };

  return (
    <Card>
      <CardHeader>{props.todo.title}</CardHeader>
      <p>{props.todo.content}</p>
      <Button onClick={showEdit}>Edit</Button>
      <Button color="red">Delete</Button>
    </Card>
  );
}

export default TodoCard;