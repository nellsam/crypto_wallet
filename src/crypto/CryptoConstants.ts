/**
 * Available cryptocurrencies
 */
import {CryptoTypes} from "./CryptoTypes";

export abstract class CryptoConstants {

    static readonly BITCOIN: string = "Bitcoin (BTC)";
    static readonly ETHEREUM: string = "Ethereum (ETH)";
    static readonly BITCOIN_CASH: string = "Bitcoin Cash (BCH)";
    static readonly LITECOIN: string = "Litecoin (LTC)";
    static readonly STELLAR: string = "Stellar (XLM)";
    static readonly DOGECOIN: string = "Dogecoin (DOGE)";

    static readonly BITCOIN_SYMBOL: string = "BTC";
    static readonly ETHEREUM_SYMBOL: string = "ETH";
    static readonly BITCOIN_CASH_SYMBOL: string = "BCH";
    static readonly LITECOIN_SYMBOL: string = "LTC";
    static readonly STELLAR_SYMBOL: string = "XLM";
    static readonly DOGECOIN_SYMBOL: string = "DOGE";
}

/**
 * @return Corresponding cryptocurrency name for given type.
 */
export function getCryptoName(type : CryptoTypes) : string {

    switch (type) {
        case CryptoTypes.BTC: {
            return CryptoConstants.BITCOIN;
        }
        case CryptoTypes.ETH: {
            return CryptoConstants.ETHEREUM;
        }
        case CryptoTypes.BCH: {
            return CryptoConstants.BITCOIN_CASH;
        }
        case CryptoTypes.LTC: {
            return CryptoConstants.LITECOIN;
        }
        case CryptoTypes.XLM: {
            return CryptoConstants.STELLAR;
        }
        case CryptoTypes.DOGE: {
            return CryptoConstants.DOGECOIN;
        }
    }
}

/**
 * @return Corresponding cryptocurrency symbol for given type.
 */
export function getCryptoSymbol(type : CryptoTypes) {

    switch (type) {
        case CryptoTypes.BTC: {
            return CryptoConstants.BITCOIN_SYMBOL;
        }
        case CryptoTypes.ETH: {
            return CryptoConstants.ETHEREUM_SYMBOL;
        }
        case CryptoTypes.BCH: {
            return CryptoConstants.BITCOIN_CASH_SYMBOL;
        }
        case CryptoTypes.LTC: {
            return CryptoConstants.LITECOIN_SYMBOL;
        }
        case CryptoTypes.XLM: {
            return CryptoConstants.STELLAR_SYMBOL;
        }
        case CryptoTypes.DOGE: {
            return CryptoConstants.DOGECOIN_SYMBOL;
        }
    }

}