import React from 'react';
import { Card, CardHeader } from 'components/basic/Card';
import Button from 'components/basic/Button';
import InputText from 'components/basic/InputText';
import Textarea from 'components/basic/Textarea';

class TodoEditor extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>Add to list</CardHeader>
        <InputText placeholder="Title" />
        <Textarea placeholder="Content" />
        <Button>Add</Button>
      </Card>
    );
  }
}

export default TodoEditor;
