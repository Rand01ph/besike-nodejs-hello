#!/usr/bin/env node
//console.log("Hello World");
var greet = require("../");
var argv = require('minimist')(process.argv.slice(2));
console.log(greet(argv._[0], argv.drunk));
