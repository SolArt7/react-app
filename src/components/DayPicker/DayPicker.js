import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './day-picker.css';

class DayPickerComponent extends Component {
	state = {
		from: '',
		to: ''
	};
	numberOfMonths = 2;
	handleDayClick = (day) => {
		const range = DateUtils.addDayToRange(day, this.state);
		this.setState(range);
	};
	resetClick = () => {
		this.setState({
			from: undefined,
			to: undefined
		})
	};
	render() {
		const {from, to} = this.state;
		const modifiers = { start: from, end: to };
		return (
			<div>
				<h2>Calendar</h2>
				<div>
					<button onClick={this.resetClick}>Reset calendar</button>
				</div>
				<DayPicker
					className="Selectable"
					selectedDays={[from, { from, to }]}
					onDayClick={this.handleDayClick}
					modifiers={modifiers}
					numberOfMonth={this.numberOfMonths}
				/>
				<br/>
				Dates: {from && to ? `${from.toLocaleDateString()} - ${to.toLocaleDateString()}` : 'Select dates'}
			</div>
		);
	}
}

export default DayPickerComponent;
