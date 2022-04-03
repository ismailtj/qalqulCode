import React, { useContext, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SideBarMenu } from "../../Routes/SideBarMenu";
import { Typography } from "@mui/material";
import { currentUser } from "../Auth/UserContext";
import { useNavigate } from "react-router";

const SideBarList = (props) => {
  const navigate = useNavigate();
  const user = useContext(currentUser);
  let size = 25;

  const [Menu, setMenu] = useState([]);
  // console.log("Menu>>>", Menu);
  useEffect(() => {
    if (user.CurrentUser.name) {
      let filtredMenu = SideBarMenu.filter(
        (menu) => menu.ifLogin === true || menu.ifLogin === "always"
      );
      // console.log(filtredMenu);
      setMenu(filtredMenu);
    } else if (!user.CurrentUser.name) {
      let filtredMenu = SideBarMenu.filter(
        (menu) => menu.ifLogin === false || menu.ifLogin === "always"
      );
      // console.log("filtredMenu:", filtredMenu);
      setMenu(filtredMenu);
    }
  }, [user]);

  return (
    <>
      <List>
        {Menu.map((item, key) => (
          <ListItemButton key={key} onClick={() => navigate(item.link)}>
            <ListItemIcon>{item.icon(size)}</ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ opacity: props.open ? 1 : 0 }}
            >
              <Typography component="h2" variant="body1">
                {item.name}
              </Typography>
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default SideBarList;
