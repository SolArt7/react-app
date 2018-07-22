import React, {Component} from 'react';
import './styles.css';

class CommentsAdd extends Component {
	state = {
		user: '',
		text: ''
	};
	
	handleChange = (data) => (ev) => {
		const {value} = ev.target;
		if (value.length > validate[data].min && value.length < validate[data].max) {
			this.setState({
				[data]: value
			})
		} else {
			this.setState({
				[data]: value
			})
		}
	};
	
	getClass = (type) => this.state[type].length &&
		(this.state[type].length > validate[type].max || this.state[type].length < validate[type].min) ? "error" : "";
	
	render() {
		const {user, text} = this.state;
		return (
			<div style={{margin: '10px'}}>
				<form>
					<label>User:</label>
					<input
						type="text"
						value={user.value}
						onChange={this.handleChange('user')}
						className={this.getClass('user')}/>
					<br/>
					<label>Comment:</label>
					<textarea
						value={text.value}
						onChange={this.handleChange('text')}
						className={this.getClass('text')}>
					</textarea>
				</form>
			</div>
		);
	}
}

const validate = {
	user: {
		min: 5,
		max: 15
	},
	text: {
		min: 20,
		max: 50
	}
};

export default CommentsAdd;
