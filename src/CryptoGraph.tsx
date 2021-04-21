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
                        display: true,
                        position: 'bottom'
                    }
                }}
            />
        </div>


    );
}

export function getCryptocurrencyTitle(props: CryptoGraphProps): string {
    return props.name + " " + props.price + "€"

}

/**
 * Attributes for cryptocurrency graph.
 */
export interface CryptoGraphProps {
    name: string,
    price: string
    cryptoState: any
}