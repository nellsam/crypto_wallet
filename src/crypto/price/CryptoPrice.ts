import {CryptoTypes} from "../CryptoTypes";
import getBitcoinPrice from "./BitcoinPrice";

/**
 * @param type Type of cryptocurrency price to retrieve.
 * @param callback Returns price in euros for one cryptocurrency unit.
 */
export default function getCryptoPrice(type: CryptoTypes, callback : () => number) {

    switch (type) {
        case CryptoTypes.BTC: {
            getBitcoinPrice(callback)
            break;
        }
        case CryptoTypes.ETH: {
            break;
        }
        case CryptoTypes.BCH: {
            break;
        }
        case CryptoTypes.LTC: {
            break;
        }
        case CryptoTypes.XLM: {
            break;
        }
        case CryptoTypes.DOGE: {
            break;
        }
    }
}