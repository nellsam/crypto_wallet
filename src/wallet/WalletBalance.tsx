import {AccountBalance} from "@material-ui/icons";
import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {getFormattedPrice} from "../utils/FormattedPrice";


export default function WalletBalance() {

    const classes = cardStyles();

    const balance = 'Balance: ' + getFormattedPrice(15434)

    return (
        <Card className={classes.root}>

            <AccountBalance fontSize={'small'} style={{marginLeft: '1vw', marginRight: '1vw'}}/>
            <h6 id={'wallet_balance_text'}>{balance}</h6>
        </Card>
    )
}

const cardStyles = makeStyles({
    root: {
        minWidth: '30%',
        minHeight: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        width: 'fit-content',
        height: 'fit-content',
        marginBottom: '2vw',
        padding: '0.5vw',
    },
});