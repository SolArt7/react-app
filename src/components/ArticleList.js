import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from "./Article/Article";
import accordion from '../decorators/accordion';

class ArticleList extends Component {
	
	static propTypes = {
		articles: PropTypes.array.isRequired,
		// from accordion
		openId: PropTypes.string,
		toggleOpen: PropTypes.func
	};
	
	static defaultProps = {
		articles: []
	};
	
	render() {
		const { articles, openId, toggleOpen } = this.props;
		return articles.map(article => {
			return <Article 
				key={article.id}
				article={article}
				isOpen={article.id === openId}
				toggleOpen={toggleOpen(article.id)}
			/>
		})
	}
}


export default accordion(ArticleList);