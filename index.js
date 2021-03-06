'use strict';

var now = require("./now"),
    parse = require("./parse");

var since = function(nano) {
  return now() - nano;
};

exports.now = now;
exports.since = since;
exports.parse = parse;
