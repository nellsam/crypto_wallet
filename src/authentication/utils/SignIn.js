import * as jQuery from "jquery";
import {backendPath} from "../../BackendPath";


export function signIn(singInState, callback) {

    console.log("Sign in called with " + singInState.email)

    jQuery.ajax({
        url: backendPath + '/UserSignInDB.php',
        type: 'GET',
        data: {"email": singInState.email,
            "password": singInState.password},
        success: function (data) {
            console.log("Retrieved value " + JSON.stringify(data))
            callback(true)
        },
        error: function (error) {
            console.log('Caught error: ' + JSON.stringify(error));
            callback(false)
        }
    })
}