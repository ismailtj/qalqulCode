import { Stack, Typography, TextField, Button } from "@mui/material";
import React, { useContext } from "react";
import loginImg from "../../assets/images/loginImg.png";
import { currentUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = useContext(currentUser);
  const navigate = useNavigate();

  const loggin = () => {
    user.setCurrentUser({ name: "ismail" });
    navigate("/rooms");
  };

  return (
    <Stack height="100%" justifyContent="space-around" alignItems="center">
      <img src={loginImg} alt="..." width={300} />
      <Typography variant="h4" component="h2">
        Login
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
          loggin();
        }}
      >
        Log-in
      </Button>
    </Stack>
  );
};

export default Login;
