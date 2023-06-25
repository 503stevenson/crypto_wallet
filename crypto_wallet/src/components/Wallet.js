import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import RestoreKeys from './RestoreKeys';
import Transfer from './Transfer';

function Wallet(props) {
  
    const testHoldings = [{name:"eth", amount:0.2}, {name:"filecoin", amount:2.5}, {name:"polygon", amount:3.14}];
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [wallet, setWallet] = React.useState(props.wallet);
    const [showRestore, setShowRestore] = React.useState(false);
    const [showTransfer, setShowTransfer] = React.useState(false);
    const [holdings, setHoldings] = React.useState(testHoldings)

    const getWalletHoldings = () => {
        return;
    }

    const handleTransfer = () => {
        setShowTransfer(true);
    }

    const handleRestoreKeys = () => {
        setShowRestore(true);
    }

    return (
        <>
            {(!showRestore && !showTransfer) &&
                <Grid container spacing={7} align="center" style={{top:"30%"}}>
                    <Grid item xs={12}>
                        <Typography variant='h2'>{wallet.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Public Key: {wallet.public_key}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h2'>Balance: {wallet.balance}CAD</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Button variant="contained" onClick={handleTransfer}>Transfer Currency</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={handleRestoreKeys}>Restore Keys</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Holdings:</Typography>
                    </Grid>
                    {holdings.map((holding) => {
                        return(
                            <>
                                <Grid item xs={6}>
                                    <Typography variant='h6'>{holding.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='h6'>{holding.amount}</Typography>
                                </Grid>
                            </>
                        )
                    })}
                    <Grid item xs={12}></Grid>
                </Grid>
            }
            {showRestore &&
                <RestoreKeys></RestoreKeys>
            }
            {showTransfer &&
                <Transfer holdings={holdings}></Transfer>
            }
        </>
    );
}

export default Wallet;