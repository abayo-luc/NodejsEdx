// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const morgan = require('morgan')

// // these  app.use are what is called middleware
// app.use(bodyParser.json())
// app.use(morgan('dev'))
// app.use((req, res, next)=>{
// 	console.log(req.method +':' + req.url)
// 	next()
// })

// app.use((req, res, next)=>{
// 	if (req.query.api_key) {
// 		next()
// 	} else{
// 		res.status(401).send({msg: 'Not authorized'})
// 	}
// })
// app.get('/', (req, res)=>{
// 	res.send({msg: 'Hellow Luc'})
// })

// app.get('/accounts', (req, res, next)=>{
// 	console.log('in line middleware')
// 	next(new Error('opps'))
// } ,(req, res)=>{
// 	res.send({msg: 'Accounts'})
// })

// app.post('/transactions', (req, res)=>{
// 	console.log(req.body)
// 	res.send({msg: 'transactions'})
// })

// app.use((error, req, res, next)=>{
// 	res.status(500).send(error)
// })
// app.listen(3000)

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const profile = [{
	username: 'luc',
	email: 'luc.bayo@gmail.com',
	url: 'http://nexpals.com'
}]

app.get('/profile', (req, res)=>{
	if (req.query.id) return res.send(profile[req.params.id])
	console.log(profile)
	res.send(profile)
})

app.post('/profile', (req, res)=>{
	if (!req.body.first_name.trim() || !req.body.last_name.trim()) return res.sendStatus(400)
	let obj ={
		first_name: req.body.first_name,
		last_name: req.body.last_name
	}
	profile.push(obj)
	console.log('created', profile)
	res.sendStatus(201)
})

app.put('/profile/:id', (req, res)=>{
	Object.assign(profile[req.params.id], req.body)
	console.log('updated', profile[req.params.id])
	res.sendStatus(204)
})

app.delete('/profile/:id', (req, res)=>{
	profile.splice(req.params.id, 1)
	console.log('deleted', req.params.id)
	res.sendStatus(204)
})

app.listen(3000)