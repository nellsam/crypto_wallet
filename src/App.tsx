import React from 'react';
import './App.css';
import YearSelect from "./YearSelect";
import SignInButton from "./SignInButton";
import {CryptoGraph} from "./CryptoGraph";

// https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react
//https://www.chartjs.org/docs/latest/getting-started/integration.html
//https://www.chartjs.org/docs/latest/charts/line.html

function App() {
    return (
        <div className="App">

            <div id={'navigation'}>
                <a id={'nav_title'} href={"/"}>Crypto wallet</a>

                <div id={'nav_items'}>

                    <SignInButton/>

                </div>
            </div>

            <div id={'year_select'}>
                <YearSelect/>
            </div>


            <div id={'graphs'}>

                <div className={'graph_row'}>

                    <div className={'graph'}>
                        <CryptoGraph name={"Bitcoin (BTC)"} price={50180} cryptoState={btcState}/>
                    </div>

                    <div className={'graph'}>
                        <CryptoGraph name={"Ethereum (ETH)"} price={50180} cryptoState={ethState}/>
                    </div>

                    <div className={'graph'}>
                        <CryptoGraph name={"Bitcoin Cash (BCH)"} price={50180} cryptoState={bchState}/>
                    </div>

                </div>

                <div className={'graph_row'}>

                    <div className={'graph'}>
                        <CryptoGraph name={"Litecoin (LTC)"} price={50180} cryptoState={ltcState}/>
                    </div>

                    <div className={'graph'}>
                        <CryptoGraph name={"Stellar (XLM)"} price={501806} cryptoState={stlState}/>
                    </div>

                    <div className={'graph'}>
                        <CryptoGraph name={"Dogecoin (DOGE)"} price={50180} cryptoState={dgcState}/>
                    </div>

                </div>
            </div>


            <div className={'footer_layout'}>

                <div className={'footer_items'}>

                    <section id={'footer_authors'}>
                        <a className={'footer_author'} href={""}>Samuel Bernát</a>
                        <a className={'footer_author'} href={""}>Adam Kozma</a>
                    </section>

                    <img id={'footer_github'} src={"github_icon.png"} alt={"Github project"}/>

                </div>

            </div>
        </div>
    );
}

const btcState = getState(2021, [23673, 27342, 37332, 50180])

const ethState = getState(2021, [602, 1084, 1171, 1629])

const bchState = getState(2021, [23673, 27342, 37332, 50180])

const ltcState = getState(2021, [23673, 27342, 37332, 50180])

const stlState = getState(2021, [23673, 27342, 37332, 50180])

const dgcState = getState(2021, [23673, 27342, 37332, 50180])

/**
 * Months until according to provided year
 */
function getMonthsUntilNow(year: Number, dataCountPerMonth: Number) {
    // ['January', '' ,'February', '' , 'March', '', 'April', '']
    return ['January', 'February', 'March', 'April']
}

/**
 * Get corresponding month for provided index.
 * @param numberIndex
 */
function getMonth(numberIndex: Number) {
    // TODO : Call php function using ajax
}

/**
 * @param year
 * @param data Array of values for each month
 * @return Configured state for cryptocurrency graph.
 * @see CryptoGraph
 */
export function getState(year: Number, data: Array<Number>): any {
    return {
        labels: getMonthsUntilNow(year, 1),
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


export default App;
