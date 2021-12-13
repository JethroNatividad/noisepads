import React from 'react'
import sound1 from './sounds/sound1.mp3'
import sound2 from './sounds/sound2.mp3'
import sound3 from './sounds/sound3.mp3'
import sound4 from './sounds/sound4.mp3'
import sound5 from './sounds/sound5.mp3'
import sound6 from './sounds/sound6.mp3'
import sound7 from './sounds/sound7.mp3'
import sound8 from './sounds/sound8.mp3'
import sound9 from './sounds/sound9.mp3'

import './app.css'
import Pad from './Pad';

function App() {

  const pads = [
    { key: 'q', sound: sound1 },
    { key: 'w', sound: sound2 }, { key: 'e', sound: sound3 }, { key: 'a', sound: sound4 }, { key: 's', sound: sound5 }, { key: 'd', sound: sound6 }, { key: 'z', sound: sound7 }, { key: 'x', sound: sound8 }, { key: 'c', sound: sound9 }]
  return (
    <div className="App">
      <div className="PadContainer">
        {pads.map(pad => (<Pad letter={pad.key} key={pad.key} sound={pad.sound} />))}
      </div>
      <h1 className="Title">Jinet Noisepad</h1>
    </div>
  );
}

export default App;
