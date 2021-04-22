import * as jQuery from "jquery";
// https://stackoverflow.com/questions/29918400/executing-a-php-file-using-ajax-request
// https://medium.com/@davisonpro/an-advanced-guide-on-setting-up-a-react-and-php-web-app-acaedb21ab3a

export function TestJs() {

    jQuery.ajax({
        url: 'Test.php',
        type: 'POST',
        success: function (data) {
            console.log("Retrieved value " + data)
        },
        error: function () {
            console.log('error');
        }

        // data: {method:'test'},
        // cache: false,
        // contentType: false,
        // processData: false,
        // contentType: 'application/json',
        // data: {method:'getMonths'},
        // dataType: 'json',
        // timeout: 5000,

    })
}

export default TestJs;
