import React from 'react';
import { Card, CardHeader } from 'components/basic/Card';
import Button from 'components/basic/Button';
import InputText from 'components/basic/InputText';
import Textarea from 'components/basic/Textarea';
import withStorage from 'storage/StorageHOC';

class TodoEditor extends React.Component {
  state = {
    title: '',
    content: '',
  };

  handleInputChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  }

  handleSaveTodo() {
    this.props.doAction('ADD_TODO', {
      title: this.state.title,
      content: this.state.content,
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>Add to list</CardHeader>
        <InputText
          onChange={this.handleInputChange('title')}
          placeholder="Title"
        />
        <Textarea
          onChange={this.handleInputChange('content')}
          placeholder="Content"
        />
        <Button
          onClick={this.handleSaveTodo.bind(this)}
        >Add</Button>
      </Card>
    );
  }
}

export default withStorage(TodoEditor);
