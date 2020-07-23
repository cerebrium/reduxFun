import React, { useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Move } from './features/mover/move'
import './App.css';

function App() {
  const [ xCoord, setXCoord ] = useState(null)
  const [ yCoord, setYCoord ] = useState(null)

  const handleKeyPress = (e) => {
    setXCoord(e.nativeEvent.offsetX)
    setYCoord(e.nativeEvent.offsetY)
  }

  return (
    <div className="App" onClick={handleKeyPress}>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Move 
          xCoordinate={xCoord}
          yCoordinate={yCoord}
        />
      </header>
    </div>
  );
}

export default App;
