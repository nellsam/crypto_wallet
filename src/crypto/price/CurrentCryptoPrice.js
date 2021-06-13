import * as jQuery from "jquery";
import {backendPath} from "../../utils/BackendPath";
import {CryptoTypes} from "../CryptoTypes";
/**
 * @param type Type of cryptocurrency price to retrieve.
 * @param callback Returns price in euros for one cryptocurrency unit.
 */
export default function getCryptoPrice(type, callback) {

    let filePath = '/prices';

    switch (type) {
        case CryptoTypes.BTC: {
            filePath += '/BtcPrice.php'
            break;
        }
        case CryptoTypes.ETH: {
            filePath += '/EthPrice.php'
            break;
        }
        case CryptoTypes.BCH: {
            filePath += '/BchPrice.php'
            break;
        }
        case CryptoTypes.LTC: {
            filePath += '/LtcPrice.php'
            break;
        }
        case CryptoTypes.XLM: {
            filePath += '/XlmPrice.php'
            break;
        }
        case CryptoTypes.DOGE: {
            filePath += '/DogePrice.php'
            break;
        }
    }

    jQuery.ajax({
        url: backendPath + filePath,
        type: 'GET',
        success: function (data) {
            console.log("Retrieved current price of BTC: " + JSON.stringify(data))
            callback(data)
        },
        error: function (error) {
            console.log('Caught error: ' + JSON.stringify(error));
        }
    })

}