"use strict";

var Client = require ("./client");
var Server = require ("./server");
var errors = require ("./protocol/errors");

module.exports.createClient = function (options){
	return new Client (options);
};

module.exports.createServer = function (options, requestListener, interceptor){
	return new Server (options, requestListener, interceptor);
};

//Expose the error codes
for (var p in errors){
	if (p[0] !== "E") continue;
	module.exports[p] = errors[p].message;
}