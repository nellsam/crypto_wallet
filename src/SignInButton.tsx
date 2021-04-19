import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// https://material-ui.com/components/buttons/#contained-buttons

export default function SignInButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary">
                Sign in
            </Button>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);
