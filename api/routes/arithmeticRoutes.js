'use strict';

module.exports = function(app) {
  var arithmeticService = require('../controllers/arithmeticController');

  app.route('/')
    .get(arithmeticService.root);
  app.route('/api/add')
    .post(arithmeticService.add);
  app.route('/api/subtract')
    .post(arithmeticService.subtract);
  app.route('/api/multiply')
    .post(arithmeticService.multiply);
  app.route('/api/divide')
    .post(arithmeticService.divide);
}
