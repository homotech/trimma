<?php 
error_reporting('E_RROR');

$host = "server";
$user = 'username';
$passW = "password";
$db = "trimma";

#Connecting to the Server and to the Database also
$connection = new mysqli($host, $user, $passW, $db);

#Checking if connection is TRUE or FALSE,
if ($connection->connect_error) {
	echo "unable to communicate with the database";
}

 ?>
