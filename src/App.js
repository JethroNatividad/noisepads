import React from 'react'
import sound1 from './sounds/sound1.mp3'
import sound2 from './sounds/sound2.mp3'
import sound3 from './sounds/sound3.mp3'
import './app.css'
import Pad from './Pad';

function App() {

  const pads = [
    { key: 'q', sound: sound1 },
    { key: 'w', sound: sound2 }, { key: 'e', sound: sound3 }, { key: 'a', sound: sound1 }, { key: 's', sound: sound1 }, { key: 'd', sound: sound1 }, { key: 'z', sound: sound1 }, { key: 'x', sound: sound1 }, { key: 'c', sound: sound1 }]
  return (
    <div className="App">
      <div className="PadContainer">
        {pads.map(pad => (<Pad letter={pad.key} key={pad.key} sound={pad.sound} />))}
      </div>
      <h1 className="Title">Noisepad</h1>
    </div>
  );
}

export default App;
