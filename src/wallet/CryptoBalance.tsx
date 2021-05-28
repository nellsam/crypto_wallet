import {CryptoTypes} from "../crypto/CryptoTypes";
import {Card} from "@material-ui/core";
import {getCryptoSymbol} from "../crypto/CryptoConstants";
import {getFormattedPrice} from "../utils/FormattedPrice";
import {makeStyles} from "@material-ui/core/styles";

/**
 * Balance of given cryptocurrency in wallet of logged in user.
 */
export default function CryptoBalance(props : CryptoBalanceProps) {

    const symbol = getCryptoSymbol(props.type)
    const price = getFormattedPrice(15434)
    const title = "Your balance: " + 0.5 + " " + symbol + " (" + price + ")"

    const classes = useStyles()

    return (
        <Card className={classes.root}>

            <h6 className={classes.title}>{title}</h6>

        </Card>
    );
}

interface CryptoBalanceProps {
    type : CryptoTypes
}

const useStyles = makeStyles({
    root: {
        minWidth: '20%',
        minHeight: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        width: 'fit-content',
        height: 'fit-content',
        padding: '0.5vw',
        marginBottom: '1vw',
    },
    title : {
        padding: 0,
        margin: 0,
    }
});