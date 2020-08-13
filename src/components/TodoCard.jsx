import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'components/basic/Card';
import Button from 'components/basic/Button';
import withStorage from 'storage/StorageHOC';

const TodoCard = function (props) {
  const showEdit = () => {
    props.toggleEdit(true);
  };

  const handleDelete = () => {
    if (window.confirm(`Do you really want to delete ${props.todo.title} ?`)) {
      props.doAction('DELETE_TODO', props.todo.id);
    }
  };

  return (
    <Card>
      <CardHeader data-testid="todo-title">{props.todo.title}</CardHeader>
      <p data-testid="todo-content">{props.todo.content}</p>
      <Button
        onClick={showEdit}
        data-testid="todo-edit-btn"
      >Edit</Button>
      <Button
        color="red"
        onClick={handleDelete}
        data-testid="todo-delete-btn"
      >Delete</Button>
    </Card>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.object.isRequired,
  doAction: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func,
};

export default withStorage(TodoCard);