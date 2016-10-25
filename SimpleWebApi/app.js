"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8180;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var persons = [
    { id: 1, firstname: 'Max', lastname: 'Payne' },
    { id: 2, firstname: 'Lara', lastname: 'Croft' },
    { id: 3, firstname: 'Thomas', lastname: 'Huber', githubusername: 'thomasclaudiushuber' },
    { id: 4, firstname: 'Duke', lastname: 'Nukem' },
    { id: 5, firstname: 'Thomas', lastname: 'Gassmann' },
    { id: 6, firstname: 'Thomas', lastname: 'Bandixen', githubusername: 'tbandixen' },
];
var personRouter = express.Router();
personRouter.route('/Persons')
    .post(function (request, response) {
    var person = request.body;
    person.id = getNextId();
    persons.push(person);
    response.send(JSON.stringify(person));
})
    .put(function (request, response) {
    var person = request.body;
    var filteredPersons = persons.filter(function (p) { return p.id == person.id; });
    if (filteredPersons.length != 1) {
        response.sendStatus(404);
    }
    else {
        var personToUpdate = filteredPersons[0];
        personToUpdate.firstname = person.firstname;
        personToUpdate.lastname = person.lastname;
        response.sendStatus(200);
    }
})
    .get(function (request, response) {
    response.send(JSON.stringify(persons));
});
personRouter.route('/Persons/:id')
    .get(function (request, response) {
    var id = request.params.id;
    var filteredPersons = persons.filter(function (p) { return p.id == id; });
    if (filteredPersons.length != 1) {
        response.sendStatus(404);
    }
    else {
        response.send(JSON.stringify(filteredPersons[0]));
    }
});
function getNextId() {
    var maxId = 1;
    persons.forEach(function (p) {
        maxId = Math.max(p.id, maxId);
    });
    return maxId + 1;
}
app.use('/api', personRouter);
app.listen(port, function () {
    console.log('Started listening on port ' + port);
});
