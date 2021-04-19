import React from 'react';
import './App.css';
import {Line} from "react-chartjs-2";
import YearSelect from "./YearSelect";
import SignInButton from "./SignInButton";

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

            </body>

        </div>
    );
}

const btcState = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
        {
            label: 'Price',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [23673, 27342, 37332, 50180] // data: [65, 59, 80, 81]
        }
    ]
}

const ethState = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
        {
            label: 'Price',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [602, 1084, 1171, 1629] // data: [65, 59, 80, 81]
        }
    ]
}

export default App;
