'use strict';
var _ = require('lodash');
var requestPromise = require('request-promise');
var http = require('http');
var cfg = require('../config/config_adobeio');


function AdobeIOHelper() {
}

AdobeIOHelper.prototype.getAccessToken = function() {

    console.log("[AdobeIOHelper.getAccessToken] STARTED: ");

    var payload = {
        "email":cfg.acs.defaultemail,
        "ctx": {
            "image":"http://beansontoast.biz/links/masthead_image.gif",
            "recipeName":"string127",
            "menuName":menuName,
            "ingredients": [
                {
                    "ingredient":"Beans"
                },
                {
                    "ingredient":"Toast"
                }
            ]
        }
    }

    var headers = {
        "Authorization": cfg.acs.authorization,
        "content-type": "application/json",
        "Cache-Control": "no-cache"
    }

    var options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload),
        uri: cfg.acs.host
    };
    console.log(options);
    return requestPromise(options);

};




module.exports = AdobeIOHelper;