const personsRouter = require("express").Router();
const Person = require("../models/person");

personsRouter.get('/', (request, response, next) => {
    Person.find({})
      .then((result) => {
        response.json(result);
      })
      .catch((error) => next(error));
  });
  
  personsRouter.get('/:id', (request, response, next) => {
    Person.findById(request.params.id)
      .then((result) => {
        if (result) response.json(result);
        else {
          const error = { name: 'IdNotFound' };
          return next(error);
        }
      })
      .catch((error) => next(error));
  });
  
  personsRouter.post('/', (request, response, next) => {
    const body = request.body;
    if (Object.keys(body).length === 0 || body === undefined) {
      const err = { name: 'ContentMissing' };
      return next(err);
    }
    if (!body.name) {
      const err = { name: 'NameMissing' };
  
      return next(err);
    }
    if (!body.number) {
      const err = { name: 'NumberMissing' };
  
      return next(err);
    }
  
    const person = new Person({ ...body });
    person
      .save()
      .then((result) => {
        response.json(result);
      })
      .catch((error) => next(error));
  });
  
  personsRouter.put('//:id', (request, response, next) => {
    const object = request.body.newPersonObject;
    Person.findByIdAndUpdate(request.params.id, object, { new: true }).then((updatedPerson) => {
      response.json(updatedPerson);
    }).catch(error => next(error));
  });
  
  personsRouter.delete('/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
      .then((result) => {
        if (result != null) response.sendStatus(204).end();
        else {
          const err = { name: 'IdNotFound' };
          return next(err);
        }
      })
      .catch((error) => next(error));
  });
  //---------------------------------------------------
  
  
  
  
  personsRouter.get('/info', (request, response, next) => {
    Person.count({})
      .then(result => {
        const string = `Phonebook has info on ${result} people`;
        response.send(string).end();
      })
      .catch((error) => next(error));
  });

  module.exports = personsRouter;