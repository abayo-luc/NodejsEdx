const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

let store = {}
store.accounts = []

let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.get('/accounts', (req, res)=>{
	if (store.accounts.length !=0 ) {	
		console.log('Current we have ' + store.accounts.length + ' account(s)')
		res.status(200).send(store.accounts)
	} else {
		res.status(200).send('there is not account established yet')
	}
})

app.post('/accounts', (req, res)=>{
	let newAccount = req.body
	let id = store.accounts.length
	store.accounts.push(newAccount)
	console.log('the post request was successulf')
	res.status(200).send({id: id})
})

app.put('/accounts/:id', (req, res)=>{
	store.accounts[req.params.id] = req.body
	console.log('the put request was successful and your new balance is  ' + store.accounts[req.params.id]['balance'] + ' and your new account name is ' + store.accounts[req.params.id]['name'])
	res.status(200).send(store.accounts[req.params.id])
})

app.delete('/accounts/:id', (req, res)=>{
	store.accounts.splice(req.params.id, 1)
	res.status(204).send()
})

app.listen(3000)