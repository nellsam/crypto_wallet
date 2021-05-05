

export interface SignInState {

    email: string,
    emailChanged: boolean,

    password: string,
    passwordChanged: boolean
}

/**
 * Initial state for sign in form in AuthDialog.
 */
export function getInitialSignInState() : SignInState {
    return ({

        email: "",
        emailChanged: false,

        password: "",
        passwordChanged: false
    })
}