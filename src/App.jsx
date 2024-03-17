import { useState } from 'react'
import './generateMap'
import './App.css'
import './generateMap'

function App() {

  return (
    <>
      <div className='container'>
        <div className='landing'>
          <h1> Rpg Map generator </h1>

          <div className='content'>
            
            <button onClick={() => map()} > Gerar mapa</button>

            <div className='generateMap'>
              

            </div>

          </div>
        </div>
      </div>
       
    </>
  )
}

export default App
