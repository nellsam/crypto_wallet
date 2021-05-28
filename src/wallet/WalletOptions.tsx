import {ButtonGroup, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {useState} from "react";


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
