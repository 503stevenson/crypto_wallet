import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CreateWallet(props) {
  
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [name, setName] = React.useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = () => {
        if(!name === ''){
            callCreateWallet(name);
        }
        props.onCreate();
    }

    const callCreateWallet = (name) => {
        //add wallet to database
    }

    return (
        <>
            <Grid container spacing={10} align="center">
                <Grid item xs={12}>
                    <Typography variant='h6'>New Wallet:</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="--Enter a Wallet Name--" variant="outlined" sx={{width:'100ch'}} onChange={handleChangeName}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default CreateWallet;