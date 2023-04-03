import { useState } from 'react'
import { TodoItem } from './TodoItem'

const TODO_LIST_DATA = [
  {
    id: 1,
    title: 'Task 1',
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
]

export function TodoList() {
  const [items, setItems] = useState(TODO_LIST_DATA);

  function handleTaskCheck(checked, id) {
    const updatedItems = items.map((task) => {
        if (task.id === id) {
            return { ...task, completed: checked }
        }

        return task;
    });

    setItems(updatedItems);
  }

  return (
    <>
      <h1>Welcome to the TodoList</h1>
      Items completados: {items.filter(t => t.completed).length}/{items.length}
      <ul>
        {items.map((task) => (
          <TodoItem key={task.id} task={task} onCheck={handleTaskCheck} />
        ))}
      </ul>
    </>
  )
}
