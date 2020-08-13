import React from 'react';
import PropTypes from 'prop-types';
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

TodoCard.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleEdit: PropTypes.func,
};

export default TodoCard;