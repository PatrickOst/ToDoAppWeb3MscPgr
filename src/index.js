const { get, getNextId, find, insert, deleting, update } = require('./data-access')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json())

app.get('/api/todos', (req, res) => {
	res.send(get('todos'))
})

app.get('/api/todos/:id', (req, res) => {
	console.log("get todos run");
	const student = find('todos', Number(req.params.id))
	if (!student) {
		res.statusCode = 404
	}
	console.log("new student = " + student);
	res.send(student)
})

app.post('/api/todos/', (req, res) => {

	const ret = insert('todos', req.body)
	if (!ret) {
		res.statusCode = 404
	}
	res.send(ret)
})

app.put('/api/todos/', (req, res) => {
	console.log(req.body);
	const ret = deleting('todos', req.body)
	if (!ret) {
		res.statusCode = 404
	}
	res.send(ret)
})

app.put('/api/todos/delete/:id', (req, res) => {
	console.log(req.body);
	//update('todos', req.body)
	const ret = deleting('todos', req.body)
	if (!ret) {
		res.statusCode = 404
	}
	res.send(ret)
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})
