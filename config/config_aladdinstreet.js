var config = {};

config.aws = {};
config.mysql = {};

config.default_stuff = ['red','green','blue','apple','yellow','orange','politics'];
config.error_file = 'error.txt';

config.aws.host = 'stagingdb.cqycz0fat2nu.ap-southeast-1.rds.amazonaws.com';
config.aws.port = '3306';
config.aws.user = 'adobe';
config.aws.password = 'sl!8eAy@kC';
config.aws.database = 'stagingdb';


config.mysql.productquery = 'SELECT * FROM stagingdb.product ORDER BY date_modified LIMIT 20;';
config.mysql.productquery_results_file = './data/producttable.json';


module.exports = config;