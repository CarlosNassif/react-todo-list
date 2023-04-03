export function TodoItem({ task, onCheck }) {

  return (
    <>
      <li>
        <input
            checked={task.completed}
            type="checkbox"
            onChange={(event) => onCheck(event.target.checked, task.id)} />
        {task.title}
      </li>
    </>
  )
}
