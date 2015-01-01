<?php

	ini_set('display_errors',1);

	$username = "plugz6vh_admin"; //mysql username
	$password = "plugzee2014"; //mysql password
	$hostname = "localhost"; //hostname
	$databasename = 'plugz6vh_maillist'; //databasename

	//connect to database
	$conn = new mysqli($hostname, $username, $password, $databasename);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

	$name = $_POST["name"];
	$email = $_POST["email"];

	$sql = "INSERT INTO Registration VALUES ( '$name' , '$email');" ;
	
	if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	

	$conn->close();

?>