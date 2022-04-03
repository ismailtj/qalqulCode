import React from "react";
import { Typography, Paper, Grid, Stack, IconButton } from "@mui/material";
import { BsFillCaretRightFill } from "react-icons/bs";
import AuthCheck from "../components/Auth/AuthCheck";

const list = [
  {
    name: "room 1",
    onlineUsers: 23,
  },
  {
    name: "room 2",
    onlineUsers: 100,
  },
  {
    name: "room 3",
    onlineUsers: 233,
  },
  {
    name: "room 4",
    onlineUsers: 38,
  },
];

const Rooms = () => {
  return (
    <AuthCheck>
      <Typography component="h2" variant="h3" mb={3}>
        Rooms's list
      </Typography>
      <Grid container spacing={2}>
        {list.map((room, key) => (
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Stack flexDirection="row" justifyContent="space-between">
                <Typography component="h2" variant="h5">
                  {room.name}
                </Typography>
                <IconButton aria-label="delete" color="primary">
                  <BsFillCaretRightFill color="#1976d2" />
                </IconButton>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </AuthCheck>
  );
};

export default Rooms;
