import { ex_java_plant_list } from "./ex_java_plant_list";
import { Plant } from "./Plant";

export class Datenaufbereiter
{
	static create_json_array_to_console()
	{
		let array = [];
		ex_java_plant_list.forEach(plantArray => {
			array.push(new Plant(plantArray).toJsonObject());
		});
		console.log(JSON.stringify(array));
	}
}


