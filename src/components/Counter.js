import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        counter: PropTypes.number
    }

    handleIncrement = (ev) => {
        console.log('Incrementing');
        this.props.dispatch({
            type: "INCREMENT"
        })
    }
    
    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.count
    }
}

const decorator = connect(mapStateToProps);

export default decorator(Counter);
