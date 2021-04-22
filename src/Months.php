<?php

echo $_POST["method"]();

function getMonth($monthIndex)
{
    $dateObj = DateTime::createFromFormat('!m', $monthIndex);
    return $dateObj->format('F');
}

