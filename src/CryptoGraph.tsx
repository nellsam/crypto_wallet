import React from "react";
import {Line} from "react-chartjs-2";

// https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react
//https://www.chartjs.org/docs/latest/getting-started/integration.html
//https://www.chartjs.org/docs/latest/charts/line.html

export function CryptoGraph(props: CryptoGraphProps) {
    return (
        <div>
            <h3 className={"crypto_graph_title"}>{getCryptocurrencyTitle(props)}</h3>

            <Line
                data={props.cryptoState}
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
                        duration: 1000,
                        easing: "linear"
                    }
                }}
            />
        </div>
    );
}

export function getCryptocurrencyTitle(props: CryptoGraphProps): string {
    return props.name + " " + getFormattedPrice(props.price)
}

export function getFormattedPrice(price: Number): string {
    return price.toLocaleString() + "€"
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
    cryptoState: any
}