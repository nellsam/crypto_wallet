import {CryptoTypes} from "../crypto/CryptoTypes";
import {getCryptoSymbol} from "../crypto/CryptoConstants";
import {getFormattedPrice} from "../utils/FormattedPrice";
import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


export default function CryptoPrice(props : CryptoPriceProps) {

    const symbol = getCryptoSymbol(props.type)
    const price = getFormattedPrice(29234)
    const title = "1 " + symbol + " = " + price

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <h6 className={classes.title}>{title}</h6>
        </Card>
    );
}

interface CryptoPriceProps {
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
        marginBottom: '0.5vw',
        padding: '0.5vw',
    },
    title : {
        padding: 0,
        margin: 0,
    }
});