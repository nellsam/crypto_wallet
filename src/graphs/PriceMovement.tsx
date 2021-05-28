import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export default function PriceMovement(props : PriceMovementProps) {

    const classes = useStyles()

    const percentageDiff = props.percentageDifference
    const roundedDiff = Math.round((percentageDiff + Number.EPSILON) * 100) / 100

    const formattedDiff = roundedDiff + '%'

    if (percentageDiff > 0) {
        // Bullish trend
        return (
            <div className={classes.root}>
                <p className={classes.percentage}>{formattedDiff}</p>

                {/* Arrow is aiming up */}
                <ArrowUpward className={classes.arrow} style={{color:'green'}}/>
                {/*{height:'1vw', padding:'0', margin:'0', color:'green'}*/}
            </div>
        );
    } else if (percentageDiff < 0) {
        // Bearish trend
        return (
            <div className={classes.root}>
                <p className={classes.percentage}>{formattedDiff}</p>

                {/* Arrow is aiming down */}
                <ArrowDownward className={classes.arrow} style={{color:'red'}}/>
                {/*{height:'1vw', padding:'0', margin:'0', color:'red'}*/}
            </div>
        );
    } else {
        // Flat trend
        return (
            <p className={classes.percentage}>{formattedDiff}</p>
        );
    }
}

interface PriceMovementProps {
    percentageDifference : number
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    percentage: {
        marginLeft: '2vw',
        fontSize: '1vw',
        padding:'0'
    },
    arrow: {
        height:'1vw',
        padding:'0',
        margin:'0'
    }

}));