import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './day-picker.css';
import {connect} from "react-redux";
import {addStartDate, addEndDate, clearDate} from "../../AC";

class DayPickerComponent extends Component {
	
	handleDayClick = (day) => {
		const {from, to, addStartDate, addEndDate} = this.props;
		const range = DateUtils.addDayToRange(day, {from, to});
		addStartDate(range.from);
		addEndDate(range.to);
	};
	resetClick = () => {
		this.props.clearDate();
	};
	render() {
		const {from, to} = this.props;
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
					numberOfMonth={2}
				/>
				<br/>
				Dates: {from && to ? `${from.toLocaleDateString()} - ${to.toLocaleDateString()}` : 'Select dates'}
			</div>
		);
	}
}

export default connect((state) => ({
	from: state.dates.from,
	to: state.dates.to
}), { addStartDate, addEndDate, clearDate })(DayPickerComponent);
