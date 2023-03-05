import React from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

export const SelectComponent = ({ value, object, placeholder, multi=false, onValueChanged, label }) => {

	const animatedComponents = makeAnimated();
	const options = [];
	Object.entries(object).map(([key, value]) => options.push(
		{value: value, label:value}
	));

	// console.log("updateState", updateState);
	// console.log("setPlantType", setPlantType);

	return(
		<Select
			isClearable={true}
			placeholder={placeholder ?? "Bitte auswählen"}
			closeMenuOnSelect={false}
			components={animatedComponents}
			isMulti={multi}
			options={options}
			value={value}
			onChange={(v) => onValueChanged(v)}
		/>
	);
}
