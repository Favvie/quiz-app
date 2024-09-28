import { Link } from 'react-router-dom'
import '../App.css'
function Home() {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-10'>Quiz App</h1>
      <Link to="/quiz" className='btn border border-gray-300 rounded-md px-4 py-2'>Start Quiz</Link>
    </div>
  )
}

export default Home