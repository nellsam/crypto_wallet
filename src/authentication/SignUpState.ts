

export interface SignUpState {

    firstName: string,
    firstNameChanged: boolean,

    lastName: string,
    lastNameChanged: boolean,

    phoneNumber: string,
    phoneNumberChanged: boolean,

    email: string,
    emailChanged: boolean,

    password: string,
    passwordChanged: boolean
}

/**
 * Initial state for auth dialog hook.
 */
export function getInitialSignUpState() : SignUpState {
    return ({

        firstName: "",
        firstNameChanged: false,

        lastName: "",
        lastNameChanged: false,

        phoneNumber: "",
        phoneNumberChanged: false,

        email: "",
        emailChanged: false,

        password: "",
        passwordChanged: false
    })
}

/**
 * @return Corresponding variable name for given id, that matches with text field in form.
 */
export function getChangedAuthField(id : String) : string {
    switch (id) {
        case 'firstName' : return 'firstNameChanged'
        case 'lastName' : return 'lastNameChanged'
        case 'email' : return 'emailChanged'
        case 'password' : return 'passwordChanged'
        case 'phoneNumber' : return 'phoneNumberChanged'
        default : return ""
    }
}