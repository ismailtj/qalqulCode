import React from "react";
import { Stack, Typography } from "@mui/material";
import { FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <Typography variant="h2" component="p">
        This App is made with <FaHeart color="red" />
      </Typography>
    </Stack>
  );
};

export default About;
