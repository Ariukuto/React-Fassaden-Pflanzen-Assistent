import "./Sidebar.scss";
import { PlantTypes, Bluetenfarben, Expositions, Laubfarben, Laubphasen, Pflegestufen, WinterHardinessZones } from '../../plantAttributes';
import { SelectComponent } from "../Select/SelectComponent";

export const Sidebar = ({appState, onSelected, onFilterReset, onLayoutChange}) => {

	const { plantType, winterHardinessZone, careLevel, exposition, foliagePhase, foliageColors, flowerColors } = appState;

	const FilterResetBtn = () => {
		return(
			<button className="btn btn-secondary" onClick={() => onFilterReset()}> 
				<span className="material-icons">filter_alt_off</span>
			</button>
		)
	}
	const LayoutButton = () => {
		if(appState.layout === "LIST") {
			return(
				<button className="btn btn-secondary" onClick={() => onLayoutChange("GRID")}> 
					<span className="material-icons"> grid_view</span> 
				</button>
			)
		} else {
			return(
				<button className="btn btn-secondary" onClick={() => onLayoutChange("LIST")}> 
					<span className="material-icons"> format_list_bulleted </span> 
				</button>
			)
		}
	}
	
	return (
		<div className='Sidebar pb-3'>
			<div className='d-flex justify-content-around align-items-center mb-3'>
				<FilterResetBtn />
				<LayoutButton />
			</div>
			<div className="Filter">
				<SelectComponent
					className="SelectComponent"
					label={"Pflanzenart"}
					value={plantType} 
					object={PlantTypes} 
					onValueChanged={(option) => onSelected({type: "plantType", selected: option})}
				/>
				<SelectComponent
					className="SelectComponent"
					label={"Winterhärtezone"}
					value={winterHardinessZone} 
					object={WinterHardinessZones} 
					onValueChanged={(option) => onSelected({type: "winterHardinessZone", selected: option})}
				/>
				<SelectComponent
					className="SelectComponent"
					label={"Pflegestufe"}
					value={careLevel}
					object={Pflegestufen} 
					onValueChanged={(optionObj) =>  onSelected({type: "careLevel", selected: optionObj})}
				/>
				<SelectComponent
					className="SelectComponent"
					label={"Exposition"}
					value={exposition}
					object={Expositions} 
					onValueChanged={(optionObj) => onSelected({type: "exposition", selected: optionObj})}
				/>
				<SelectComponent
					className="SelectComponent"
					label={"Laubphase"}
					value={foliagePhase}
					object={Laubphasen} 
					onValueChanged={(optionObj) =>  onSelected({type: "foliagePhase", selected: optionObj})}
				/>
				<SelectComponent
					className="SelectComponent"
					label={"Laubfarben"}
					value={foliageColors}
					object={Laubfarben} 
					multi={true} 
					onValueChanged={(optionArray) => onSelected({type: "foliageColors", selected: optionArray})}
				/>
				<SelectComponent
					className="SelectComponent"
					label={"Blütenfarben"}
					value={flowerColors}
					object={Bluetenfarben} 
					multi={true} 
					onValueChanged={(optionArray) => onSelected({type: "flowerColors", selected: optionArray})}
				/>
				<br />
			</div>
		</div>
	)
}
