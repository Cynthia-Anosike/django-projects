"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import { useRouter } from 'next/navigation';
function Login(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const route = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      setLoading(true);
      console.log("---> Wants to submit --->")
      console.log("---> Submitted now! --->")
      const data = {
        email: email,
        password: password,
      };
      const response = await fetch('http://127.0.0.1:8080/api/login', {
        method: 'POST',  
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }

      );
      
      const responseData = await response.json();
      localStorage.setItem('jwt', responseData.access_token);
      console.log('<---submitted--->')

      if (response.ok) {
        //Login successful

        // const accessToken = responseData.access_token;

        // Store the access token in a secure cookie using js-cookie
        // Cookies.set('access_token', accessToken, { expires: 7, secure: true }); // 'access_token' is the name of the cookie, and 7 is the number of days to keep it
        //console.log(responseData.message);
        // console.log(accessToken);
        route.push('/books')
      }
      else {
        console.log(responseData.message);
        // Handle login failure, e.g., show an error message to the user.
        console.log("noooo");
        setLoading(false)
      } return;

    }
    catch (error) {
      setLoading(false)
      // Handle request error, e.g., network issue or server error.
      console.log("--> error from catch block -->")
      console.error('Login request failed');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            backgroundImage: `url('./images/login.jpg')`,

          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#00bcd4" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
                // autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ color: "white", backgroundColor: "#00bcd4" }}
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? "Logging in" : "Login"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Login sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}