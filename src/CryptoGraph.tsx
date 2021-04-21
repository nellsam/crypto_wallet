import React from "react";
import {Line} from "react-chartjs-2";

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
                        text: props.name,
                        fontSize: 25
                    },
                    legend: {
                        display: false,
                        position: 'bottom'
                    }
                }}
            />
        </div>
    );
}

export function getCryptocurrencyTitle(props: CryptoGraphProps): string {
    return props.name + " " + getFormattedPrice(props.price) + "€"
}

export function getFormattedPrice(price : Number) : string {
    return price.toLocaleString()
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