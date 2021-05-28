import React from "react";
import {Line} from "react-chartjs-2";
import {getFormattedPrice} from "../utils/FormattedPrice";
import {CryptoData} from "../crypto/CryptoData";
import {CryptoGraphData} from "./CryptoGraphData";
import PriceMovement from "./PriceMovement";
import getPercentageDifference from "../utils/PercentageDifference";

// https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react
//https://www.chartjs.org/docs/latest/getting-started/integration.html
//https://www.chartjs.org/docs/latest/charts/line.html

export function CryptoGraph(props: CryptoGraphProps) {

    const prices = props.data.prices
    const latestPrice = prices[prices.length - 1]
    const penultimatePrice = prices[prices.length - 2]
    console.log(props.name + " latest price: " + latestPrice + ", penultimate price " + penultimatePrice)

    const diff = getPercentageDifference(penultimatePrice, latestPrice)
    console.log("Difference " + diff)

    return (
        <div>

            <div className={'row'}>
                <h3 className={"crypto_graph_title"}>{getCryptocurrencyTitle(props)}</h3>
                <PriceMovement percentageDifference={diff}/>
            </div>

            <Line
                data={CryptoGraphData(props.data)}
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
                        duration: 500,
                        easing: "linear"
                    },
                    elements: {
                        line: {
                            tension: 0.5,
                        },
                        point: {
                            radius: 2,
                        }
                    },
                }}
            />
        </div>
    );
}

export function getCryptocurrencyTitle(props: CryptoGraphProps): string {
    return props.name + " " + getFormattedPrice(props.price)
}

/**
 * Attributes for cryptocurrency graph.
 */
export interface CryptoGraphProps {

    /** Name of currency and price that is displayed as title */
    name: string,

    /** Price in euros */
    price: Number

    /** Crypto data */
    data: CryptoData
}

