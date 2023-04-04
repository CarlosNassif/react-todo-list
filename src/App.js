import { useState } from 'react';

import { TodoList } from './components/TodoList';
import { Button } from './components/styles/Button.styled';
import { FlexContainerCentered } from './components/styles/FlexContainerCentered.styled';
import { Grid } from './components/styles/Grid.styled';
import { TextInput } from './components/styles/TextInput.styled';
import { Title } from './components/styles/Title.styled';
import { RedButton } from './components/styles/RedButton.styled';

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

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      addTodo();
    }
  }

  return (
    <FlexContainerCentered>
      <Title>TO-DOs</Title>
      <Grid>
        <TextInput
          value={input}
          onInput={(element) => setInput(element.target.value)}
          onSubmit={() => addTodo()}
          onKeyUp={(e) => handleKeyUp(e)}
        ></TextInput>
        <Button onClick={() => addTodo()}>ADD</Button>
      </Grid>
      <TodoList todoList={todoList} />
      <RedButton
        onClick={() => {
          clearList();
        }}
      >
        Clear
      </RedButton>
    </FlexContainerCentered>
  );
}

export default App;
