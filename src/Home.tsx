import AuthDialog from "./authentication/ui/AuthDialog";
import YearSelect from "./YearSelect";
import {CryptoGraph} from "./graphs/CryptoGraph";
import React from "react";


function Home() {

    return (
        <div>

            <div id={'navigation'}>
                <a id={'nav_title'} href={"/"}>Crypto wallet</a>

                <div id={'nav_items'}>

                    <AuthDialog/>

                </div>
            </div>

            <div id={'year_select'}>
                <YearSelect/>
            </div>

            <div id={'graphs'}>

                <div className={'graph_row'}>

                    <div className={'graph'}>
                        <CryptoGraph name={"Bitcoin (BTC)"} price={54678} cryptoState={btcState}/>
                    </div>

                    <div className={'graph'}>
                        <CryptoGraph name={"Ethereum (ETH)"} price={2601} cryptoState={ethState}/>
                    </div>

                </div>
                <div className={'graph_row'}>

                    <div className={'graph'}>
                        <CryptoGraph name={"Bitcoin Cash (BCH)"} price={938} cryptoState={bchState}/>
                    </div>

                    <div className={'graph'}>
                        <CryptoGraph name={"Litecoin (LTC)"} price={282} cryptoState={ltcState}/>
                    </div>

                </div>

                <div className={'graph_row'}>

                    <div className={'graph'}>
                        <CryptoGraph name={"Stellar (XLM)"} price={0.49} cryptoState={xlmState}/>
                    </div>

                    <div className={'graph'}>
                        <CryptoGraph name={"Dogecoin (DOGE)"} price={0.28} cryptoState={dgcState}/>
                    </div>

                </div>
            </div>

            <div className={'footer_layout'}>

                <div className={'footer_items'}>

                    <section id={'footer_authors'}>
                        <a className={'footer_author'} href={'_blank'} rel="noreferrer">Samuel Bernát</a>
                        <a className={'footer_author'} href={'_blank'} rel="noreferrer">Adam Kozma</a>
                    </section>

                    <a href={githubPath} target="_blank" rel='noreferrer'>
                        <img id={'footer_github'} src={"github_icon.png"} alt={"Github project"}/>
                    </a>

                </div>

            </div>

        </div>
    );
}

const btcState = getState(2021, [29388, 36790, 33535, 47936, 49635, 55665, 58730, 63233])

const ethState = getState(2021, [730, 1169, 1374, 1779, 1571, 1794, 1967, 2517])

const bchState = getState(2021, [342, 491, 414, 715, 501, 523, 555, 866])

const ltcState = getState(2021, [126, 143, 132, 207, 176, 200, 202, 286])

const xlmState = getState(2021, [0.13, 0.28, 0.32, 0.49, 0.43, 0.38, 0.42, 0.64])

const dgcState = getState(2021, [0.01, 0.01, 0.02, 0.06, 0.05, 0.06, 0.06, 0.18])

/**
 * @param year
 * @param data Array of values for each month
 * @return Configured state for cryptocurrency graph.
 * @see CryptoGraph
 */
export function getState(year: Number, data: Array<Number>): any {
    return {
        labels: getMonthsUntilNow(year, 2),
        datasets: [
            {
                label: 'Price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: data
            }
        ]
    }
}

/**
 * Months until now according to provided year
 */
function getMonthsUntilNow(year: Number, dataCountPerMonth: Number) {
    return ['January', '', 'February', '', 'March', '', 'April', '']
    //return ['January', 'February', 'March', 'April']
}

/**
 * Get corresponding month for provided index.
 * @param numberIndex
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getMonth(numberIndex: Number) {
    // TODO : Call php function using ajax
}

/**
 * Link to github project.
 */
const githubPath = 'https://github.com/nellsam/crypto_wallet'

export default Home;