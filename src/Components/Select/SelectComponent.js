import React from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

export const SelectComponent = ({ value, object, placeholder, multi=false, onValueChanged, label, labelIcon }) => {

	const animatedComponents = makeAnimated();
	const options = [];
	Object.entries(object).map(([key, value]) => options.push(
		{value: value, label:value}
	));

	// console.log("updateState", updateState);
	// console.log("setPlantType", setPlantType);

	return(
		<>
			<label className="form-label" style={{paddingLeft:"4px", marginBottom: "0.5rem"}}> 
				{label}
			</label>
			<Select
				className='mb-3'
				isClearable={true}
				placeholder={placeholder ?? "Bitte auswählen"}
				closeMenuOnSelect={multi ? false :true}
				components={animatedComponents}
				isMulti={multi}
				options={options}
				value={value}
				onChange={(v) => onValueChanged(v)}
				theme={(theme) => ({
					...theme,
					colors: {
						...theme.colors,
						primary25: '#00800030',
						primary: '#00800061',
					},
				})}
			/>
		</>
	);
}
