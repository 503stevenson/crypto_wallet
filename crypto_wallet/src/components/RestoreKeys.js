import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function RestoreKeys(props) {
  
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [name, setName] = React.useState('');
    const [restored, setRestored] = React.useState(false);

    const handleChangeInput = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = () => {
        //get keys using seed
        //if successful:
        setRestored(true);
    }

    return (
        <>
            <Grid container spacing={10} align="center">
                <Grid item xs={12}>
                    <Typography variant='h6'>Restore Keys:</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="--Enter your wallet seed--" variant="outlined" sx={{width:'100ch'}} onChange={handleChangeInput}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleSubmit}>Restore</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default RestoreKeys;