import React, {Component} from "react";
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import {connect} from "react-redux";
import {deleteArticle} from "../../AC";

class Article extends Component {
	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string,
			comment: PropTypes.array
		}).isRequired
	};
	
	handleDelete = () => {
		console.log('Delele article');
		const {deleteArticle, article} = this.props;
		deleteArticle(article.id);
	};
	
	getBody() {
		const {article, isOpen} = this.props;
		if (!isOpen) return null;
		return (
			<section>
				{article.text}
				<CommentList comments={article.comments} articleId={article.id}/>
				<h4>Date: {new Date(article.date).toLocaleString()}</h4>
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
				<button onClick={this.handleDelete}>Delete</button>
				{this.getBody()}
			</div>
		)
	}
}

export default connect(null, {deleteArticle})(Article);