import React from 'react';
import axios from 'axios';
import './App.css'

const RandomColorComponent = () => {
  const [randomColor, setRandomColor] = React.useState('#ffffff'); // Initial state with white color

  React.useEffect(() => {
    const fetchRandomColor = async () => {
      try {
        const response = await axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`);
        const color = response.data.colors[0].hex;
        setRandomColor(color);
      } catch (error) {
        console.error('Error fetching random color:', error);
      }
    };

    fetchRandomColor();
  }, []);

  const componentStyle = {
    backgroundColor: randomColor,
  };

  return (
    <div className="random-color-component" style={componentStyle}>
      <h1>Random Color Component</h1>
      <p>This components background color is set to a random color fetched from the API.</p>
    </div>
  );
};

export default RandomColorComponent;
