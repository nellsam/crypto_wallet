<?php

// https://finance.yahoo.com/cryptocurrencies
// https://www.blockchain.com/ticker

// Current rates
// https://bitpay.com/api/rates

// API
// https://coinmarketcap.com/api/documentation/v1/#section/Introduction

$jsonSource = "https://blockchain.info/ticker";
$json = file_get_contents($jsonSource);
$json = json_decode($json);

$btcEur = $json->EUR->last;

echo $btcEur;
