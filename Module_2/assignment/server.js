const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const postsRoutes = require('./routes/posts.js')
const commentsRoutes = require('./routes/comments.js')

let store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [
      {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
      {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
      {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
    ]
    }
  ]
}


let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use((req, res, next)=>{
  req.store = store
  next()
})

app.get('/posts', postsRoutes.getPosts)
app.get('/posts/:id', postsRoutes.getPost)
app.post('/posts', postsRoutes.addPost)
app.put('/posts/:id', postsRoutes.updatePost)
app.delete('/posts/:id', postsRoutes.deletePost)
app.get('/comments', commentsRoutes.getComments)
app.listen(3000)