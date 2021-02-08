<?php 
require '../config.php';
$msg ='';
$msgs ='';
//Getting datas from ajax
$pass = $_POST['password'];
$mail = $_POST['mail'];
//validating the datas
$logIn = "SELECT password from userEmployee where mail='$mail'";
$logIn1 = "SELECT password from userEmployer where mail='$mail'";
if( $connection->query($logIn)){
	$result = mysqli_fetch_array($res);
	$p = $result['password'];
	if ($pass != $p) {
		$msg = "wrong password";
	}else{
		$msg = "You have successfully Loggedin ";
	}
}
elseif (!$connection->query($logIn)) {
	$res1 = $connection->query($logIn1);
	$results = mysqli_fetch_array($res1);
	$ps = $results['password'];
	if ($pass != $ps) {
		$msgs = "wrong password";
	}else{
		$msgs = "You have successfully Loggedin ". $results['name'];
	}
}
	echo json_encode($msgs);
	echo json_encode($msg);
 ?>