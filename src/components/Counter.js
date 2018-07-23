import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC';

class Counter extends Component {
	
	static propTypes = {
		counter: PropTypes.number,
		increment: PropTypes.func.isRequired
	};
	
	handleIncrement = () => {
		console.log('Incrementing...');
		const {increment} = this.props;
		increment()
	};
	
	render() {
		return (
			<div>
				<h2>{this.props.counter}</h2>
				<button onClick={this.handleIncrement}>Increment me</button>
			</div>
		);
	}
}

export default connect((state) => ({
	counter: state.count
}), {increment})(Counter)
