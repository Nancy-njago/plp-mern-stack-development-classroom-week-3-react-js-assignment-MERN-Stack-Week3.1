import { useState, useEffect } from 'react'
import Card from '../Components/Card'
import Button from '../Components/Button'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch posts')
        return response.json()
      })
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">Posts from API</h2>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p className="text-center py-4">Loading posts...</p>}
      {error && <p className="text-red-500 text-center py-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map(post => (
          <div 
            key={post.id} 
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow dark:border-gray-700"
          >
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}