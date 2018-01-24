var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/people/:id', (req, res) => {
    const details = { '_id': new ObjectID(req.params.id)};
    db.collection('people').findOne(details, (err, item) => {
      if (err) res.send({'error': 'An error has occurred'});
      else res.send(item);
    });
  });

  app.post('/people', (req, res) => {
    const person = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    }

    const collection = db.collection('people');

    collection.insert(person, (err,result) => {
      if (err) res.send({'error': 'An error has occurred'});
      else res.send(person);
    })
  })

  app.put('/people/:id', (req, res) => {
    const details = { '_id': new ObjectID(req.params.id)};
    const person = {
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }

    db.collection('people').update(details, person, (err, result) => {
      if (err) res.send({'error': err});
      else res.send(person);
    })
  });

  app.delete('/people/:id', (req, res) => {
    const details = { '_id': new ObjectID(req.params.id) }
    db.collection('people').remove(details, (err, item) => {
      if (err) res.send({'error': 'An error has occurred'});
      else res.send('Person ' + req.params.id + ' deleted.');
    })
  })
}