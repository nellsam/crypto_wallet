<?php

// Database connection
//$databaseHost = "localhost";
//$databaseUser = "root";
//$databasePassword = "";
//$database = "crypto_wallet";
//$conn = new mysqli($databaseHost, $databaseUser, $databasePassword, $database) or die("Db connect failed: %s\n" . $conn->error);
//echo "Connected successfully";

include 'DatabaseConnection.php';

$conn = getDatabaseConnection();

if ($conn == null) {
    return;
}

// Required arguments to create new user
$firstName = $_GET['first_name'];
$lastName = $_GET['last_name'];
$email = $_GET['email'];
$phoneNumber = $_GET['phone_number'];
$password = $_GET['password'];

// Check, if user already exists
$sql = mysqli_query($conn, "SELECT * FROM users where email='$email'");
if (mysqli_num_rows($sql) > 0) {
    echo "Email already exists";
    exit;
}

// Hashing password
// $passwordHash = password_hash($password, PASSWORD_DEFAULT);

// Parameter binding https://stackoverflow.com/questions/7537377/how-to-include-a-php-variable-inside-a-mysql-statement
$sql = $conn->prepare("INSERT INTO users (first_name, last_name, email, phone_number, password) VALUES (?, ?, ?, ?, ?)");
$sql->bind_param("sssss", $firstName, $lastName, $email, $phoneNumber, $passwordHash);
$sql->execute();

//$sql = "INSERT INTO users (user_id, first_name, last_name, email, phone_number, password) VALUES ('5', 'Dwayne', 'Johnson', 'youremail@gmail.com', '+421000000000', '12345')";

//if (mysqli_query($conn, $sql)) echo "Records inserted successfully.";
//else echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

// Close connection
mysqli_close($conn);

addUserEmailToSession($email);


