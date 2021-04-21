import React from 'react';
import './App.css';
import {Line} from "react-chartjs-2";
import YearSelect from "./YearSelect";
import SignInButton from "./SignInButton";
import {CryptoGraph} from "./CryptoGraph";

// https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react
//https://www.chartjs.org/docs/latest/getting-started/integration.html
//https://www.chartjs.org/docs/latest/charts/line.html

function App() {
    return (
        <div className="App">

            <body>

            <div id={'navigation'}>
                <h4 id={'nav_title'}>Crypto wallet</h4>

                <div id={'nav_items'}>

                    {/*<a className={'nav_item'}>Sign in</a>*/}

                    <SignInButton/>

                </div>
            </div>

            <div id={'year_select'}>
                <YearSelect/>
            </div>


            <div id={'graphs'}>

                <div className={'graph_layout'}>

                    <div className={'graph'}>
                        <Line
                            data={btcState}
                            options={{
                                responsive: true,

                                title: {
                                    display: true,
                                    text: 'Bitcoin (BTC)',
                                    fontSize: 25
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                }
                            }}
                        />
                    </div>

                    <div className={'graph'}>
                        <Line
                            data={ethState}
                            options={{
                                responsive: true,
                                showLines: true,

                                title: {
                                    display: true,
                                    text: 'Ethereum (ETH)',
                                    fontSize: 25
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                }
                            }}
                        />
                    </div>
                </div>

                <div className={'graph_layout'}>

                    <div className={'graph'}>
                        <CryptoGraph name={"Bitcoin (BTC)"} cryptoState={btcState}/>
                    </div>

                    <div id={'eth_graph'} className={'graph'}>
                        <Line
                            data={ethState}
                            options={{
                                responsive: true,
                                showLines: true,

                                title: {
                                    display: true,
                                    text: 'Ethereum (ETH)',
                                    fontSize: 25
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                }
                            }}
                        />
                    </div>
                </div>
            </div>

            </body>

        </div>
    );
}

const btcState = getState(2021, [23673, 27342, 37332, 50180])

const ethState = getState(2021, [23673, 27342, 37332, 50180])

/**
 * Months until according to provided year
 */
function getMonthsUntilNow(year: Number) {
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
        labels: getMonthsUntilNow(year),
        datasets: [
            {
                label: 'Price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: data //[602, 1084, 1171, 1629] // data: [65, 59, 80, 81]
            }
        ]
    }
}


export default App;
