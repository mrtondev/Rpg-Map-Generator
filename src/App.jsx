// import { useState } from 'react'
import './App.css'
import './generateMap.css'
import criador from './generateMap'

function App() {

  return (
    <>
      <div className='container'>
        <div className='landing'>
          <h1> Rpg Map generator </h1>

          <div className='content'>
            
            <button onClick={criador}> Gerar mapa  </button>

            <div className='generateMap'>
              {criador.exibidor}

            </div>

          </div>
        </div>
      </div>
       
    </>
  )
}

export default App
