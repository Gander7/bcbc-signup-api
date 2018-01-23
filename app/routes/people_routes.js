
module.exports = function(app, db) {
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
}