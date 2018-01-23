
const peopleRoutes = require('./people_routes');

module.exports = function(app, db) {
  peopleRoutes(app,db);
}