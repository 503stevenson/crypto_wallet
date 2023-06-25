import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Transfer(props) {
  
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [toWallet, setToWallet] = React.useState('');
    const [transferCoin, setTransferCoin] = React.useState('');
    const [transferAmount, setTransferAmount] = React.useState('');

    const handleChangeToWallet = (event) => {
        setToWallet(event.target.value);
    }

    const handleChangeTransferCoin = (event) => {
        setTransferCoin(event.target.value);
    }

    const handleChangeTransferAmount = (event) => {
        setTransferAmount(event.target.value);
    }

    const handleSubmit = () => {
        //submit transfer
        return;
    }

    return (
        <>
            <Grid container spacing={10} align="center">
                <Grid item xs={12}>
                    <Typography variant='h4'>New Transfer:</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="--Enter the public key of the wallet you wish to transfer to--" variant="outlined" sx={{width:'100ch'}} onChange={handleChangeToWallet}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{width:"40%"}}>
                        <InputLabel>--Select a Currency--</InputLabel>
                        <Select
                        label="Currency"
                        value={transferCoin}
                        onChange={props.handleChangeTransferCoin}
                        >
                        {props.holdings.map((item) => {
                            return <MenuItem value={item.name} key={item.objectID}>{item.name}</MenuItem>
                        })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="--Enter the amount that you wish to transfer--" variant="outlined" sx={{width:'100ch'}} onChange={handleChangeTransferAmount}></TextField>
                </Grid>
                
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleSubmit}>Complete Transfer</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default Transfer;