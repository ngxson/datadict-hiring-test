import React from 'react';
import { Card, CardHeader } from 'components/basic/Card';
import Button from 'components/basic/Button';

const FAKE_DATA = [
  {id: 0, title: 'Nyuserre Ini', content: 'was a pharaoh of Ancient Egypt, the sixth ruler of the Fifth Dynasty during the Old Kingdom period.'},
  {id: 1, title: 'Neferirkare Kakai', content: 'The younger son of Neferirkare Kakai and queen Khentkaus II and the brother of the short-lived king Neferefre'},
  {id: 2, title: 'Neferirkare Kakai', content: 'The younger son of Neferirkare Kakai and queen Khentkaus II and the brother of the short-lived king Neferefre'},
  {id: 3, title: 'Neferirkare Kakai', content: 'The younger son of Neferirkare Kakai and queen Khentkaus II and the brother of the short-lived king Neferefre'},
];


class TodoList extends React.Component {
  render() {
    return (
      <>
        {FAKE_DATA.map(todo => (
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

export default TodoList;
