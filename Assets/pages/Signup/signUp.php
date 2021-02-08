<?php 
require "../config.php";
$msg='';
//Getting values from AJAX
$n = $_POST['name'];
$mail = $_POST['mail'];
$a = $_POST['address'];
$p = $_POST['pass'];
$insert = "INSERT INTO userEmployer(name,mail,address,password) VALUES ('$n','$mail','$a','$p')";
if ($connection->query($insert)) {
	$msg = "Successfully registered";
}
	echo json_encode($msg);
 ?>