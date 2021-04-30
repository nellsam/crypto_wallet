import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// https://material-ui.com/components/buttons/#contained-buttons

export default function SignInButton(props : SignInButtonProps) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={props.onClick}>
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

export interface SignInButtonProps {
    onClick : () => any
}

