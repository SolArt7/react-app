import React from "react";
import Comment from "./Comment";
import toggleOpen from '../decorators/toggleOpen';
import PropTypes from "prop-types";
import CommentsAdd from "./CommentForm/CommentsAdd";

function CommentList({comments, isOpen, toggleOpen}){
	return (
		<div>
			<button onClick={() => toggleOpen()}>{isOpen ? 'Close comments' : 'Open comments'}</button>
			{getBody({comments, isOpen})}
			<CommentsAdd/>
		</div>
	)
}

function getBody({comments, isOpen}) {
	if (!isOpen) return null;
	if (!comments.length) return <h4>No comments...</h4>;
	return (
		<ul>
			{comments.map(comment => <li key={comment}><Comment comment={comment}/></li>)}
		</ul>
	)
}

CommentList.propTypes = {
	comments: PropTypes.array,
	isOpen: PropTypes.bool,
	toggleOpen: PropTypes.func.isRequired
};

export default toggleOpen(CommentList);