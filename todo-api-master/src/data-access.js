let data = {
	todos: [
		{ id: 1, title: 'Einkaufen', version: 1 },
		{ id: 2, title: 'Wäsche waschen', version: 1 },
		{ id: 3, title: 'Wohnung aufräumen', version: 1 },
		{ id: 4, title: 'Abfall leeren', version: 1 }
	]
}

function get(entity) {
	return data[entity]
}

function find(entity, id) {
	return data[entity].find(e => e.id === id)
}

function insert(entity, row) {
	data[entity].push(row)
}

module.exports = {
	get,
	find,
	insert
}
