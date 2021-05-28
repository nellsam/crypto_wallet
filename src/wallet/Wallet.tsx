import React from "react";
import SignOutButton from "./SignOutButton";
import CryptoTabs from "./CryptoTabs";
import Footer from "../home/Footer";
import WalletBalance from "./WalletBalance";
import {makeStyles} from "@material-ui/core/styles";
import UserInfo from "./UserInfo";


function Wallet() {

    const classes = useStyles()

    return (
        <div>

            <Navigation/>

            <div id={'crypto_wallet_content'}>

                <WalletBalance/>

                {/*<div className={classes.header}>*/}

                {/*    <div>*/}
                {/*        */}
                {/*    </div>*/}

                {/*    <div className={classes.user}>*/}
                {/*        <UserInfo/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <CryptoTabs/>

            </div>


            <Footer/>
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

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    balance: {
        marginRight: 'auto',
    },
    user: {
        marginLeft: 'auto',
    },
}));


export default Wallet;