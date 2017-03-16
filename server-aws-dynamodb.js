var AWS = require("aws-sdk");
var MENU_DATA_TABLE_NAME = 'recipeMenuData';


var UtilsHelper = require('./lib/utils');
var cfg = require('./config/config_dynamodb');

var getMenus = function(callback) {
	
	var dynamodbClient = new AWS.DynamoDB.DocumentClient()
	
	var params = {
        TableName:MENU_DATA_TABLE_NAME,
        Key:{
            userId: { S:"Random SuperVisor"}
        }
    };
	
	dynamodbClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });

}