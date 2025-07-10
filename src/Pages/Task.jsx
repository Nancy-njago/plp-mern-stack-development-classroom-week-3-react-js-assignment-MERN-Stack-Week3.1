import { useState } from 'react'
import { useLocalStorage } from '../Hooks/uselocalstorage'
import Button from '../Components/Button'
import Card from '../Components/Card'
import TaskItem from '../Components/TaskItem'

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">Task Manager</h2>
      
      <div className="flex mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          className="flex-1 p-2 border rounded-l dark:bg-gray-700 dark:border-gray-600"
          placeholder="Add new task"
        />
        <Button 
          variant="primary" 
          onClick={addTask}
          className="rounded-l-none"
        >
          Add Task
        </Button>
      </div>

      <div className="flex space-x-2 mb-6">
        <Button 
          variant={filter === 'all' ? 'primary' : 'secondary'} 
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button 
          variant={filter === 'active' ? 'primary' : 'secondary'} 
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button 
          variant={filter === 'completed' ? 'primary' : 'secondary'} 
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      <ul className="divide-y dark:divide-gray-700">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <p className="text-center py-4 text-gray-500">No tasks found</p>
        )}
      </ul>
    </Card>
  )
}