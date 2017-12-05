module.exports = {
  getPosts(req, res) {
  	console.log('the number of post we have is equal to ' + req.store.posts.length)
  	res.status(200).send(req.store.posts)
  },
  getPost(req, res) {
  	console.log(req.store.posts[req.params.id]['name'])
  	res.status(200).send(req.store.posts[req.params.id])
  },
  addPost(req, res) {
  	let newStore = req.body
  	let id = req.store.posts.length
  	req.store.posts.push(newStore)
  	console.log(req.store.posts[id])
  	res.status(200).send(req.store.posts[id])
  },
  updatePost(req, res) {
  	req.store.posts[req.params.id] = req.body
  	console.log(req.store.posts[req.params.id])
  	res.status(200).send(req.store.posts[req.params.id])
  },
  deletePost(req, res) {
  	req.store.posts.splice(req.params.id, 1)
  	res.status(200).send('post with id '+ req.params.id + 'has been deleted')
  	console.log('delete request was sucessful')
  }
}