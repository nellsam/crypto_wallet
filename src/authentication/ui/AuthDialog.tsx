import React, {ChangeEvent, useState} from "react";
import {createStyles, makeStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog, {DialogProps} from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SignInButton from "./SignInButton";
import {DialogActions, TextField} from "@material-ui/core";
import {isEmailValid, isNameValid, isPasswordValid, isPhoneNumberValid} from "../utils/AuthValidation";
import {SignUpState, getChangedAuthField, getInitialSignUpState} from "../state/SignUpState";
import {blue} from "@material-ui/core/colors";
import {getInitialSignInState, SignInState} from "../state/SignInState";
import {signUp} from "../utils/SignUp";
// import {Redirect} from "react-router";
import {Redirect, Route, Switch} from "react-router";
import Wallet from "../../Wallet";
import {BrowserRouter} from "react-router-dom";

// https://material-ui.com/components/text-fields/
// https://material-ui.com/components/buttons/
// https://reactjs.org/docs/forms.html
// https://material-ui.com/components/dialogs/#dialog

export function AuthDialog() {

    const [dialogOpen, setDialogOpen] = useState(false)
    const [signUpState, setSignUpState] = useState(getInitialSignUpState)
    const [signInState, setSignInState] = useState(getInitialSignInState)

    // Handle text field changes
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        // Id and value of changed field
        const {id, value} = e.target

        const changedField: string = getChangedAuthField(id.toString())

        // Update state of react component
        setSignUpState(prevState => ({

            // Restore previous state
            ...prevState,

            // Update value of changed field (var name = field id)
            [id]: value,

            // Update state of changed field
            [changedField]: true
        }))
    }

    // Handle opening dialog
    const handleOpenDialog = () => {
        // setSignUpState(prevState => ({
        //     ...prevState,
        //     open: true
        // }))

        setDialogOpen(true)
    }

    // Handle closing dialog
    const handleCloseDialog = () => {
        // setSignUpState(prevState => ({
        //     ...prevState,
        //     open: false
        // }))

        setDialogOpen(false)
    }

    // Validation is performed after field is changed
    let invalidFirstName = false
    if (signUpState.firstNameChanged) invalidFirstName = !isNameValid(signUpState.firstName)
    let invalidFirstNameMessage = ''
    if (invalidFirstName) invalidFirstNameMessage = 'Invalid first name'

    let invalidLastName = false
    if (signUpState.lastNameChanged) invalidLastName = !isNameValid(signUpState.lastName)
    let invalidLastNameMessage = ''
    if (invalidLastName) invalidLastNameMessage = 'Invalid last name'

    let invalidEmail = false
    if (signUpState.emailChanged) invalidEmail = !isEmailValid(signUpState.email)
    let invalidEmailMessage = ''
    if (invalidEmail) invalidEmailMessage = 'Invalid email'

    let invalidPassword = false
    if (signUpState.passwordChanged) invalidPassword = !isPasswordValid(signUpState.password)
    let invalidPasswordMessage = ''
    if (invalidPassword) invalidPasswordMessage = 'Invalid password'

    let invalidPhoneNumber = false
    if (signUpState.phoneNumberChanged) invalidPhoneNumber = !isPhoneNumberValid(signUpState.phoneNumber)
    let invalidPhoneNumberMessage = ''
    if (invalidPhoneNumber) invalidPhoneNumberMessage = 'Invalid phone number'

    return (
        <div>

            <SignInButton onClick={handleOpenDialog}/>

            <Dialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={dialogOpen}
                    maxWidth={"lg"}>
                <DialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>Sign in</DialogTitle>
                <DialogContent dividers>

                    <div id={"auth_layout"}>

                        {/* Sign in form */}
                        <div className={'auth_form_layout'}>
                            <form noValidate autoComplete="off" className={'auth_form'}>
                                <div className={'auth_field_layout'}>
                                    <TextField type={'email'} label={'Email'} autoComplete={'current-email'}
                                               className={'auth_field'} id={'sign_in_email'}
                                               onChange={(e) => handleChange(e)}/>
                                </div>

                                <div className={'auth_field_layout'}>
                                    <TextField type={'password'} label={'Password'} autoComplete={'current-password'}
                                               className={'auth_field'} id={'sign_in_password'}
                                               onChange={(e) => handleChange(e)}/>
                                </div>
                            </form>

                            <div className={'auth_button_layout'}>
                                <Button variant="contained" color="primary" size={'medium'}
                                        onClick={() => signIn(signInState)}>Sign in</Button>
                            </div>

                        </div>

                        <div id={'auth_separator'}/>

                        {/* Sign up form */}
                        <div className={'auth_form_layout'}>
                            <form noValidate autoComplete="off" className={'auth_form'}>
                                <div className={'auth_field_layout'}>
                                    <TextField type={'string'} label={'First name'}
                                               error={invalidFirstName} helperText={invalidFirstNameMessage}
                                               className={'auth_field'} id={'firstName'}
                                               onChange={(e) => handleChange(e)}/>
                                </div>

                                <div className={'auth_field_layout'}>
                                    <TextField type={'string'} label={'Last name'}
                                               error={invalidLastName} helperText={invalidLastNameMessage}
                                               className={'auth_field'} id={'lastName'}
                                               onChange={(e) => handleChange(e)}/>
                                </div>

                                <div className={'auth_field_layout'}>
                                    <TextField type={'email'} label={'Email'} autoComplete={'current-email'}
                                               error={invalidEmail} helperText={invalidEmailMessage}
                                               className={'auth_field'} id={'email'}
                                               onChange={(e) => handleChange(e)}/>
                                </div>

                                <div className={'auth_field_layout'}>
                                    <TextField type={'password'} label={'Password'} autoComplete={'current-password'}
                                               error={invalidPassword} helperText={invalidPasswordMessage}
                                               className={'auth_field'} id={'password'}
                                               onChange={(e) => handleChange(e)}/>
                                </div>

                                <div className={'auth_field_layout'}>
                                    <TextField type={'phone_number'} label={'Phone number'}
                                               error={invalidPhoneNumber} helperText={invalidPhoneNumberMessage}
                                               className={'auth_field'} id={'phoneNumber'}
                                               onChange={(e) => handleChange(e)}/>
                                </div>
                            </form>

                            <div className={'auth_button_layout'}>
                                <Button variant="contained" color="primary" size={'medium'} autoFocus
                                        onClick={() => signUp(signUpState)}>Sign up</Button>
                            </div>

                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <BrowserRouter>

                <Switch>
                    <Route path="/wallet">
                        <Wallet/>
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

const titleStyles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
            fontWeight: "bold"
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
        formControl: {
            marginTop: theme.spacing(2),
            minWidth: 120,
        },
        formControlLabel: {
            marginTop: theme.spacing(1),
        }
    });

export interface DialogTitleProps extends WithStyles<typeof titleStyles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

// Configured dialog title
const DialogTitle = withStyles(titleStyles)((props: DialogTitleProps) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

// Configured dialog content
const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


function signIn(state: SignInState) {

    console.log("Sign in called with " + state.email + ", " + state.password)

    // https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router
    redirect()
}

function redirect() {
    return (
        <Route exact path="/wallet">
            <Wallet/>
        </Route>
    )
}

export default AuthDialog;
