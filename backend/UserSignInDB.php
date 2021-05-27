<?php

include 'DatabaseConnection.php';
include 'UserSession.php';

// Required arguments
$email = $_GET['email'];
$password = $_GET['password'];

// Connect db
$conn = getDatabaseConnection();

// Get query with given user
// $sql = mysqli_query($conn, "SELECT * FROM users where email='$email'");

$sql = "SELECT * FROM users where email='$email'";

$result = $conn->query($sql);

// Check, if user exists
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {

        $userPassword = $row['password'];

        if ($password == $userPassword) {
            echo "Password matches";
            addUserEmailToSession($email);
        } else {
            echo "Password doesn't match";
        }
    }
} else {
    echo "Non existing user";
}
