import React, {Component} from "react";
import PropTypes from 'prop-types';
import CommentList from '../CommentList';

class Article extends Component {
	
	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string,
			comment: PropTypes.array
		}).isRequired
	};
	
	getBody() {
		const {article, isOpen} = this.props;
		if (!isOpen) return null;
		return (
			<section>
				{article.text}
				<CommentList comments={article.comments} articleId={article.id}/>
			</section>)
	}
	
	render() {
		const {article, isOpen, toggleOpen} = this.props;
		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick={() => toggleOpen()} style={{marginTop: '10px'}}>
					{isOpen ? 'Close body' : 'Show body'}
				</button>
				{this.getBody()}
			</div>
		)
	}
}

export default Article;