import AuthDialog from "../authentication/ui/AuthDialog";
import YearSelect from "./YearSelect";
import {CryptoGraph} from "../graphs/CryptoGraph";
import React from "react";
import {bchState, btcState, dgcState, ethState, ltcState, xlmState} from "../crypto/CryptoData";
import {CryptoConstants} from "../crypto/CryptoConstants";
import Footer from "./Footer";


function Home() {

    return (
        <div>

            <Navigation/>

            <div id={'year_select'}>
                <YearSelect/>
            </div>

            <div id={'graphs'}>

                <div className={'graph_row'}>

                    <div className={'graph_home'}>
                        <CryptoGraph name={CryptoConstants.BITCOIN} price={54678} data={btcState}/>
                    </div>

                    <div className={'graph_home'}>
                        <CryptoGraph name={CryptoConstants.ETHEREUM} price={2601} data={ethState}/>
                    </div>

                </div>
                <div className={'graph_row'}>

                    <div className={'graph_home'}>
                        <CryptoGraph name={CryptoConstants.BITCOIN_CASH} price={938} data={bchState}/>
                    </div>

                    <div className={'graph_home'}>
                        <CryptoGraph name={CryptoConstants.LITECOIN} price={282} data={ltcState}/>
                    </div>

                </div>

                <div className={'graph_row'}>

                    <div className={'graph_home'}>
                        <CryptoGraph name={CryptoConstants.STELLAR} price={0.49} data={xlmState}/>
                    </div>

                    <div className={'graph_home'}>
                        <CryptoGraph name={CryptoConstants.DOGECOIN} price={0.28} data={dgcState}/>
                    </div>

                </div>
            </div>

            <Footer/>

        </div>
    );
}

function Navigation() {
    return (
        <div id={'navigation'}>
            <a id={'nav_title'} href={"/"}>Crypto wallet</a>

            <div id={'nav_items'}>

                <AuthDialog/>

            </div>
        </div>
    )
}

/**
 * Get corresponding month for provided index.
 * @param numberIndex
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getMonth(numberIndex: Number) {
    // TODO : Call php function using ajax
}

export default Home;