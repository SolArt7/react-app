import React from 'react';
import DayPickerComponent from '../DayPicker/DayPicker';
import SelectComponent from '../SelectComponent/SelectComponent';
import 'react-select/dist/react-select.css';
import './styles.css';


export default (props) => {
	return (
		<div className={'userForm'}>
			<h1>Filters</h1>
			<div style={{width: '600px', marginTop: '20px'}}>
				<SelectComponent/>
			</div>
			<DayPickerComponent/>
		</div>
	);
}