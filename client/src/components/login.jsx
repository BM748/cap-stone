import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useState} from 'react';

export default function SignIn({ setToken }) {
  const navigate = useNavigate();
  const [isArtist, setIsArtist] = useState(false);
  const [isPatron, setIsPatron] = useState(false);
  

  const handleCheckboxChange = (type) => {
    if (type === 'artist') {
      setIsArtist(!isArtist);
      setIsPatron(false);
    } else if (type === 'patron') {
      setIsPatron(!isPatron);
      setIsArtist(false);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const email = data.get("email");
      const password = data.get("password");

      if (isArtist) {
        const artistResult = await axios.post(
          'http://localhost:5081/api/login/artist',
          { emailId: email, password }
        );

        const artistToken = artistResult.data.loggedIn;
        setToken(artistToken);

        if (artistToken) {
          navigate('/');
          return;
        }
      } else if (isPatron) {
        const patronResult = await axios.post(
          'http://localhost:5081/api/login/user',
          { emailId: email, password}
          
        );

        const patronToken = patronResult.data.loggedIn;
        setToken(patronToken);

        if (patronToken) {
          navigate('/');
          return;
        }
      } else {
        console.error("Please select either 'Artist' or 'Patron'.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <FormControlLabel
            control={
              <Checkbox
                value="artist"
                color="primary"
                checked={isArtist}
                onChange={() => handleCheckboxChange('artist')}
              />
            }
            label="Artist"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="patron"
                color="primary"
                checked={isPatron}
                onChange={() => handleCheckboxChange('patron')}
              />
            }
            label="Patron"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signInSelection" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}