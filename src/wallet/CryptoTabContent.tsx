import WalletOptions from "./WalletOptions";
import {btcState} from "../crypto/CryptoData";
import React, {useState} from "react";
import {WalletCryptoGraph} from "./WalletCryptoGraph";
import {CryptoConstants, getCryptoName} from "../crypto/CryptoConstants";
import CryptoPrice from "./CryptoPrice";
import CryptoBalance from "./CryptoBalance";
import {CryptoTypes} from "../crypto/CryptoTypes";
import {makeStyles, Theme} from "@material-ui/core/styles";

export default function CryptoTabContent(props : CryptoTypeContentProps) {

    const classes = useStyles()

    const cryptoCurrencyName = getCryptoName(props.type)

    return (

        <div className={classes.root}>
            <div className={classes.block}>

                <CryptoPrice type={props.type}/>
                <CryptoBalance type={props.type}/>

                <div className={'graph_wallet'}>
                    <WalletCryptoGraph name={cryptoCurrencyName} price={0} data={btcState}/>
                </div>
            </div>

            <WalletOptions/>

        </div>
    )
}

interface CryptoTypeContentProps {
    type : CryptoTypes
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left',
        marginRight: '5vw',
    }
}));