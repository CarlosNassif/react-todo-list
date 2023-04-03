import styled from 'styled-components';

const ListItem = styled.li`
  list-style-type: none;
`;

export function TodoItem({ task, onCheck }) {
  return (
    <>
      <ListItem>
        <input
          checked={task.completed}
          type='checkbox'
          onChange={(event) => onCheck(event.target.checked, task.id)}
        />
        {task.title}
      </ListItem>
    </>
  );
}
