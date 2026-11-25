import { useState } from 'react';
import './App.css'
import playIcon from './assets/ico/play-32x32.png'
import Game from './Game'

function App() {
const [btnSelectedMode, setSelected] = useState(null);

const [isPlaying, setIsPlaying] = useState(false);

const setMode = (mode) => {
  setSelected((prev) => (prev === mode ? null : mode));
}

if (isPlaying) {
    return <Game mode={btnSelectedMode} />;
  }

  return (
    <>
      <section className='container'>
        <div className='grid'>
          <div className='title'>
            <h1>Pokemon</h1>
            <h2>Memory</h2>
            <h1>Game</h1>
          </div>
          <div className='actions'>
            <button type='button' 
            id='playBtn' 
            onClick={() => setIsPlaying(true)}
            disabled={!btnSelectedMode}>
              <img src={playIcon} alt='' /> Play
            </button>
            <button type='button' onClick={() => setMode("easy")} className={`${btnSelectedMode === "easy" ? 'selected' : ''}`}>Easy</button>
            <button type='button' onClick={() => setMode("medium")} className={`${btnSelectedMode === "medium" ? 'selected' : ''}`} >Medium</button>
            <button type='button' onClick={() => setMode("hard")} className={`${btnSelectedMode === "hard" ? 'selected' : ''}`}>Hard</button>
          </div>
          <div className='scoreBoard'>
            <h1>Best Score</h1>
            <div className='record'>
              <div className='gridModes'>
                <p>Easy</p>
                <p>Medium</p>
                <p>Hard</p>
              </div>
              <div className='gridModes points'>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
              <div className='gridModes'>
                <p>Best</p>
                <p>Best</p>
                <p>Best</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default App
