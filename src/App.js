import React, { useState } from 'react';
import './App.css';
import Cordenada from './Cordenadas';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
     
      <h1>Example hook</h1>
      su cuenta es {count}
      <br />
      <button onClick={()=> setCount( count +1 ) }> +1 </button>

      <Cordenada />
    </div>
  );
}

export default App;
