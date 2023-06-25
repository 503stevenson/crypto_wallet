import React from 'react';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button variant="contained" onClick={() => loginWithRedirect()}>Log In With WorldID</Button>
  );
}

export default Login;