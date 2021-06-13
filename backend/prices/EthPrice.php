<?php


$jsonSource = "https://bitpay.com/api/rates";
$json = file_get_contents($jsonSource);
$json = json_decode($json);
$btcEur = $json->EUR->last;

$json_decoded = json_decode($json);

// Get price of bitcoin
$btcEur;

// TODO : Get rate of ethereum per one bitcoin and calculate price of one eth unit