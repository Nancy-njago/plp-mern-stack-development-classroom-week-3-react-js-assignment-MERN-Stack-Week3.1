export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between p-3 border-b dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 rounded"
        />
        <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  )
}