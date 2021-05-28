import {Line} from "react-chartjs-2";
import {CryptoGraphData, CryptoWalletGraphData} from "../graphs/CryptoGraphData";
import React from "react";
import {CryptoGraphProps} from "../graphs/CryptoGraph";

// https://www.chartjs.org/docs/2.8.0/general/

export function WalletCryptoGraph(props: CryptoGraphProps) {

    return (
        <div>
            <Line
                data={CryptoWalletGraphData(props.data)}
                options={{
                    responsive: true,
                    showLines: true,

                    title: {
                        display: false,
                        fontSize: 25
                    },
                    legend: {
                        display: false,
                        position: 'bottom'
                    },
                    animation: {
                        duration: 250,
                        easing: "linear"
                    },
                    elements: {
                        line: {
                            tension: 0,
                        },
                        point: {
                            radius: 1,
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                display: false
                            }
                        }]
                    }
                }}
            />
        </div>
    );
}