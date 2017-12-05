module.exports = {
	getComments(req, res) {
		res.status(200).send(req.store.posts[req.params.postId].comments)
		console.log('get comments request was sucesssful')
	},
	getComment(req, res) {
		res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
		console.log('get comment request was sucessful')
	},
	postComment(req, res) {
		let newComment = req.body
		let commentId = req.store.posts[req.params.postId].comments.length
		req.store.posts[req.params.postId].comments.push(newComment)
		res.status(200).send(req.store.posts[req.params.postId].comments[commentId])
		console.log('a new comments was posted. in total we have '+ req.store.posts[req.params.postId].comments.length + 'comments' )
	},
	updateComment(req, res) {
		req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
		console.log('comment put request was sucessful')
		res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
		
	},
	deleteComment(req, res) {
		let id = req.params.commentId
		req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
		console.log(req.store.posts[req.params.postId].comments)
		res.status(200).send('comment was delected sucessfully')
	}
}