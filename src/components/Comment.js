import React from 'react';

export default function Comment(props) {
	const {comment} = props;
	return (
		<p>{comment}</p>
	)
}