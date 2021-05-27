<?php

const EMAIL = 'email';

// Return email user is logged in with or null.
if (isset($_SESSION[EMAIL])) {

    return $_SESSION[EMAIL];

} else return null;
