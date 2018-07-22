import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DayPickerComponent from "./DayPicker/DayPicker";
class UserForm extends Component {

    state = {
        selection: ''
    };
    
    handleSelection = (selection) => this.setState({selection});

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.value
        }));
        return (
            <div>
                <DayPickerComponent/>
				<br/>
				<div style={{width: '600px', marginTop: '20px'}}>
					<Select options={options} value={this.state.selection} onChange={this.handleSelection} multi />
				</div>
            </div>
        );
    }
}

export default UserForm;