import './App.scss';
import config from "../../config/app.config.json";
import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { PlantList } from '../PlantList/PlantList';

export const App = () => {

  const ref = useRef(null);
  const [plantType, setPlantType] = useState("");
  const [winterHardinessZone, setWinterHardinessZone] = useState("");
  const [careLevel, setCareLevel] = useState("");
  const [exposition, setExposition] = useState("");
  const [foliagePhase, setFoliagePhase] = useState("");
  const [foliageColors, setFoliageColors] = useState([]);
  const [flowerColors, setFlowerColors] = useState([]);
  const [appWidth, setAppWidth] = useState(0);
  const [layout, setLayout] = useState(config.defaultGridLayout);

  const state = {plantType, winterHardinessZone, careLevel, exposition, foliagePhase, foliageColors, flowerColors, appWidth, layout}

  useLayoutEffect(() => {
    setAppWidth(ref.current.clientWidth)
  },[]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setAppWidth(ref.current.clientWidth);
      // console.clear();
      // console.log(ref.current.clientWidth);
    });
  },[]);

  const resetStates = ()  => {
    setPlantType("");
    setWinterHardinessZone("");
    setCareLevel("");
    setExposition("");
    setFoliagePhase("");
    setFoliageColors([]);
    setFlowerColors([]);
  }

  const stateUpdate = ({type, selected}) => {
    if(type === "plantType")
      setPlantType(selected ?? "")
    if(type === "winterHardinessZone")
      setWinterHardinessZone(selected ?? "")
    if(type === "careLevel")
      setCareLevel(selected ?? "")
    if(type === "exposition")
      setExposition(selected ?? "")
    if(type === "foliagePhase")
      setFoliagePhase(selected ?? "")
    if(type === "foliageColors")
      setFoliageColors(selected ?? [])
    if(type === "flowerColors")
      setFlowerColors(selected ?? [])
  }

  return (  
    <div ref={ref} className="App">
      <Navbar appState={state}>
        <Sidebar 
          appState={state}
          onSelected={(v) => stateUpdate(v)}
          onFilterReset={() => resetStates()}
          onLayoutChange={(layout) => setLayout(layout)} 
        />
      </Navbar>
      <div className='App-body'>
        <div className='sidebar-container' style={{borderRight: config.sidebar.border}}>
          <Sidebar 
            appState={state}
            onSelected={(v) => stateUpdate(v)}
            onFilterReset={() => resetStates()}
            onLayoutChange={(layout) => setLayout(layout)} 
          />
        </div>
        <div className='list-container'>
          <PlantList appState={state}/>
        </div>
      </div>
    </div>
  );
}
