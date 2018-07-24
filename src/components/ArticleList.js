import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from "./Article/Article";
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';

class ArticleList extends Component {
	
	static propTypes = {
		// from connect
		articles: PropTypes.array.isRequired,
		selectedArticles: PropTypes.array,
		from: PropTypes.instanceOf(Date),
		to: PropTypes.instanceOf(Date),
		// from accordion
		openId: PropTypes.string,
		toggleOpen: PropTypes.func
	};
	
	static defaultProps = {
		articles: []
	};
	
	
	dateFilter(articles) {
		const {from, to} = this.props;
		if (!from || !to)
			return articles;
		return articles.filter(article => (
			new Date(article.date).getTime() >= new Date(from).getTime() &&
			new Date(article.date).getTime() <= new Date(to).getTime()
		))
	}
	
	articlesFilter() {
		let {articles, selectedArticles} = this.props;
		if (!selectedArticles.length) return this.dateFilter(articles);
		return this.dateFilter(selectedArticles);
	}
	
	render() {
		const {openId, toggleOpen } = this.props;
		return this.articlesFilter().map(article => {
			return <Article 
				key={article.id}
				article={article}
				isOpen={article.id === openId}
				toggleOpen={toggleOpen(article.id)}
			/>
		})
	}
}


export default connect((state) => ({
	articles: state.articles,
	selectedArticles: state.selectedArticles,
	from: state.dates.from,
	to: state.dates.to
}))(accordion(ArticleList));