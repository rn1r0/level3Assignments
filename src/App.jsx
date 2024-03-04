import React from 'react';
import './App.css';
import Square from './components/Square.jsx';
import sound1 from './sounds/darkside.mp3';
import sound2 from './sounds/lolianthem.mp3';
import sound3 from './sounds/zelda.mp3';
import sound4 from './sounds/viviz.mp3';

function App() {
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])

  const sounds = [sound1, sound2, sound3, sound4]

  const playRandomSound = () => {
    const randomIndex = Math.floor(Math.random() * sounds.length)
    const audio = new Audio(sounds[randomIndex])
    audio.play()
  }

  const handleSquareColorChange = (index, newColor) => {
    const newColors = [...colors]
    newColors[index] = newColor
    setColors(newColors)
  }

  const handleColorChange = () => {
    const newColors = colors.map(color => (color === 'white' ? 'black' : 'white'));
    setColors(newColors);
  }

  const handleTopHalfPurple = () => {
    const newColors = [...colors]
    newColors[0] = newColors[1] = "purple"
    setColors(newColors)
  }

  const handleBottomLeftBlue = () => {
    const newColors = [...colors]
    newColors[2] = "blue"
    setColors(newColors)
  }

  const handleBottomRightBlue = () => {
    const newColors = [...colors]
    newColors[3] = "blue"
    setColors(newColors)
  }

  return (
    <div className="color-board">
      <div className="square-container">
        {colors.map((color, index) => (
          <Square
            key={index}
            color={color}
            onClick={() => handleSquareColorChange(index, 'green')} // Change 'green' to any other color if needed
          />
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={handleColorChange}>Change All Squares</button>
        <button onClick={handleTopHalfPurple}>Top Half Purple</button>
        <button onClick={handleBottomLeftBlue}>Bottom Left Blue</button>
        <button onClick={handleBottomRightBlue}>Bottom Right Blue</button>
        <button onClick={playRandomSound}>Play Random Sound</button>
      </div>
    </div>
  )
}

export default App