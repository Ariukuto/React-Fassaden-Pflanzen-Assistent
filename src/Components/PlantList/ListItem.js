import config from "../../config/app.config.json";
import { Badge } from "../Badge/Badge"
import { PlantTypes } from '../../plantAttributes';

export const ListItem = ({appState, obj, variant="light", txt="secondary"}) => {

	const getStyle = () => {
		if(obj.type === PlantTypes.Moos)
			return {backgroundColor: "green", color: "white"};
		if(obj.type === PlantTypes.Staude)
			return {backgroundColor: "#7981cd", color: "white"};
		if(obj.type === PlantTypes.Gehoelz)
			return {backgroundColor: "#664040", color: "white"};
	}

	if(appState.layout === "GRID") {
		return (
			<div className={`list-item card bg-${variant} text-${txt}`} style={{/*maxWidth: "18rem"*/}}>
				<div className="card-header d-flex justify-content-between align-items-start">
					{obj.name}
					<Badge style={getStyle()}>
						{obj.type} 
					</Badge>
				</div>
				<div className="container">
					<div className="row">
						{
							config.list.grid.img 
								? 
							<div className="col-sm-4 d-flex align-items-center justify-content-center">
								<img src="./logo.svg" alt="test"/>
							</div> 
								: null
						}
						<div className="col-sm">
							<p className="card-text p-2"> 
								Pflanzenart: {obj.type} <br />
								Winterhärtezone: {obj.winterHardinessZone} <br />
								Pflegestufe: {obj.careLevel} <br />
								Exposition: {obj.exposition} <br />
								Laubphase: {obj.foliagePhase} <br />
								Laubfarben: {obj.foliageColors} <br />
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return(
			<div className={`list-item card bg-${variant} text-${txt}`} style={{/*maxWidth: "18rem"*/}}>
				<div className="card-header d-flex justify-content-between align-items-start">
					{obj.name}
					<Badge style={getStyle()}>
						{obj.type} 
					</Badge>
				</div>
				<div className="container">
					<div className="row">
					{
							config.list.grid.img 
								? 
							<div className="col-sm-4 d-flex align-items-center justify-content-center">
								<img src="./logo.svg" alt="test"/>
							</div> 
								: null
						}
						<div className="col-sm d-flex align-items-center justify-content-between flex-wrap p-2">
								<Badge>Pflanzenart: {obj.type}</Badge>
								<Badge>Winterhärtezone: {obj.winterHardinessZone}</Badge>
								<Badge>Pflegestufe: {obj.careLevel}</Badge>
								<Badge>Exposition: {obj.exposition}</Badge>
								<Badge>Laubphase: {obj.foliagePhase}</Badge>
								<Badge>Laubfarben: {obj.foliageColors}</Badge>
						</div>
					</div>
				</div>
			</div>
		);
	}
 

}


