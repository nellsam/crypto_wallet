import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Redirect} from "react-router";


function Wallet() {

    return (
        <div className="Wallet">

            <Navigation/>

            <p>Welcome to wallet</p>
        </div>

    )
}


function Navigation() {
    return (
        <div id={'navigation'}>
            <a id={'nav_title'} href={"/"}>Crypto wallet</a>

            <div id={'nav_items'}>

                <SignOutButton/>

            </div>
        </div>
    )
}

function SignOutButton() {

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

export default Wallet;