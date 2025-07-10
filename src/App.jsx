import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Tasks from './Pages/Task'
import Posts from './Pages/Posts'

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow p-4 container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Task" element={<task />} />
              <Route path="/Posts" element={<posts />} />
            </Routes>
          </main>
          <footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}