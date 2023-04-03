import './../styles/TodoList.scss';

import { useEffect, useState } from 'react';

import { TodoItem } from './TodoItem';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px;
  text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 1.2em;
`;

const Counter = styled.p`
  text-align: right;
  width: 100%;
  font-size: 0.8em;
`;

export function TodoList({ TODO_LIST_DATA, updateList }) {
  const [items, setItems] = useState(TODO_LIST_DATA);

  useEffect(() => {
    setItems(TODO_LIST_DATA);
  }, [TODO_LIST_DATA]);

  function handleTaskCheck(checked, id) {
    const updatedItems = items.map((task) => {
      if (task.id === id) {
        return { ...task, completed: checked };
      }

      return task;
    });

    localStorage.setItem('TODO_LIST_DATA', JSON.stringify(updatedItems));
    setItems(updatedItems);
  }

  return (
    <Container key={TODO_LIST_DATA.length}>
      <Counter>
        Itens feitos: {items.filter((t) => t.completed).length}/{items.length}
      </Counter>
      <List>
        {items.map((task) => (
          <TodoItem key={task.id} task={task} onCheck={handleTaskCheck} />
        ))}
      </List>
    </Container>
  );
}
