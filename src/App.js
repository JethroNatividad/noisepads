import sound1 from './sounds/sound1.mp3'
function App() {

  const pads = [
    { key: 'q', sound: sound1 },
    { key: 'w', sound: sound1 }, { key: 'e', sound: sound1 }, { key: 'a', sound: sound1 }, { key: 's', sound: sound1 }, { key: 'd', sound: sound1 }, { key: 'z', sound: sound1 }, { key: 'x', sound: sound1 }, { key: 'c', sound: sound1 }]
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
