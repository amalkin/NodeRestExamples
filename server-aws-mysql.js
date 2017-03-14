var express    = require("express");
var mysql      = require('mysql');

// Connection to Aladdin Street mySQL DB
var connection = mysql.createConnection({
    host     : 'stagingdb.cqycz0fat2nu.ap-southeast-1.rds.amazonaws.com',
    port     : '3306',
    user     : 'adobe',
    password : 'sl!8eAy@kC',
    database : 'product'
});
var app = express();

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ");
    }
});