import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import PropTypes from "prop-types";
import {selectArticle} from "../../AC";

class SelectComponent extends Component {
	
	static propTypes = {
		// from connect
		articles: PropTypes.array,
		selectedArticles: PropTypes.array,
		selectArticle: PropTypes.func.isRequired
	};
	
	getFilteredArticles = () => {
		const {selectedArticles} = this.props;
		if (selectedArticles.length) {
			return this.prepareArticles(selectedArticles)
		}
		return [];
	};
	
	prepareArticles(articles) {
		return articles.map(article => ({
			label: article.title,
			value: article.text,
			id: article.id
		}));
	}
	
	handleSelection = (selection) => {
		const {selectArticle, articles} = this.props;
		selectArticle(articles.filter(article => selection.some(selected => selected.id === article.id)));
	};
	
	render() {
		const {articles} = this.props;
		const options = articles.map(article => ({
			label: article.title,
			value: article.text,
			id: article.id
		}));
		return (
			<Select options={options} value={this.getFilteredArticles()} onChange={this.handleSelection} multi />
		)
	}
}

export default connect((state) => ({
	articles: state.articles,
	selectedArticles: state.selectedArticles
}), { selectArticle })(SelectComponent);
