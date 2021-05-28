import React, {useState} from "react";
import {Redirect} from "react-router";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

interface SignOutButtonProps {
    onClick : () => any
}

export default function SignOutButton() {

    const classes = useSignOutButtonStyles();

    const[signedOut, setSignedOut] = useState(false)

    const handleClick = () => {
        signOut()
        setSignedOut(true)
    }

    if (signedOut) {
        return (<Redirect to={'/'}/>)
    }

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={handleClick}>
                Sign out
            </Button>
        </div>
    );
}

const useSignOutButtonStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

function signOut() {

    console.log("Sign out called")
}