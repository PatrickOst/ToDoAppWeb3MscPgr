const { get, find, insert } = require('./data-access')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json())

app.get('/todos', (req, res) => {
	res.send(get('todos'))
})

app.get('/todos/:id', (req, res) => {
	const student = find('todos', Number(req.params.id))
	if (!student) {
		res.statusCode = 404
	}
	res.send(student)
})

app.post('/todos', (req, res) => {
	insert('todos', req.body)
	res.statusCode = 204
	res.send()
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})
