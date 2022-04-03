import { Stack, Typography, TextField, Button } from "@mui/material";
import React from "react";
import regImg from "../../assets/images/regImg.png";
// import dataBase from "../../services/Firebase";

const Register = () => {
  return (
    <Stack height="100%" justifyContent="space-around" alignItems="center">
      <img src={regImg} alt="..." width={300} />
      <Typography variant="h4" component="h2">
        Sign in
      </Typography>
      <TextField
        label="Username"
        variant="standard"
        fullWidth
        sx={{ maxWidth: 400 }}
      />
      <Button
        variant="contained"
        onClick={() => {
          // register();
        }}
      >
        Sign in
      </Button>
    </Stack>
  );
};

export default Register;
