import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import data from "./data"

function App() {

  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
  }) 
  
  return (
    <div className="App">
      <Navbar />
      <section className='card-components'>
        {cards}
      </section>
    </div>
  )
}

export default App
