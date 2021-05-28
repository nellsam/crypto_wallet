import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {CryptoConstants} from "../crypto/CryptoConstants";
import CryptoTabContent from "./CryptoTabContent";
import {Card} from "@material-ui/core";
import {CryptoTypes} from "../crypto/CryptoTypes";

export default function CryptoTabs() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Card className={classes.root}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs"
                className={classes.tabs}
                variant="fullWidth"
                indicatorColor="primary"
            >
                <Tab label={CryptoConstants.BITCOIN} {...a11yProps(0)} />
                <Tab label={CryptoConstants.ETHEREUM} {...a11yProps(1)} />
                <Tab label={CryptoConstants.BITCOIN_CASH} {...a11yProps(2)} />
                <Tab label={CryptoConstants.LITECOIN} {...a11yProps(3)} />
                <Tab label={CryptoConstants.STELLAR} {...a11yProps(4)} />
                <Tab label={CryptoConstants.DOGECOIN} {...a11yProps(5)} />
            </Tabs>
            <CryptoTabPanel value={value} index={0}>
                <CryptoTabContent type={CryptoTypes.BTC}/>
            </CryptoTabPanel>
            <CryptoTabPanel value={value} index={1}>
                <CryptoTabContent type={CryptoTypes.ETH}/>
            </CryptoTabPanel>
            <CryptoTabPanel value={value} index={2}>
                <CryptoTabContent type={CryptoTypes.BCH}/>
            </CryptoTabPanel>
            <CryptoTabPanel value={value} index={3}>
                <CryptoTabContent type={CryptoTypes.LTC}/>
            </CryptoTabPanel>
            <CryptoTabPanel value={value} index={4}>
                <CryptoTabContent type={CryptoTypes.XLM}/>
            </CryptoTabPanel>
            <CryptoTabPanel value={value} index={5}>
                <CryptoTabContent type={CryptoTypes.DOGE}/>
            </CryptoTabPanel>
        </Card>
    );
}

interface CryptoTabsPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function CryptoTabPanel(props: CryptoTabsPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            className={'crypto_tap_panel'}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'fit-content',
        margin: 0,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

