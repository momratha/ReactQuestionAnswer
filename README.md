# ReactQuestionAnswer
This is just demo how to use Reactjs with PHP.
In the example include how to use Reactjs with Reduxjs.
## How to setup and run the project
- Download this project and replace in the www or public_html folder
- Import db.sql located in the db folder to Mysql DB
- On mpdf folder change the database config within the config.php. 
  For example:
  ```$dbconfigs = array(
	'db_host' => 'localhost',
	'db_user' => 'root',
	'db_pass' => '12',
	'db_name' => 'wordpress'

- On Console run npm install 
- If you have make any changes to Reactjs code, you need to build the js by run following command 'npm run build'
- To access to page access following url:
	`http://localhost/index.php?t=1 
- For insert new Questions & Answers uncomment file App.js located in 'src/js/reactjs/components/App.js' on line number 11 and comment out line 12.
	```http://localhost/index.php?t=2 
	http://localhost/index.php?t=3
	http://localhost/index.php?t=x...

That is it if you have any questions please drop me email via momratha@gmail.com
