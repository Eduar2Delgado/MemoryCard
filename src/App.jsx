import './App.css'

function App() {

  return (
    <>
      <section className='container'>
        <div className='grid'>
          <div className='title'>
            <h1 >Pokemon</h1>
            <h2>Memory</h2>
            <h1>Game</h1>
          </div>
          <div className='actions'>
            <button type='button' id='playBtn'>Play</button>
            <button type='button'>Easy</button>
            <button type='button'>Medium</button>
            <button type='button'>Hard</button>
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
