var express = require("express");
var mysql = require('mysql');
var fs = require('fs');


var UtilsHelper = require('./utils');

var utilsHelper = new UtilsHelper();

// Connection to Aladdin Street mySQL DB
AWS.config.region = "us-east-1";
AWS.config.apiVersions = {
    rds: '2013-09-09',
};

var rds_conf = {
    host: mysqlHost,
    database: "aws_node_demo",
    user: mysqlUserName,
    password: mysqlPassword
};

var mysql = require('mysql');
var connection = mysql.createConnection(rds_conf);

var rds = new AWS.RDS();

connection.connect(function(err){
    if (err)
        console.error("couldn't connect",err);
    else
        console.log("mysql connected");
});