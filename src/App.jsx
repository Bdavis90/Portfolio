import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import AboutMe from './Components/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Header />
      <hr />
      <AboutMe />
      <hr />
    </>
  )
}

export default App
