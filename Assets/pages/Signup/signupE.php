<?php 
require "../config.php";
$msg='';
//Getting values from AJAX
$n = $_POST['name'];
$age = $_POST['age'];
$work = $_POST['Iwork'];
$mail = $_POST['mail'];
$company = $_POST['company'];
$a = $_POST['add'];
$p = $_POST['password'];
$insert = "INSERT INTO userEmployee(name,age,work,mail,company,address,password) VALUES ('$n','$age','$work','$mail','$company','$a','$p')";
if ($connection->query($insert)) {
	$msg = "Successfully registered";
}
	echo json_encode($msg);
 ?>