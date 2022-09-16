import { useState } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="App">
      <h1>Task list</h1>

      <ul className="read-the-docs">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </div>
  )
}

export default App
