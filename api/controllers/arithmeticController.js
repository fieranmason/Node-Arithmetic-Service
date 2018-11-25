'use strict';

exports.root = function(req, res) {
    res.json('{"message":"root"}');
}

function getOperands(req) {
  /*dealing with incoming floats is hard so I truncate for now*/
  var a = parseInt(req.body.a, 10);//use base ten
  var b = parseInt(req.body.b, 10);//use base ten

  return [a,b];
}

exports.add = function(req, res) {
  var operands = getOperands(req);
  var result = operands[0] + operands[1];//TODO: validate dimensions of result

  var response = {"result": result};
  res.json(response);
}

exports.subtract = function(req, res) {
  var operands = getOperands(req);
  var result = operands[0] - operands[1];//TODO: validate dimensions of result

  var response = {"result": result};
  res.json(response);
}

exports.multiply = function(req, res) {
  var operands = getOperands(req);
  var result = operands[0] * operands[1];//TODO: validate dimensions of result

  var response = {"result": result};
  res.json(response);
}

exports.divide = function(req, res) {
  var operands = getOperands(req);
  var result = operands[0] / operands[1];//TODO: validate dimensions of result

  var response = {"result": result};
  res.json(response);
}
