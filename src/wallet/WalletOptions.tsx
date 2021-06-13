import {ButtonGroup, Dialog, IconButton, DialogActions} from "@material-ui/core";
import {createStyles, makeStyles, Theme, WithStyles, withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import MuiDialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from '@material-ui/core/DialogTitle';


export default function WalletOptions() {

    const classes = useStyles();

    const [depositDialogOpen, setDepositDialogOpen] = useState(false)
    const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false)

    const handleDepositClick = () => {
        setDepositDialogOpen(true)
    }

    const handleWithdrawClick = () => {
        setWithdrawDialogOpen(true)
    }

    const handleDepositClose = () => {
        setDepositDialogOpen(false)
    }

    const handleWithdrawClose = () => {
        setWithdrawDialogOpen(false)
    }

    return (

        <div className={classes.root} id={'wallet_options'}>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
            >
                <Button onClick={handleDepositClick}>Deposit</Button>
                <Button onClick={handleWithdrawClick}>Withdraw</Button>
            </ButtonGroup>


            {/* Deposit dialog */}
            <Dialog onClose={handleDepositClose} aria-labelledby="customized-dialog-title" open={depositDialogOpen}>
                <DialogTitle id="customized-dialog-title" onClose={handleDepositClose}>
                    Deposit
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleDepositClose} color="primary">
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Withdraw dialog */}
            <Dialog onClose={handleWithdrawClose} aria-labelledby="customized-dialog-title" open={withdrawDialogOpen}>
                <DialogTitle id="customized-dialog-title" onClose={handleWithdrawClose}>
                    Withdraw
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleWithdrawClose} color="primary">
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>

        </div>

    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


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

