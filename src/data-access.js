let data = {
	todos: [
		{ id: 1, title: 'Einkaufen', beschreibung: 'Butter, Käse, Brot', prio: 1, erstelltAm: '20210914T072100', erledigenBis: '20210920T072100' },
		{ id: 2, title: 'Haushalt', beschreibung: 'Wäsche waschen', prio: 1, erstelltAm: '20210915T072100', erledigenBis: '20210922T072100'},
		{ id: 3, title: 'Wohnung', beschreibung: 'Aufräumen', prio: 1, erstelltAm: '20210911T072100', erledigenBis: '20210921T072100'},
		{ id: 4, title: 'Abfall', beschreibung:'Abfall entsorgen', prio: 1, erstelltAm: '20210814T072100', erledigenBis: '20210910T072100'}
	]
}

function get(entity) {
	return data[entity]
}

function getNextId() {
	for (var i = 0; i < data.todos.length; i++) {
		console.log(data.todos[i].id + " " + (i+1));
		if (data.todos[i].id != (i+1)) {
			i += 1;
			console.log("nächste freie ID = " + i);
			break;
		}

	}
	i += 1;
	console.log("neue ID = " + i);
	return i
}

function find(entity, id) {
	return data[entity].find(e => e.id === id)
}

function insert(entity, row) {
	row.id = getNextId()
	console.log("insert")
	console.log(row);
	console.log(entity);
	//row.erstelltAm=new Date()
	data[entity].push(row)
	return data[entity].find(e => e.id === row.id)
}

function update(entity, row) {
	console.log("update runs");
	for (var i = 0; i < data.todos.length; i++) {
		if (data.todos[i].id === row.id) {
			data.todos[i].title = row.title;
			data.todos[i].beschreibung = row.beschreibung;
			data.todos[i].prio = row.prio;
			data.todos[i].erledigenBis = row.erledigenBis;
			break;
		}
	}
	return data[entity].find(e => e.id === row.id)
}

module.exports = {
	get,
	getNextId,
	find,
	insert,
	update
}
