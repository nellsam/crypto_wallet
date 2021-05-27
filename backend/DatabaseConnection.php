<?php

function getDatabaseConnection()
{

    // Database connection
    $databaseHost = "localhost";
    $databaseUser = "root";
    $databasePassword = "";
    $database = "crypto_wallet";
    $conn = new mysqli($databaseHost, $databaseUser, $databasePassword, $database) or die("Db connect failed: %s\n" . $conn->error);

    echo "Connected successfully";

    return $conn;
}
