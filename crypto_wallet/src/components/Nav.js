import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login';
import Logout from './Logout';

export default function Nav() {
    const { isAuthenticated } = useAuth0();

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Crypto Wallet
            </Typography>
            {isAuthenticated &&
                <Logout></Logout>
            }
            {!isAuthenticated &&
                <Login></Login>
            }
            </Toolbar>
        </AppBar>
        </Box>
    );
}