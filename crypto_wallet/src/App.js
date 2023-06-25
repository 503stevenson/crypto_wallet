import React from 'react';
import image from "./img/baby-blue-color.png";
import './App.css';
import Login from './components/Login';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "./components/Nav";
import Collection from "./components/Collection";

function App() {

  //states and functions
  const { isLoading, isAuthenticated, error, user } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <div>
      <Nav stlye={{position:"sticky", top:"0%", left:"0%", width:"100vw"}}></Nav>
      <div className="App" style={{display:"flex", alignItems:"center", top:"50%", justifyContent:"center", backgroundImage:`url(${image})`, width:"100vw", minHeight:"100vh", backgroundSize:"cover"}}>
        {(!isAuthenticated) &&
          <>
            <Grid container spacing={10} align="center">
              <Grid item xs={12}>
              <Typography variant='h2'>Welcome to Crypto Wallet!</Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography variant='h6'>The most simple approach to managing your Cryptocurrency!</Typography>
              <Typography variant='h6'>Use Auth0 *soon worldID* to log in</Typography>
              <Typography variant='h6'>logging in loads your existing wallet or creates a new one for you!</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Login></Login>
              </Grid>
            </Grid>
          </>
        }
        {(isAuthenticated) &&
          <>
            <Collection></Collection>
          </>
        }
      </div>
    </div>
  );
}

export default App;
