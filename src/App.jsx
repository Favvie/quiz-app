import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  )
}

export default App
