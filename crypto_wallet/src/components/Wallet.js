import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

function Wallet() {
  
    const testWallet = {email: "testing123@test.ca", balance: 130, holdings: {eth: 0.3, file: 0.2}, name:"bleh"}
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [wallet, setWallet] = React.useState(isAuthenticated ? testWallet : null);

    const handleTransfer = () => {
        return;
    }

    const handleResolveKeys = () => {
        return;
    }

    return (
        <>
            <Grid container spacing={10} align="center">
                <Grid item xs={12}>
                    <Typography variant='h2'>{wallet.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h2'>Balance: {wallet.balance}CAD</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Button variant="contained" onClick={handleTransfer}>Transfer Currency</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handleResolveKeys}>Resolve Keys</Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6'>Holdings:</Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default Wallet;