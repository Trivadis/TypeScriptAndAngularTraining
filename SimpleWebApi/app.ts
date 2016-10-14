import express = require('express');
import fs = require('fs');
import bodyParser=require('body-parser');

var app = express();
var port = 8180;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

let persons : Array<Person>
= [
     {id:1,firstname:'Thomas',lastname:'Huber'},
     {id:2,firstname:'Max',lastname:'Payne'},
     {id:3,firstname:'Lara',lastname:'Croft'},
     {id:4,firstname:'Duke',lastname:'Nukem'},
]

let personRouter =  express.Router();
personRouter.route('/Persons')
  .post(( request:express.Request,response:express.Response)=>
    {
     let person = <Person> request.body;
 
      person.id =getNextId();
      persons.push(person);
            
      response.send(JSON.stringify(person));
    })
  .put(( request:express.Request,response:express.Response)=>
    {
     let person = <Person> request.body;
      var filteredPersons = persons.filter(p=>p.id == person.id);
      if(filteredPersons.length!=1)
      {
        response.sendStatus(404);
      }
      else
      { 
          var personToUpdate = filteredPersons[0];
          personToUpdate.firstname = person.firstname;
          personToUpdate.lastname = person.lastname;
          response.sendStatus(200);
      }
    })
  .get(( request:express.Request,response:express.Response)=>{
    response.send(JSON.stringify(persons));
}); 
personRouter.route('/Persons/:id')
  .get(( request:express.Request,response:express.Response)=>{
   var id= request.params.id;
   var filteredPersons = persons.filter(p=>p.id == id);
   if(filteredPersons.length!=1)
   {
     response.sendStatus(404);
   }
   else
   {
     response.send(JSON.stringify(filteredPersons[0]));
   }
}); 

function getNextId():number{
      let maxId =1;
     persons.forEach(p => {
       maxId = Math.max(p.id,maxId);
     });
     return maxId+1;
}
app.use('/api',personRouter);

app.listen(port,function(){
    console.log('Started listening on port '+port);
})

interface Person
{
    id:number;
    firstname:string;
    lastname:string;
}
