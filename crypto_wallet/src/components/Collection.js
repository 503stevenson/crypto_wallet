import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import Wallet from './Wallet';
import CreateWallet from './CreateWallet';

function Collection(props) {
  
    const wallets = [{email: "testing123@test.ca", balance: 130, holdings: {eth: 0.3, file: 0.2}, name:"test wallet 1", public_key:"12345", privatekey:"6789"}, {email: "testing123@test.ca", balance: 200, holdings: {eth: 0.3, file: 0.2}, name:"test wallet 2", public_key:"12345", privatekey:"6789"}]
    const { user, isLoading } = useAuth0();
    const [chosenWallet, setChosenWallet] = React.useState('');
    const [createNew, setCreateNew] = React.useState(false);

    const pickWallet = (wallet) => {
        setChosenWallet(wallet);
    }

    const createWallet = () => {
        setCreateNew(true);
    }

    const onCreate = () => {
        setCreateNew(false);
    }

    return (
        <>
            {!chosenWallet &&
                <Grid container spacing={10} align="center">
                    <Grid item xs={12}>
                        <Typography variant='h2'>My Wallets: {}</Typography>
                    </Grid>
                    {createNew &&
                        <Grid item xs={12}>
                            <CreateWallet onCreate={onCreate}></CreateWallet>
                        </Grid>
                    }
                    {!createNew &&
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={createWallet}>Create a new wallet</Button>
                        </Grid>
                    }
                    {wallets.map((wallet) => {
                        return(
                            <>
                                <Grid item xs={4}>
                                    <Typography variant='h6'>{wallet.name}</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant='h6'>Balance: {wallet.balance}CAD</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant="contained" onClick={() => pickWallet(wallet)}>View</Button>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            }
            {chosenWallet &&
                <Wallet wallet={chosenWallet}></Wallet>
            }
        </>
    );
}

export default Collection;