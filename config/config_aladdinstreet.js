var config = {};

config.aws = {};
config.mysql = {};

config.default_stuff = ['red','green','blue','apple','yellow','orange','politics'];
config.error_file = 'error.txt';

/*config.aws.host = 'stagingdb.cqycz0fat2nu.ap-southeast-1.rds.amazonaws.com';
config.aws.port = '3306';
config.aws.user = 'adobe';
config.aws.password = 'sl!8eAy@kC';
config.aws.database = 'stagingdb';*/

config.aws.host = 'stagingdb.crkumysjw1y3.eu-west-1.rds.amazonaws.com';
config.aws.port = '3306';
config.aws.user = 'adobe-am';
config.aws.password = 'sl8eAykC';
config.aws.database = 'aladdinstreet';

config.mysql.productquery = 'SELECT * FROM stagingdb.product ORDER BY date_modified LIMIT 20;';
config.mysql.productproduct_results_file = './data/producttable.json';

config.mysql.productproductdescriptionquery = 'SELECT p.product_id, p.sku, p.quantity, p.stock_status_id, p.price, p.weight, p.length, p.width, p.height, pd.name, pd.description, pd.details, pd.long_description, pd.details FROM stagingdb.product p, stagingdb.product_description pd WHERE p.product_id = pd.product_id ORDER BY date_modified DESC LIMIT 10;'
config.mysql.productproductdescriptionquery_results_file = './data/productproductdescriptiontable.json';

config.mysql.productproductdescriptionlistquery = 'SELECT p.product_id, p.sku, pd.name FROM stagingdb.product p, stagingdb.product_description pd WHERE p.product_id = pd.product_id ORDER BY date_modified DESC LIMIT 10;'
config.mysql.productproductdescriptionlistquery_results_file = './data/productproductdescriptionlisttable.json';*/

//config.aws.host = 'stagingdb.crkumysjw1y3.eu-west-1.rds.amazonaws.com';
config.aws.host = '127.0.0.1';
config.aws.port = '3306';
config.aws.user = 'adobe_am';
config.aws.password = 'sl8eAykC';
config.aws.database = 'aladdinstreet';

config.mysql.productquery = 'SELECT * FROM aladdinstreet.product ORDER BY date_modified LIMIT 20;';
config.mysql.productproduct_results_file = './data/producttable.json';

config.mysql.productproductdescriptionquery = 'SELECT p.product_id, p.sku, p.quantity, p.stock_status_id, p.price, p.weight, p.length, p.width, p.height, pd.name, pd.description, pd.details, pd.long_description, pd.details FROM aladdinstreet.product p, aladdinstreet.product_description pd WHERE p.product_id = pd.product_id ORDER BY date_modified DESC LIMIT 10;'
config.mysql.productproductdescriptionquery_results_file = './data/productproductdescriptiontable.json';

config.mysql.productproductdescriptionlistquery = 'SELECT p.product_id, p.sku, pd.name FROM aladdinstreet.product p, aladdinstreet.product_description pd WHERE p.product_id = pd.product_id ORDER BY date_modified DESC LIMIT 10;'
config.mysql.productproductdescriptionlistquery_results_file = './data/productproductdescriptionlisttable.json';

config.mysql.categoryrootlistquery = 'SELECT pc.category_id, pcd.name, pcd.language_id FROM aladdinstreet.product_category pc, aladdinstreet.product_category_description pcd WHERE pc.parent_id = 0 AND pc.category_id = pcd.category_id AND pcd.language_id = 0;';
config.mysql.categoryrootlistquery_results_file = './data/categorylistqueryttable.json';

config.mysql.categorybyidlistquery = 'SELECT pc.category_id, pcd.name, pcd.language_id FROM aladdinstreet.product_category pc, aladdinstreet.product_category_description pcd WHERE pc.parent_id = 27 AND pc.category_id = pcd.category_id AND pcd.language_id = 0;';
config.mysql.categorybyidlistquery_results_file = './data/categorylistqueryttable.json';

module.exports = config;