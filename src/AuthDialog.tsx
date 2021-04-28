import React, {useState} from "react";
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

// https://material-ui.com/components/text-fields/
// https://material-ui.com/components/buttons/
// https://reactjs.org/docs/forms.html
// https://material-ui.com/components/dialogs/#dialog

export function AuthDialog() {

    // React hook for handling dialog
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    }

    let firstName: string = ""
    let lastName: string = ""

    let email: string = ""
    let invalidEmail: boolean = true
    const invalidEmailMessage = 'Invalid email'

    let password: string = ""
    let invalidPassword: boolean

    let phoneNumber: string = ""

    return (
        <div>
            <SignInButton onClick={() => handleClickOpen}/>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>Sign up</DialogTitle>
                <DialogContent dividers>

                    <div>
                        <form noValidate autoComplete="off" className={'auth_form'}>
                            <TextField type={'string'} label={'First name'} className={'auth_field'}
                                       onChange={(e) => firstName = e.target.value}/>
                            <TextField type={'string'} label={'Last name'} className={'auth_field'}
                                       onChange={(e) => lastName = e.target.value}/>
                            <TextField type={'email'} label={'Email'} error={invalidEmail}
                                       helperText={invalidEmailMessage} className={'auth_field'}
                                       onChange={(e) => email = e.target.value}/>
                            <TextField type={'password'} label={'Password'} className={'auth_field'}
                                       onChange={(e) => password = e.target.value}/>
                            <TextField type={'phone_number'} label={'Phone number'} className={'auth_field'}
                                       onChange={(e) => phoneNumber = e.target.value}/>
                        </form>

                        <div className={'auth_switch_button_layout'}>
                            <Button color="primary" size={'small'}>Already signed up? Sign in</Button>
                        </div>

                    </div>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus
                            onClick={() => signUp(firstName, lastName, email, password)}
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


function signUp(firstName: string, lastName: string, email: string, password: string) {

    console.log("Signed up called with " + firstName + ", " + lastName + ", " + email + ", " + password)

    // TODO : Add user to the local database using php
}

function signIn(email: string, password: string) {

}

export default AuthDialog;
