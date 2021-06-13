import {CryptoTypes} from "../crypto/CryptoTypes";
import {getCryptoSymbol} from "../crypto/CryptoConstants";
import {getFormattedPrice} from "../utils/FormattedPrice";
import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import getCryptoPrice from "../crypto/price/CurrentCryptoPrice";
import {useState} from "react";


export default function CryptoPrice(props : CryptoPriceProps) {

    const[price, setPrice] = useState(0)

    getCryptoPrice(props.type, (price : number) => {
        console.log('Retrieved btc price' + price)

        // Update state
        setPrice(price)
    })

    const symbol = getCryptoSymbol(props.type)
    const formattedPrice = getFormattedPrice(price)
    const title = "1 " + symbol + " = " + formattedPrice

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