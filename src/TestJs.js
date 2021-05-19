import * as jQuery from "jquery";
import {backendPath} from "./BackendPath";
import axios, {AxiosRequestConfig} from "axios"
// https://stackoverflow.com/questions/29918400/executing-a-php-file-using-ajax-request
// https://medium.com/@davisonpro/an-advanced-guide-on-setting-up-a-react-and-php-web-app-acaedb21ab3a

// Data
// https://coinmarketcap.com/currencies/bitcoin/
// https://www.pluralsight.com/guides/how-to-handle-ajax-with-react


// https://www.youtube.com/watch?v=96DuZ33NX_Y&ab_channel=AVDojo


export function TestJs() {

    // axios.get(backendPath + '/UserSignUpDB.php?f=test', {method: "post"}).then(data => {
    //     console.log("Retrieved response " + JSON.stringify(data))
    // }).catch(function(error) {
    //     console.log("Caught error " + error)
    // });

    // jQuery.ajax({
    //     url: backendPath + '/UserSignUpDB.php',
    //     type: 'GET',
    //     success: function (data) {
    //         console.log("Retrieved value " + JSON.stringify(data))
    //     },
    //     error: function (error) {
    //         console.log('Caught error: ' + JSON.stringify(error));
    //     }
    // })
    //
    //     // data: {method:'test'},
    //     // cache: false,
    //     // contentType: false,
    //     // processData: false,
    //     // contentType: 'application/json',
    //     // data: {method:'getMonths'},
    //     // dataType: 'json',
    //     // timeout: 5000,
    //
    // })
}

export default TestJs;
