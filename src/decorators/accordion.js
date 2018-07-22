import React, {Component} from 'react';

export default OriginalComponent => class Accordion extends Component {
	state = {
		openId: null
	};
	
	toggleOpen = (openId) => (ev) => {
		ev && ev.preventDefault && ev.preventDefault();
		this.setState({
			openId: openId === this.state.openId ? null : openId
		})
		
	};
	
	render() {
		return <OriginalComponent
			{...this.props}
			openId={this.state.openId}
			toggleOpen={this.toggleOpen}
		/>
	}
}