
<?php
// error_reporting(E_ALL ^ E_NOTICE);
error_reporting(E_ALL);
// ini_set('display_errors', 1);

/* Database Configuration. Add your details below 
 * Micro PHP Database Frameworks 1.0
 * Developed by Ratha Mom
 * 04/08/2011
 */

$dbconfigs = array(
	'db_host' => 'localhost',
	'db_user' => 'root',
	'db_pass' => '12',
	'db_name' => 'wordpress'
);


/* Database Config End */
require "db/DB.class.php";
require "db/ConstructBase.class.php";
require_once ("module/questions.php");
require_once("control/questions.php");
require_once("module/answers.php");
require_once("control/answers.php");

DB::init($dbconfigs);
session_name('MPDF');
session_start();

?>