<?php

/**
 * User data class.
 */
class User
{

    var $userId;
    var $firstName;
    var $lastName;
    var $email;
    var $phoneNumber;

    /**
     * User constructor.
     */
    public function __construct($userId, $firstName, $lastName, $email, $phoneNumber)
    {
        $this->userId = $userId;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->phoneNumber = $phoneNumber;
    }


}