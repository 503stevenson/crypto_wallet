import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import RestoreKeys from './RestoreKeys';

function Wallet(props) {
  
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [wallet, setWallet] = React.useState(props.wallet);
    const [showRestore, setShowRestore] = React.useState(false);
    const [showTransfer, setShowTransfer] = React.useState(false);

    const getWalletHoldings = () => {
        return;
    }

    const handleTransfer = () => {
        return;
    }

    const handleRestoreKeys = () => {
        setShowRestore(true);
    }

    return (
        <>
            {(!showRestore && !showTransfer) &&
                <Grid container spacing={10} align="center">
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
                </Grid>
            }
            {showRestore &&
                <RestoreKeys></RestoreKeys>
            }
        </>
    );
}

export default Wallet;