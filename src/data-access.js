let data = {
	todos: [
		{ id: 1, title: 'Einkaufen', beschreibung: 'Butter, Käse, Brot', prio: 1, erstelltAm: '2021-09-15T11:07:55+02:00', erledigenBis: '2021-10-15T16:07:55+02:00' },
		{ id: 2, title: 'Haushalt', beschreibung: 'Wäsche waschen', prio: 2, erstelltAm: '2021-09-15T12:07:55+02:00', erledigenBis: '2021-09-18T16:07:55+02:00'},
		{ id: 6, title: 'Wohnung', beschreibung: 'Aufräumen', prio: 3, erstelltAm: '2021-09-15T10:07:55+02:00', erledigenBis: '2021-09-02T16:07:55+02:00'},
		{ id: 9, title: 'Abfall', beschreibung:'Abfall entsorgen', prio: 5, erstelltAm: '2021-09-14T16:07:55+02:00', erledigenBis: '2021-09-15T16:07:55+02:00'}
	]
}

function get(entity) {
	return data[entity]
}

function getNextId() {
	let check = false;
	let freeId = 0;
	for(var ii = 1; ii < (data.todos.length)+2; ii++){
		for(var i = 0; i < (data.todos.length); i++){
			console.log(data.todos[i].id + " " + ii);
			if(data.todos[i].id === ii){
				check=true;
				break;
			}else{

			}
		}

		if(check == false){
			freeId=ii
			console.log("free ID = " + freeId);
			break;
		}
		check=false;
	}
	return freeId
}

function find(entity, id) {
	return data[entity].find(e => e.id === id)
}

function insert(entity, row) {
	row.id = getNextId()
	console.log("insert")
	console.log(row.id);
	console.log(entity);
	data[entity].push(row)
	return data[entity].find(e => e.id === row.id)
}

function deleting(entity, row) {
	console.log("deleting")
	console.log(row.id);
	console.log(row);
	console.log(entity);
	for (var i =0; i < data[entity].length; i++)
		if (data[entity][i].id === row.id) {
			data[entity].splice(i,1);
			console.log("deleted = " + (i+1));
			break;
		}
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
	deleting,
	update
}
