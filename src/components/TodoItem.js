import { ListItem } from './styles/ListItem.styled';

export function TodoItem({ task, onCheck }) {
  return (
    <ListItem>
      <input
        checked={task.completed}
        type='checkbox'
        onChange={(event) => onCheck(event.target.checked, task.id)}
      />
      {task.title}
    </ListItem>
  );
}
