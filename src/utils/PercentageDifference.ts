

/**
 * @return Difference between two given prices in percentage.
 */
export default function getPercentageDifference(oldPrice: number, newPrice: number): number {

    const percentage = (number1: number, number2: number) => {
        return (((number1 / number2) * 100) - 100) * -1
    }

    if (oldPrice < newPrice) {

        // Bull
        return (percentage(oldPrice, newPrice))

    } else if (oldPrice > newPrice) {

        // Bear
        return percentage(newPrice, oldPrice) * -1

    } else {

        // Flat
        return 0
    }
}