import plants from "../../config/plants.json";
import { ListItem } from "./ListItem";
import "./PlantList.scss";

export const PlantList = ({ appState, layoutState="GRID" }) => {

    let data = filter(appState);

    // NOT FOUND
    if(data.length === 0) {
      return(
        <div className="h-100 p-5 w-100 d-flex justify-content-center text-center text-danger" style={{wordWrap: "break-word"}}>
          <h4> 
            Es konnten keine Pflanzen mit der Kombination der gewünschen 
            Eigenschaften gefunden werden. <br /> 
            Bitte ändern Sie ihre Einstellungen!
          </h4>
        </div>
      )
    }

    // LIST Layout
    if(layoutState === "LIST") {
      return(
        <>
          <div id="list" className="plant-list grid-list">
            {data.map((plant, index, array) => <ListItem layoutState={layoutState} key={index} obj={plant}/>)}
          </div>
        </>
      ) 
    }

    // GRID Layout
    if(layoutState === "GRID") {
      let gridTemplateColumns = "1fr";
      if(appState.appWidth > 600)
        gridTemplateColumns = "1fr 1fr";
      if(appState.appWidth > 800)
        gridTemplateColumns = "1fr 1fr 1fr";
      if(appState.appWidth > 1002)
        gridTemplateColumns = "1fr 1fr";
      if(appState.appWidth > 1329)
        gridTemplateColumns = "1fr 1fr 1fr";
      if(appState.appWidth > 1800)
        gridTemplateColumns = "1fr 1fr 1fr 1fr";
      return(
        <>
        appWidth: {appState.appWidth}
        <div className="plant-list grid-tiles" style={{gridTemplateColumns}}>
          {data.map((plant, index, array) => <ListItem key={index} obj={plant}/>)}
        </div>
        </>
      ) 
    }    
}


function filter({ plantType, winterHardinessZone, careLevel, exposition, foliagePhase, foliageColors, flowerColors }) {
  let filtered = plants;
  
    if(plantType !== "")
      filtered = filtered.filter((plant) => plant.type.includes(plantType.value));

    if(winterHardinessZone !== "")
      filtered = filtered.filter((plant) => plant.winterHardinessZone.includes(winterHardinessZone.value));
    
    if(careLevel !== "") 
      filtered = filtered.filter((plant) => plant.careLevel.includes(careLevel.value));

    if(exposition !== "")
      filtered = filtered.filter((plant) => plant.exposition.includes(exposition.value));

    if(foliagePhase !== "")
      filtered = filtered.filter((plant) => plant.foliagePhase.includes(foliagePhase.value));

    if(foliageColors.length > 0) {
      foliageColors.forEach((option) => {
        filtered = filtered.filter((plant) => plant.foliageColors.includes(option.value));
      });
    }

    if(flowerColors.length > 0) {
      flowerColors.forEach((option) => {
        filtered = filtered.filter((plant) => plant.flowerColors.includes(option.value));
      });
    }

    return filtered;
}
