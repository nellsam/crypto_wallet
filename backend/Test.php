<?php

echo "Hi, you successfully launched PHP in your React";

function getBtcPrice() {

    $query_content = http_build_query(""); // $params
    $fp = fopen("https://coinmarketcap.com/currencies/bitcoin/", 'r', FALSE, // do not use_include_path
        stream_context_create([
            'http' => [
                'header'  => [ // header array does not need '\r\n'
                    'Content-type: application/x-www-form-urlencoded',
                    'Content-Length: ' . strlen($query_content)
                ],
                'method'  => 'POST',
                'content' => $query_content
            ]
        ]));
    if ($fp === FALSE) {
        return json_encode(['error' => 'Failed to get contents...']);
    }
    $result = stream_get_contents($fp); // no maxlength/offset
    fclose($fp);
    return $result;
}
