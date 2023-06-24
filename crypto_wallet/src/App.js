import React from 'react';
import image from "./img/Galaxy.jpg"
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'
//mui
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {

  //states and functions
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignUp, setShowSignUp] = React.useState(false);

  const handleClickLogin = () => {
    setShowLogin(true);
  }

  const handleClickSignUp = () => {
    setShowSignUp(true);
  }

  return (
    <div>
      <div className="App" style={{display:"flex", alignItems:"center", top:"50%", justifyContent:"center", backgroundImage:`url(${image})`, width:"100vw", height:"100vh", backgroundSize:"cover"}}>
        {(!loggedIn && !showLogin && !showSignUp) &&
          <>
            <Grid container spacing={10} align="center">
              <Grid item xs={12}>
                <Typography variant='h2'>Welcome to Crypto Wallet!</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6'>The most simple approach to managing your Cryptocurrency!</Typography>
                <Typography variant='h6'>Create a wallet now or login to an existing one.</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" onClick={handleClickSignUp}>Create a new wallet</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" onClick={handleClickLogin}>Login to a wallet</Button>
              </Grid>
            </Grid>
          </>
        }
        {showLogin &&
          <>
            <Login></Login>
          </>
        }
        {showSignUp &&
          <>
          
          </>
        }
        {loggedIn &&
          <>
            Logged In
          </>
        }
      </div>
    </div>
  );
}

export default App;
