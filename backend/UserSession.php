<?php

function addUserEmailToSession($email) {

    session_start();

    $_SESSION["email"] = $email;

    echo "User " . $email . " added to session";

    // session_destroy();
}

