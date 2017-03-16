var express = require("express");
var mysql = require('mysql');
var fs = require('fs');
var http = require('http');

var UtilsHelper = require('./lib/utils');
var cfg = require('./config/config_aladdinstreet');

var utilsHelper = new UtilsHelper();

// Connection to Aladdin Street mySQL DB
var connection = mysql.createConnection({
    host     : cfg.aws.host,
    port     : cfg.aws.port,
    user     : cfg.aws.user,
    password : cfg.aws.password,
    database : cfg.aws.database,
    debug    : true
});
var app = express();

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var callback = function(err, result) {
    res.writeHead(200, {
        'Content-Type' : 'x-application/json'
    });
    console.log('json:', result);
    res.end(result);
};

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... ");

        console.log("Date: ",utilsHelper.getFormattedDate(new Date()));

        console.log('Connected as id ' + connection.threadId);

    } else {
        console.log("Error connecting to AWS database ... "+err);

        //var stream = fs.createWriteStream("error.txt");
        //stream.once('open', function(err) {
        //    stream.write(err);
        //    stream.write("My second row\n");
        //    stream.end();
        //});

        console.log("Date: ",utilsHelper.getFormattedDate(new Date()));

        console.log('Connected as id ' + connection.threadId);

        //fs.writeFile(cfg.error_file, "Hey there!", function(err) {
        //    if(err) {
        //        return console.log(err);
        //    }

        //    console.log("The file was saved!");
        //}); 

    }
});

connection.query(cfg.mysql.productquery, function(err, results, fields) {
    if(err) throw err;

    var json = '';

    json = JSON.stringify(results);

    fs.writeFile(cfg.mysql.productquery_results_file, json, function (err) {
        if (err) throw err;
        console.log('[producttable] Saved!');
        
    });

    connection.end();

    console.log('[getSQL.query] JSON-result:', json);
});
