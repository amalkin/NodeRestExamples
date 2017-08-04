var express = require("express");
var fs = require('fs');
var http = require('http');

var cfg = require('./config/config_adobeio');

var form = new FormData();
form.append('queryImage', fs.createReadStream('./Users/malkin/Documents/_Alastair/_Adobe/Clients/_INTERNAL/AdobeIO-Sensei/assets/goat_127118636_250.jpg'));  
form.append('maxResults', '7');
form.append('minConfidence', '0.7');
var response; 
 
var options = {
    host: 'mc.adobe.io',
    protocol: 'https:',
    port: 443,
    path: '/marketingcloud/smartcontent/api/tag',
    method: 'POST',
    headers: {
        'x-api-key': cfg.adobeio.cliendid,
        'Authorization': 'Bearer ' + cfg.adobeio.accessToken //API.accessToken
    }
};
 
form.submit(options, function(err, res) {
    res.resume();
    if (err) {
        console.log('err + ' + err);    
    }
    console.log('getTagsForImage() statusCode: ' + res.statusCode);
    res.on('data', function(d) {
        response = JSON.parse(d);
        console.dir(response);
        if (callback) {
            callback(response);
        }
    });
});