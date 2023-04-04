import { useEffect, useState } from 'react';

import { FlexContainerStart } from './styles/FlexContainerStart.styled';
import { List } from './styles/List.styled';
import { SmallParagraphRight } from './styles/SmallParagraphRight.styled';
import { TodoItem } from './TodoItem';

export function TodoList({ todoList }) {
  const [items, setItems] = useState(todoList);

  useEffect(() => {
    setItems(todoList);
  }, [todoList]);

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
    <FlexContainerStart key={todoList.length}>
      <SmallParagraphRight>
        Itens feitos: {items.filter((t) => t.completed).length}/{items.length}
      </SmallParagraphRight>
      <List>
        {items.map((task) => (
          <TodoItem key={task.id} task={task} onCheck={handleTaskCheck} />
        ))}
      </List>
    </FlexContainerStart>
  );
}
