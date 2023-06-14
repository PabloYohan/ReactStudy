import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState(["Um dia"]);
  return (
      <h1>{posts}</h1>
  )
}

export default App
