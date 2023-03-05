import { PlantTypes, Bluetenfarben, Expositions, Laubfarben, Laubphasen, Pflegestufen, WinterHardinessZones } from '../../plantAttributes';
import { SelectComponent } from "../Select/SelectComponent";


export const Sidebar = ({appState, onSelected}) => {

	const { plantType, winterHardinessZone, careLevel, exposition, foliagePhase, foliageColors, flowerColors } = appState;
	
	return (
		<div className='Sidebar'>
			
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
			</div>
		</div>
	)
}
