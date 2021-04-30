import React, {ChangeEvent, useState} from "react";
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog, {DialogProps} from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SignInButton from "./SignInButton";
import {DialogActions, TextField} from "@material-ui/core";
import {isEmailValid, isNameValid, isPasswordValid, isPhoneNumberValid} from "./AuthValidation";
import {SignUpState, getChangedAuthField, getInitialSignUpState} from "./SignUpState";

// https://material-ui.com/components/text-fields/
// https://material-ui.com/components/buttons/
// https://reactjs.org/docs/forms.html
// https://material-ui.com/components/dialogs/#dialog

export function SignUpDialog() {

    const [state, setState] = useState(getInitialSignUpState)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        // Id and value of changed field
        const {id, value} = e.target

        const changedField : string = getChangedAuthField(id.toString())

        // Update state of react component
        setState(prevState => ({

            // Restore previous state
            ...prevState,

            // Update value of changed field (var name = field id)
            [id]: value,

            // Update state of changed field
            [changedField]: true
        }))
    }

    // Handle opening dialog
    const handleOpen = () => {
        setState(prevState => ({
            ...prevState,
            open: true
        }))
    }

    // Handle closing dialog
    const handleClose = () => {
        setState(prevState => ({
            ...prevState,
            open: false
        }))
    }

    // Validation is performed after field is changed
    let invalidFirstName = false
    if (state.firstNameChanged) invalidFirstName = !isNameValid(state.firstName)
    let invalidFirstNameMessage = ''
    if (invalidFirstName) invalidFirstNameMessage = 'Invalid first name'

    let invalidLastName = false
    if (state.lastNameChanged) invalidLastName = !isNameValid(state.lastName)
    let invalidLastNameMessage = ''
    if (invalidLastName) invalidLastNameMessage = 'Invalid last name'

    let invalidEmail = false
    if (state.emailChanged) invalidEmail = !isEmailValid(state.email)
    let invalidEmailMessage = ''
    if (invalidEmail) invalidEmailMessage = 'Invalid email'

    let invalidPassword = false
    if (state.passwordChanged) invalidPassword = !isPasswordValid(state.password)
    let invalidPasswordMessage = ''
    if (invalidPassword) invalidPasswordMessage = 'Invalid password'

    let invalidPhoneNumber = false
    if (state.phoneNumberChanged) invalidPhoneNumber = !isPhoneNumberValid(state.phoneNumber)
    let invalidPhoneNumberMessage = ''
    if (invalidPhoneNumber) invalidPhoneNumberMessage = 'Invalid phone number'

    return (
        <div>

            <SignInButton onClick={handleOpen}/>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={state.open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>Sign up</DialogTitle>
                <DialogContent dividers>

                    <div>
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
                                <TextField type={'email'} label={'Email'}
                                           error={invalidEmail} helperText={invalidEmailMessage}
                                           className={'auth_field'} id={'email'}
                                           onChange={(e) => handleChange(e)}/>
                            </div>

                            <div className={'auth_field_layout'}>
                                <TextField type={'password'} label={'Password'}
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

                        <div className={'auth_switch_button_layout'}>
                            <Button color="primary" size={'small'}>Already signed up? Sign in</Button>
                        </div>

                    </div>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus
                            onClick={() => signUp(state)}
                            color="primary">
                        Sign up
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
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

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);



// firstName: string, lastName: string, email: string, password: string
function signUp(state : SignUpState) {

    console.log("Signed up called with " + state.firstName + ", " + state.lastName + ", " + state.email + ", "
        + state.password + ", " + state.phoneNumber)

    // TODO : Add user to the local database using php
}

function signIn(email: string, password: string) {

}

export default SignUpDialog;
