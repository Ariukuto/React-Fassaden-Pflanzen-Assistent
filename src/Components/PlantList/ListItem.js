import { Badge } from "../Badge/Badge"
import { PlantTypes } from '../../plantAttributes';

export const ListItem = ({obj, variant="light", txt="secondary", layoutState}) => {

	const getStyle = () => {
		if(obj.type === PlantTypes.Moos)
			return {backgroundColor: "green", color: "white"};
		if(obj.type === PlantTypes.Staude)
			return {backgroundColor: "#7981cd", color: "white"};
		if(obj.type === PlantTypes.Gehoelz)
			return {backgroundColor: "#664040", color: "white"};
	}

	return (
		<div className={`card bg-${variant} text-${txt}`} style={{/*maxWidth: "18rem"*/}}>
			<div className="card-header d-flex justify-content-between">
				{obj.name}
				<Badge style={getStyle()}>
					{obj.type} 
				</Badge>
			</div>
			<div className="card-body">
				<p className="card-text"> 
					{JSON.stringify(obj)}
				</p>
			</div>
		</div>
	)
}


