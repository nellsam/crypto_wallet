import * as jQuery from "jquery";
import {backendPath} from "../../utils/BackendPath";


export function signUp(signUpState) {

    console.log("Sign up called with " + signUpState.firstName + ", " + signUpState.lastName + ", " + signUpState.email + ", "
        + signUpState.password + ", " + signUpState.phoneNumber)

    jQuery.ajax({
        url: backendPath + '/UserSignUpDB.php',
        type: 'GET',
        data: {"first_name": signUpState.firstName, "last_name": signUpState.lastName,
            "phone_number": signUpState.phoneNumber, "email": signUpState.email,
            "password": signUpState.password},
        success: function (data) {
            console.log("Retrieved value " + JSON.stringify(data))
        },
        error: function (error) {
            console.log('Caught error: ' + JSON.stringify(error));
        }
    })
}