import { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('#3b82f6');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Color Picker</h1>
        <p>Pick a color and see its values in real time</p>
      </header>
      <main className="app-main">
        <ColorPicker color={selectedColor} onChange={setSelectedColor} />
      </main>
    </div>
  );
}

export default App;