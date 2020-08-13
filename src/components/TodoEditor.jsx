import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'components/basic/Card';
import Button from 'components/basic/Button';
import InputText from 'components/basic/InputText';
import Textarea from 'components/basic/Textarea';
import withStorage from 'storage/StorageHOC';

class TodoEditor extends React.Component {
  static propTypes = {
    todo: PropTypes.object,
    toggleEdit: PropTypes.func,
  };
  
  state = {
    id: null,
    title: '',
    content: '',
    isEdit: false,
  };

  componentDidMount() {
    const { todo } = this.props;
    if (todo) {
      this.setState({
        id: todo.id,
        title: todo.title,
        content: todo.content,
        isEdit: true,
      });
    }
  }

  handleInputChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  }

  handleSaveTodo() {
    if (this.state.isEdit) {
      this.handleEditTodo();
    } else {
      this.handleCreateTodo();
    }
  }

  async handleCreateTodo() {
    await this.props.doAction('ADD_TODO', {
      title: this.state.title,
      content: this.state.content,
    });

    // reset input fields
    this.setState({
      title: '',
      content: '',
    });
  }

  async handleEditTodo() {
    await this.props.doAction('EDIT_TODO', {
      id: this.state.id,
      data: {
        title: this.state.title,
        content: this.state.content,
      }
    });

    this.props.toggleEdit(false);
  }

  render() {
    return (
      <Card>
        {!this.state.isEdit && (
          <CardHeader>Add to list</CardHeader>
        )}
        <InputText
          value={this.state.title}
          onChange={this.handleInputChange('title')}
          placeholder="Title"
        />
        <Textarea
          value={this.state.content}
          onChange={this.handleInputChange('content')}
          placeholder="Content"
        />
        <Button
          onClick={this.handleSaveTodo.bind(this)}
        >
          {this.state.isEdit ? 'Save' : 'Add'}
        </Button>
      </Card>
    );
  }
}

export default withStorage(TodoEditor);
