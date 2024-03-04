

function Square({ color }) {
    if (typeof color !== 'string') {
      console.error('Warning: Invalid prop: color must be a string')
      return null
    }
  
    return <div className="square" style={{ backgroundColor: color }}></div>
  }
  
  export default Square
