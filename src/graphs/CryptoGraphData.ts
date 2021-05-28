import {ChartData} from "react-chartjs-2";
import Chart from "chart.js";
import {CryptoData} from "../crypto/CryptoData";

/**
 * @return Configured state for cryptocurrency graph.
 * @see CryptoGraph
 */
export function CryptoGraphData(cryptoData : CryptoData): ChartData<Chart.ChartData> {
    return {
        labels: getMonthsUntilNow(cryptoData.year, 2),
        datasets: [
            {
                label: 'Price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: cryptoData.prices
            }
        ]
    }
}

/**
 * Months until now according to provided year
 */
function getMonthsUntilNow(year: Number, dataCountPerMonth: Number) {
    return ['January', '', 'February', '', 'March', '', 'April', '']
}

export function CryptoWalletGraphData(cryptoData : CryptoData): ChartData<Chart.ChartData> {
    return {
        labels: getShortMonthsUntilNow(),
        datasets: [
            {
                label: 'Price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: cryptoData.prices
            }
        ]
    }
}

function getShortMonthsUntilNow() {
    return ['Jan', '', 'Feb', '', 'Mar', '', 'Apr', ''] // 'May', ''
}