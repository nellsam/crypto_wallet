<?php

$databaseHost = "localhost";
$databaseUser = "root";
$databasePassword = "";
$database = "crypto_wallet";
$conn = new mysqli($databaseHost, $databaseUser, $databasePassword, $database) or die("Db connect failed: %s\n" . $conn->error);

echo "Connected successfully";

$firstName = $_GET['first_name'];
$lastName = $_GET['last_name'];
$email = $_GET['email'];
$phoneNumber = $_GET['phone_number'];
$password = $_GET['password'];

// Hashing password
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

// Parameter binding https://stackoverflow.com/questions/7537377/how-to-include-a-php-variable-inside-a-mysql-statement
//$sql = $conn->prepare("INSERT INTO users (user_id, first_name, last_name, email, phone_number, password) VALUES (1, ?, ?, ?, ?, ?)");
//$sql->bind_param("sssss", $firstName, $lastName, $email, $phoneNumber, $passwordHash);
//$sql->execute();

$sql = "INSERT INTO users (user_id, first_name, last_name, email, phone_number, password) VALUES ('5', 'Dwayne', 'Johnson', 'youremail@gmail.com', '+421000000000', '12345')";

if (mysqli_query($conn, $sql)) {
    echo "Records inserted successfully.";
} else {
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);


