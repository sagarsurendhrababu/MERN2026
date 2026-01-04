
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [text, setText] =  useState();

  useEffect(() => {    
    fetch('http://localhost:4000/api/message')
    .then(response => response.json())
    .then(data => {
      setText(data)
    })
    .catch(error => {
      console.error('Error fetching message:', error)
    })
  }, [])  

  return (
    <>
      <h1>Welcome</h1>
      <p>{text}</p>
    </>
  )
}

export default App
