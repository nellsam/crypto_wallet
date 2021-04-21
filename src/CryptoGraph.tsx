import React from "react";
import {Line} from "react-chartjs-2";

export function CryptoGraph(props : CryptoGraphProps) {
    return (
        <Line
            data={props.cryptoState}
            options={{
                responsive: true,
                showLines: true,

                title: {
                    display: true,
                    text: props.name,
                    fontSize: 25
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }}
        />
    );
}

/**
 * Attributes for cryptocurrency graph.
 */
export interface CryptoGraphProps {
    name : string,
    cryptoState : any
}