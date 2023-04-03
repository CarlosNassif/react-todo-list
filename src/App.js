import { useEffect, useRef, useState } from 'react';

import { TodoList } from './components/TodoList';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  flex: 1;
  border: none;
  background-color: #252526;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;

const TextInput = styled.input`
  border: 2px solid #000;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 11fr 1fr;
  column-gap: 16px;
`;

const RedButton = styled(Button)`
  background-color: tomato;
  color: white;
`;

const TODO_LIST_DATA = [
  {
    id: 1,
    title: 'Exemplo de tarefa',
    completed: false,
  },
  {
    id: 2,
    title: 'Task 2',
    completed: false,
  },
  {
    id: 3,
    title: 'Task 3',
    completed: false,
  },
];

function App() {
  const localStorageData = localStorage.getItem('TODO_LIST_DATA');
  const list = !!localStorageData
    ? JSON.parse(localStorageData)
    : TODO_LIST_DATA;

  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState(list);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  function addTodo() {
    if (!!input) {
      const newTodoList = [
        ...todoList,
        {
          id: Math.random().toString().split('.')[1],
          title: input,
          completed: false,
        },
      ];
      setTodoList(newTodoList);
      setInput('');
      localStorage.setItem('TODO_LIST_DATA', JSON.stringify(newTodoList));
    }
    console.log('🕵️‍♂️[id_da_task] → file: App.js:59 → App → input:', input);
    console.log('🕵️‍♂️[id_da_task] → file: App.js:74 → App → todoList:', todoList);
  }

  function clearList() {
    setTodoList([]);
    setInput('');
    localStorage.setItem('TODO_LIST_DATA', JSON.stringify([]));
  }

  return (
    <Container>
      <h1>TODO's</h1>
      <Grid>
        <TextInput
          value={input}
          onInput={(element) => setInput(element.target.value)}
        ></TextInput>
        <Button onClick={() => addTodo()}>+</Button>
      </Grid>
      <TodoList
        TODO_LIST_DATA={todoList}
        updateList={(list) => setTodoList(list)}
      />
      <RedButton
        onClick={() => {
          clearList();
        }}
      >
        Clear
      </RedButton>
    </Container>
  );
}

export default App;
