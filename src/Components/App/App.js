import './App.scss';
import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';

export const App = () => {
  
  const [state, setState] = useState({
    plantType: "",
    winterHardinessZone: "",
    careLevel: "",
    exposition: "",
    foliagePhase: "",
    foliageColors: [],
    flowerColors: [],
  });

  return (  
    <div className="App">
      <Navbar />
    </div>
  );
}
