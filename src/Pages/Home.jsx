import Card from '../Components/Card'
import Button from '../Components/Button'

export default function Home() {
  return (
    <Card className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Task Manager</h1>
      <p className="mb-6">Manage your tasks efficiently with our app</p>
      <div className="flex justify-center space-x-4">
        <Button variant="primary" size="lg" onClick={() => window.location.href = '/tasks'}>
          Go to Tasks
        </Button>
        <Button variant="secondary" size="lg" onClick={() => window.location.href = '/posts'}>
          View Posts
        </Button>
      </div>
    </Card>
  )
}